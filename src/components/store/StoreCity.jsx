"use client";
import React, { useState } from "react";

const cityStores = [
  {
    city: "Mumbai",
    cityMap: "https://www.google.com/maps/embed?...",
    stores: [
      { id: 1, name: "Mumbai Store 1", address: "Bandra, Mumbai", embedSrc: "https://www.google.com/maps/embed?..." },
      { id: 4, name: "Mumbai Store 2", address: "Andheri, Mumbai", embedSrc: "https://www.google.com/maps/embed?..." },
    ],
  },
  {
    city: "Delhi",
    cityMap: "https://www.google.com/maps/embed?...",
    stores: [
      { id: 2, name: "Delhi Store", address: "Connaught Place, Delhi", embedSrc: "https://www.google.com/maps/embed?..." },
    ],
  },
  {
    city: "Pune",
    cityMap: "https://www.google.com/maps/embed?...",
    stores: [
      { id: 3, name: "Pune Store", address: "Koregaon Park, Pune", embedSrc: "https://www.google.com/maps/embed?..." },
    ],
  },
];

const popularCities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];

const StoreCity = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityClick = (city) => {
    const cityData = cityStores.find((c) => c.city === city);
    if (cityData) {
      setSelectedCity(cityData.city);
      setSearchTerm("");
    }
  };

  const filteredCities = cityStores.filter((cityData) => {
    const matchCity = cityData.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStore = cityData.stores.some((store) =>
      store.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return matchCity || matchStore;
  });

  const activeCityData = cityStores.find((c) => c.city === selectedCity);

  const mapSrc = activeCityData?.cityMap || "https://www.google.com/maps/embed?pb=!1m18!1m12...";

  return (
    <div className="p-6 max-w-screen-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6  text-gray-800">🗺️ Find Our Stores</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="md:w-[35%] w-full space-y-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="🔍 Search by city or store name..."
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 transition"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSelectedCity(null);
            }}
          />

          {/* Popular Cities */}
          {!searchTerm && !selectedCity && (
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-700">📍 Popular Cities</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {popularCities.map((city) => (
                  <div
                    key={city}
                    onClick={() => handleCityClick(city)}
                    className="cursor-pointer bg-white border rounded-lg shadow hover:shadow-xl transition overflow-hidden hover:scale-[1.02]"
                  >
                    <img
                      src={`https://source.unsplash.com/400x200/?${city}`}
                      alt={city}
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-3 text-center">
                      <h4 className="text-md font-semibold text-gray-800">{city}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Scrollable Store List */}
          {(selectedCity || searchTerm) && (
            <div className="mt-2">
              <h3 className="text-xl font-semibold mb-3 text-gray-700">🏪 Available Stores</h3>
              <div className="overflow-y-auto max-h-[450px] pr-2 custom-scrollbar space-y-4">
                {(selectedCity ? activeCityData?.stores : filteredCities.flatMap((c) => c.stores))
                  .filter((store) =>
                    store.name.toLowerCase().includes(searchTerm.toLowerCase()) || selectedCity
                  )
                  .map((store) => (
                    <div
                      key={store.id}
                      className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col gap-2 hover:scale-[1.01]"
                    >
                      <img
                        src={`https://source.unsplash.com/400x200/?store,building,${store.name}`}
                        alt={store.name}
                        className="w-full h-32 object-cover rounded-md"
                      />
                      <h4 className="text-lg font-bold text-blue-800">{store.name}</h4>
                      <p className="text-sm text-gray-600">{store.address}</p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Map */}
        <div className="md:w-[65%] w-full">
          <div className="w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-lg border">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCity;
