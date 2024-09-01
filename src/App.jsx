import React from 'react';
import MapComponent from './Map.jsx';
import Header from './Components/Header.jsx';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <main className="w-full max-w-4xl p-4">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">Plan My Trip</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Budget ..."
              className="p-2 rounded-md border w-full"
            />
          </div>
          <button className="bg-black text-white p-2 rounded-md hover:bg-gray-800">
            Plan my trip
          </button>
        </div>

        <div className="mt-8">
          <MapComponent
            center={[0,0]}
            zoom={1}
            styleUrl="https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json"
            clientId={import.meta.env.VITE_CLIENT_ID}
            clientSecret={import.meta.env.VITE_CLIENT_SECRET}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
