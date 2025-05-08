"use client";
import React from "react";

const cardData = [
  {
    id: 1,
    image: "https://via.placeholder.com/150",
    title: "Card One",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    title: "Card Two",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    title: "Card Three",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    title: "Card Four",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    title: "Card Five",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/150",
    title: "Card Six",
  },
];

const PerfectPare = () => {
  return (
    <section className="mx-auto py-12 px-5 ">
      <h2 className="mx-auto text-xl font-bold font-serif text-gray-800 lg:ml-40">
        Our Perfect Pairings
      </h2>
      <h3 className="mx-auto text-lg font-sans text-gray-700 mb-10 lg:ml-40">
        The Right Eyewear for Every Need
      </h3>

      <div className="flex justify-center gap-10 flex-wrap px-4">
        {cardData.map((card) => (
          <div key={card.id} className="text-center">
            <div className="relative group w-40 h-40 rounded-full overflow-hidden shadow-md bg-white cursor-pointer transition-all duration-300 hover:shadow-xl hover:ring-4 hover:ring-indigo-200 mx-auto">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="mt-3 text-gray-700 font-serif font-semibold">{card.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerfectPare;
