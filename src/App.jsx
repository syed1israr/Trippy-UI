import React from 'react';


import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import MapComponent from './Components/Map.jsx';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
     
      <Header />

      <main className="w-full max-w-6xl p-4 flex justify-between items-start">
        {/* Input Section */}
        <div className="bg-gray-300 p-6 rounded-lg shadow-lg w-1/3">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Budget ..."
              className="p-4 rounded-full border w-full text-lg"
            />
          </div>
          <button className="bg-black text-white p-4 w-full rounded-full hover:bg-gray-800">
            Plan my trip
          </button>
        </div>

        {/* Map Section */}
        <div className="w-2/3 ml-8">
          <MapComponent
            center={[0,0]}
            zoom={1}
            styleUrl="https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json"
            clientId={import.meta.env.VITE_CLIENT_ID}
            clientSecret={import.meta.env.VITE_CLIENT_SECRET}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
