'use client';

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,  Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const brands = [
  {
    id: 1,
    name: "LensKart",
    image: "/slider/eyeSlideImg2.jpg",
    logo: "/slider/eyeSlideImg1.webp",
    path: "/brands/lenskart",
  },
  {
    id: 2,
    name: "Bausch + Lomb",
    image: "/slider/eyeSlideImg2.jpg",
    logo: "/slider/eyeSlideImg1.webp",
    path: "/brands/bausch-lomb",
  },
  {
    id: 3,
    name: "FreshLook",
    image: "/slider/eyeSlideImg2.jpg",
    logo: "/slider/eyeSlideImg1.webp",
    path: "/brands/freshlook",
  },
  {
    id: 4,
    name: "Acuvue",
    image: "/slider/eyeSlideImg2.jpg",
    logo: "/slider/eyeSlideImg1.webp",
    path: "/brands/acuvue",
  },
  {
    id: 5,
    name: "Bhed",
    image: "/slider/eyeSlideImg2.jpg",
    logo: "/slider/eyeSlideImg1.webp",
    path: "/brands/acuvue",
  },
];

const ShopByBrands = () => {
  return (
    <div className="p-6 relative">
      <h1 className="text-xl font-bold font-serif p-5">Shop By Brands</h1>

      <Swiper
        modules={[Navigation,  Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        
        navigation={{
          nextEl: ".custom-swiper-next",
          prevEl: ".custom-swiper-prev",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id}>
            <Link
              href={brand.path}
              className="relative bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:scale-[1.03] transition duration-300 ease-in-out cursor-pointer block"
            >
              <div className="relative w-full h-60">
                <Image
                  src={brand.image || "/placeholder.png"}
                  alt={brand.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Logo Overlay at bottom-center */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 bg-white/80   shadow-md p-1">
                  <Image
                    src={brand.logo || "/placeholder.png"}
                    alt={brand.name}
                    width={180}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button className="custom-swiper-prev absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-purple-100 transition">
          <svg
            className="w-6 h-6 text-purple-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="custom-swiper-next absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white shadow rounded-full p-2 hover:bg-purple-100 transition">
          <svg
            className="w-6 h-6 text-purple-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </Swiper>
    </div>
  );
};

export default ShopByBrands;
