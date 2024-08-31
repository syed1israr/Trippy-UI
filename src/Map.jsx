// MapComponent.js
import React, { useRef, useState, useEffect } from 'react';
import { Map as MapLibreMap, NavigationControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const fetchJwtToken = async (clientId, clientSecret) => {
  const response = await fetch("https://account.olamaps.io/realms/olamaps/protocol/openid-connect/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      scope: "openid",
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });

  const data = await response.json();
  return data.access_token;
};

const MapComponent = ({ center = [0, 0], zoom = 0, styleUrl, clientId, clientSecret }) => {
  const mapContainerRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (mapContainerRef.current) {
      setMapReady(true);
    }
  }, []);

  useEffect(() => {
    if (!mapReady) return;

    const initializeMap = async () => {
      const accessToken = await fetchJwtToken(clientId, clientSecret);

      const map = new MapLibreMap({
        container: mapContainerRef.current,
        center: center,
        zoom: zoom,
        style: styleUrl,
        transformRequest: (url, resourceType) => {
          if (accessToken) {
            return {
              url: url,
              headers: { Authorization: `Bearer ${accessToken}` },
              resourceType,
            };
          }
        },
      });

      const nav = new NavigationControl({ visualizePitch: true });
      map.addControl(nav, 'top-left');
    };

    initializeMap();
  }, [mapReady, center, zoom, styleUrl, clientId, clientSecret]);

  return (
    <div
      ref={mapContainerRef}
      className="w-full h-96 rounded-lg shadow-lg overflow-hidden border-2 border-black"
    />
  );
};

export default MapComponent;
