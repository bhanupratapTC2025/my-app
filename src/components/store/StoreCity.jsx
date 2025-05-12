'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Dummy store data
const storesData = [
  { name: "Delhi Main Store", lat: 28.6139, lng: 77.2090, city: "Delhi" },
  { name: "Mumbai Central", lat: 19.0760, lng: 72.8777, city: "Mumbai" },
  { name: "Bangalore Hub", lat: 12.9716, lng: 77.5946, city: "Bangalore" },
];

const StoreCity = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewport, setViewport] = useState({
    latitude: 22.9734,
    longitude: 78.6569,
    zoom: 4,
  });

  const filteredStores = storesData.filter((store) =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Store List */}
      <div className="w-full md:w-1/3 p-4 bg-white overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Our Stores</h2>
        <input
          type="text"
          placeholder="Search by name or city"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        {filteredStores.map((store, idx) => (
          <div key={idx} className="mb-2 p-3 border rounded bg-gray-50">
            <strong>{store.name}</strong>
            <p className="text-sm text-gray-600">{store.city}</p>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="w-full md:w-2/3 h-[300px] md:h-full">
        <Map
          mapboxAccessToken="your_mapbox_access_token" // Replace this with your Mapbox token
          initialViewState={viewport}
          mapStyle="mapbox://styles/mapbox/streets-v11"
        >
          {filteredStores.map((store, idx) => (
            <Marker
              key={idx}
              latitude={store.lat}
              longitude={store.lng}
              anchor="bottom"
            >
              <div className="text-red-600 text-sm font-bold">📍</div>
            </Marker>
          ))}
        </Map>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(StoreCity), { ssr: false });
