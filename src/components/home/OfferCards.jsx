// EyeglassOffersSlider.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

const offers = [
  {
    id: 1,
    title: "50% Off Stylish Frames",
    image: "/images/offer1.jpg",
    description: "Upgrade your look with our stylish eyeglass frames.",
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free",
    image: "/images/offer2.jpg",
    description: "Limited-time offer on prescription eyeglasses.",
  },
  {
    id: 3,
    title: "Premium Lenses at 30% Off",
    image: "/images/offer3.jpg",
    description: "Enjoy clarity with our high-quality lenses.",
  },
  {
    id: 4,
    title: "Get Free Eye Check-Up",
    image: "/images/offer4.jpg",
    description: "Avail a free eye check-up with every purchase.",
  },
];

const OfferCards = () => {
  useEffect(() => {
    // Swiper navigation elements handled after mount
  }, []);

  return (
    <div className="max-w-7xl mx-auto  px-4 md:px-6 lg:px-8 py-10 relative">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 font-serif">
       Tranding Offers
      </h2>

      {/* Navigation Icons */}
      <div
        
        className="swiper-button-prev-custom absolute top-[60%] left-4 z-10 -translate-y-1/2 bg-black/20 text-white hover:bg-white hover:text-black rounded-full p-3 cursor-pointer transition"
      >
        <FaChevronLeft size={20} />
      </div>
      <div
        
        className="swiper-button-next-custom absolute top-[60%] right-4 z-10 -translate-y-1/2 bg-black/20 text-white hover:bg-white hover:text-black rounded-full p-3 cursor-pointer transition"
      >
        <FaChevronRight size={20} />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {offers.map((offer) => (
          <SwiperSlide key={offer.id}>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover md:h-56"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{offer.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{offer.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OfferCards;
