// 'use client';
// import { useEffect, useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const images = [
//   '/images/slide1.jpg',
//   '/images/slide2.jpg',
//   '/images/slide3.jpg',
// ];

// const texts = [
//   'Hearing loss is more common than vision loss.',
//   'It affects 1 out of 3 people over the age of 65.',
//   'Average person waits 7 years before seeking help.',
// ];

// export default function HearingSlider() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % images.length);
//     }, 6000);
//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
//   const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
//   const goToSlide = (index) => setCurrent(index);

//   return (
//     <div className="w-full">
//       {/* Heading */}
//       <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 py-6">
//         Did You Know?
//       </h2>

//       {/* Slider Container */}
//       <div className="relative w-full h-[50vh] overflow-hidden">
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 w-full h-full flex transition-opacity duration-1000 ${
//               current === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
//             }`}
//           >
//             {/* Left: Image */}
//             <div className="w-1/2 h-full flex items-center justify-center bg-black/10">
//               <img
//                 src={img}
//                 alt="Slide"
//                 className="max-w-[70%] max-h-[70%] object-contain rounded-lg shadow-lg"
//               />
//             </div>

//             {/* Divider */}
//             <div className="w-px h-full bg-white opacity-50" />

//             {/* Right: Text */}
//             <div className="w-1/2 h-full flex items-center justify-center bg-black/10">
//               <div className="max-w-[70%] text-center px-4">
//                 <p className="text-gray-800 text-2xl md:text-4xl font-semibold">
//                   {texts[index]}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Navigation Arrows */}
//         <button
//           onClick={prevSlide}
//           className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
//         >
//           <ChevronLeft size={24} />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
//         >
//           <ChevronRight size={24} />
//         </button>

//         {/* Dots */}
//         <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
//           {images.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-3 h-3 rounded-full ${
//                 current === index ? 'bg-white' : 'bg-white/50'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    img: '/images/slide1.jpg',
    text: 'Signia provides a variety of hearing aid models and styles to suit different preferences and degrees of hearing loss. They offer both in-the-ear and behind-the-ear options.',
  },
  {
    img: '/images/slide2.jpg',
    text: 'Signia provides a variety of hearing aid models and styles to suit different preferences and degrees of hearing loss. They offer both in-the-ear and behind-the-ear options.',
  },
  {
    img: '/images/slide3.jpg',
    text: 'Signia provides a variety of hearing aid models and styles to suit different preferences and degrees of hearing loss. They offer both in-the-ear and behind-the-ear options.',
  },
];

export default function HearingSwiper() {
  return (
    <div className="w-full bg-black py-6">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-center text-white mb-6 px-4">
       Better Hearing Is Better Well Being
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 6000 }}
          loop={true}
          className="h-auto"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                {/* Left: Image */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-black/10 p-4 h-60 md:h-[300px]">
                  <img
                    src={slide.img}
                    alt={`Slide ${index + 1}`}
                    className="max-w-[80%] max-h-full object-contain rounded-lg shadow-[0px_4px_10px_4px_rgba(0,0,255,0.7)]"
                  />
                </div>

                {/* Divider (visible across all screens) */}
                <div className="w-px h-full bg-white opacity-50" />

                {/* Right: Text */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-black/10 p-4 min-h-[150px] md:min-h-[300px]">
                  <p className="text-center  sm:text-lg md:text-xl lg:text-xl text-white font-sans max-w-[90%]">
                    {slide.text}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
