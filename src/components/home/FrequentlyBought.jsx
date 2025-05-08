"use client";
import React, { useRef, useState } from "react";
import {
  FaHeart,
  FaRegHeart,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const initialCardData = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x200",
    title: "Product One",
    description: "This is a short description of product one.",
    price: "$19.99",
    rating: 4.5,
    liked: false,
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x200",
    title: "Product Two",
    description: "This is a short description of product two.",
    price: "$29.99",
    rating: 4.8,
    liked: false,
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300x200",
    title: "Product Three",
    description: "This is a short description of product three.",
    price: "$15.49",
    rating: 4.2,
    liked: false,
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300x200",
    title: "Product Four",
    description: "Another product description.",
    price: "$25.99",
    rating: 4.1,
    liked: false,
  },
  {
    id: 5,
    image: "https://via.placeholder.com/300x200",
    title: "Product Five",
    description: "Another product description.",
    price: "$25.99",
    rating: 4.6,
    liked: false,
  },
];

const FrequentlyBought = () => {
  const scrollRef = useRef();
  const [cards, setCards] = useState(initialCardData);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  const toggleLike = (id) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === id ? { ...card, liked: !card.liked } : card
      )
    );
  };

  return (
    <div className="relative max-w-7xl mx-auto">
        <h1 className="text-xl font-bold font-serif p-5"> Frequently Bought</h1>
      {/* Inline CSS to hide scrollbars */}
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;     /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;             /* Chrome, Safari and Opera */
        }
      `}</style>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10"
      >
        <FaChevronRight />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth scroll-px-4 px-4 py-6 snap-x hide-scrollbar"
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative w-72 bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0 snap-start"
          >
            {/* Best Seller Badge */}
            {card.rating >= 4.5 && (
              <div className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded">
                Best Seller
              </div>
            )}

            <img
              src={card.image}
              alt={card.title}
              className="w-full h-44 object-cover"
            />

            {/* Like Button */}
            <div className="absolute top-2 right-2 flex gap-2">
              <button
                onClick={() => toggleLike(card.id)}
                className="bg-white p-1 rounded-full shadow"
              >
                {card.liked ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-400" />
                )}
              </button>
            </div>

            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-lg">{card.title}</h2>
                <div className="flex items-center text-yellow-500">
                  <FaStar className="mr-1" />
                  <span className="text-sm">{card.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{card.description}</p>
              <div className="mt-2 font-bold text-indigo-600">
                {card.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyBought;
