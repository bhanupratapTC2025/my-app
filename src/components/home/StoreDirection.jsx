// ImageSection.jsx
"use client";

import {  FaArrowRight } from "react-icons/fa6";

const StoreDirection = () => {
  return (
    <div  
      className="relative w-full h-56 bg-cover bg-center  "
      style={{
        backgroundImage: "url('/slider/eyeSlideImg1.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 "></div>

      <div className="relative flex items-center justify-between w-full h-full px-6">
        {/* Text on the left side */}
        <div className="text-white max-w-lg space-y-4">
          <h2 className="text-3xl font-semibold">
            Find a store nearby
          </h2>
          <p className="text-lg">
            Explore the latest collections of stylish frames and lenses to enhance your look.
          </p>
        </div>

        {/* Arrow button on the right side */}
        <div className="flex items-center justify-center">
          <button className="bg-gray-100 text-black px-4 py-2 rounded-full hover:bg-yellow-300 transition">
            < FaArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoreDirection;
