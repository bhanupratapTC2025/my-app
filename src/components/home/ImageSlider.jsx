'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { useRef, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";


const slides = [
    {
        src: '/slider/eyeSlideImg1.webp',
        title: 'Elegant Interiors',
        subtitle: 'Designs that speak comfort',
    },
    {
        src: '/slider/eyeSlideImg2.jpg',
        title: 'Modern Spaces',
        subtitle: 'Architecture that inspires',
    },
    {
        src: '/slider/eyeSlideImg3.jpg',
        title: 'Creative Living',
        subtitle: 'Feel the beauty of every corner',
    },
];

export default function BannerSlider() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="w-full h-[70vh] relative">
            
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
                effect="fade"
                className="w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <img
                                src={slide.src}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-4">
                                <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
                                <p className="text-lg md:text-2xl">{slide.subtitle}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                <div
                    ref={prevRef}
                    className="absolute top-1/2 left-4 z-10 -translate-y-1/2 bg-black/50 text-white hover:bg-white hover:text-black rounded-full p-3 cursor-pointer transition"
                >
                    <FaChevronLeft size={20} />
                </div>
                <div
                    ref={nextRef}
                    className="absolute top-1/2 right-4 z-10 -translate-y-1/2 bg-black/50 text-white hover:bg-white hover:text-black rounded-full p-3 cursor-pointer transition"
                >
                    <FaChevronRight size={20} />
                </div>
            </Swiper>

            {/* White pagination bullets */}
            <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.7;
        }

        .swiper-pagination-bullet-active {
          background: white !important;
          opacity: 1;
        }
      `}</style>
        </div>
    );
}