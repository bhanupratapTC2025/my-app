// 'use client';
// import { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css'; // Swiper CSS import
// import 'swiper/css/navigation'; // Optional: If you are using navigation
// import 'swiper/css/pagination'; // Optional: If you are using pagination
// import ProductCard from './ProductCard'; // Assuming ProductCard is imported from another file

// export default function BestSeller({ products = [] }) {
//     // Randomly shuffle products to display
//     const shuffleArray = (array) => {
//         return array.sort(() => Math.random() - 0.5);
//     };

//     const [shuffledProducts, setShuffledProducts] = useState([]);

//     useEffect(() => {
//         if (products.length > 0) {
//             setShuffledProducts(shuffleArray([...products]));
//         }
//     }, [products]);

//     return (
//         <section className="best-seller-section py-12">
//             <h2 className="text-2xl font-bold text-center mb-6">Best Sellers</h2>

//             <Swiper
//                 spaceBetween={30} // Space between slides
//                 slidesPerView={3} // Number of slides visible at a time
//                 loop={true} // Infinite loop
//                 autoplay={{ delay: 3000 }} // Auto slide every 3 seconds
//                 breakpoints={{
//                     640: {
//                         slidesPerView: 1, // 1 slide on small screens
//                     },
//                     768: {
//                         slidesPerView: 2, // 2 slides on medium screens
//                     },
//                     1024: {
//                         slidesPerView: 3, // 3 slides on large screens
//                     },
//                 }}
//                 className="px-4"
//             >
//                 {shuffledProducts.slice(0, 10).map((product) => (  // Limit to 10 random products
//                     <SwiperSlide key={product.id}>
//                         <ProductCard product={product} />
//                         <ProductFilter category="Eyeglasses" />
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </section>
//     );
// }
