"use client";

import React, { useState } from "react";

const cityStores = [
  {
    city: "Mumbai",
    cityMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120714.25419194254!2d72.7632162!3d19.0825223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c95ec73fce3f%3A0x1ff7e4b8d3b1e4e9!2sBandra%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    stores: [
      {
        id: 1,
        name: "Mumbai Store 1",
        address: "Bandra, Mumbai",
        embedSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120714.25419194254!2d72.7632162!3d19.0825223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c95ec73fce3f%3A0x1ff7e4b8d3b1e4e9!2sBandra%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      },
      {
        id: 4,
        name: "Mumbai Store 2",
        address: "Andheri, Mumbai",
        embedSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120714.25419194254!2d72.8373263!3d19.1196777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b61cf3ba14c7%3A0x8b83210cce5a0c8b!2sAndheri%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin",
      },
    ],
  },
  {
    city: "Delhi",
    cityMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112096.17992869718!2d77.0922414!3d28.6315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5c4a8e1141%3A0x78a8e7be85cc99f5!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000002!5m2!1sen!2sin",
    stores: [
      {
        id: 2,
        name: "Delhi Store",
        address: "Connaught Place, Delhi",
        embedSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112096.17992869718!2d77.0922414!3d28.6315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5c4a8e1141%3A0x78a8e7be85cc99f5!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000002!5m2!1sen!2sin",
      },
    ],
  },
  {
    city: "Pune",
    cityMap:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119020.48805356345!2d73.8567!3d18.5362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c11b8e5ecce5%3A0x3f2e6d78c2ad6f4!2sKoregaon%20Park%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000003!5m2!1sen!2sin",
    stores: [
      {
        id: 3,
        name: "Pune Store",
        address: "Koregaon Park, Pune",
        embedSrc:
          "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119020.48805356345!2d73.8567!3d18.5362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c11b8e5ecce5%3A0x3f2e6d78c2ad6f4!2sKoregaon%20Park%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000003!5m2!1sen!2sin",
      },
    ],
  },
];

const StoreCity = () => {
  const [expandedCity, setExpandedCity] = useState(cityStores[0].city);
  const [selectedStore, setSelectedStore] = useState(null);

  const handleCityClick = (city) => {
    setExpandedCity(expandedCity === city ? null : city);
    setSelectedStore(null);
  };

  const getCurrentCityData = cityStores.find((c) => c.city === expandedCity);
  const mapToShow = selectedStore?.embedSrc || getCurrentCityData.cityMap;

  return (
    <div className="flex flex-col md:flex-row h-[600px] border rounded-lg overflow-hidden">
      {/* Left Side - City and Stores */}
      <div className="md:w-1/2 w-full p-4 bg-gray-50 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Select a City</h2>
        <ul className="space-y-3">
          {cityStores.map((cityData) => (
            <li key={cityData.city}>
              <div
                onClick={() => handleCityClick(cityData.city)}
                className={`cursor-pointer p-3 border rounded-md ${
                  expandedCity === cityData.city
                    ? "bg-blue-100 border-blue-500"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <strong>{cityData.city}</strong>
              </div>

              {/* Stores Accordion */}
              {expandedCity === cityData.city && (
                <div className="mt-2 pl-4">
                  {cityData.stores.map((store) => (
                    <div
                      key={store.id}
                      onClick={() => setSelectedStore(store)}
                      className={`cursor-pointer p-2 border rounded-md my-2 ${
                        selectedStore?.id === store.id
                          ? "bg-green-100 border-green-500"
                          : "bg-white hover:bg-gray-100"
                      }`}
                    >
                      {store.name}
                      <div className="text-xs text-gray-500">
                        {store.address}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Side - Map Display */}
      <div className="md:w-1/2 w-full">
        <iframe
          src={mapToShow}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default StoreCity;
