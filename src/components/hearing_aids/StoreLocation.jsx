"use client";

import Link from "next/link"; // Add this import if you're using Next.js

const cardData = [
  {
    name: "John Doe",
    image: "/slider/eyeSlideImg1.webp",
    link: "/team/john-doe",
  },
  {
    name: "Jane Smith",
    image: "/images/person2.jpg",
    link: "/team/jane-smith",
  },
  {
    name: "Michael Johnson",
    image: "/images/person3.jpg",
    link: "/team/michael-johnson",
  },
  {
    name: "Emily Davis",
    image: "/images/person4.jpg",
    link: "/team/emily-davis",
  },
  {
    name: "Emily Davis",
    image: "/images/person4.jpg",
    link: "/team/emily-davis",
  },
  {
    name: "Emily Davis",
    image: "/images/person4.jpg",
    link: "/team/emily-davis",
  },
  {
    name: "Emily Davis",
    image: "/images/person4.jpg",
    link: "/team/emily-davis",
  },
  {
    name: "Emily Davis",
    image: "/images/person4.jpg",
    link: "/team/emily-davis",
  },
  {
    name: "Emily Davis",
    image: "/images/person4.jpg",
    link: "/team/emily-davis",
  },

  

];

export default function StoreLocation() {
  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 font-serif">
         Find our stores in the following cities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {cardData.map((person, index) => (
            <Link href={person.link} key={index}>
              <div className="bg-gray-100 rounded-xl shadow-md overflow-hidden group cursor-pointer">
                <div className="relative w-full h-36 md:h-40  overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 w-full  text-white text-center py-2">
                    <h3 className="text-sm font-semibold">{person.name}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
