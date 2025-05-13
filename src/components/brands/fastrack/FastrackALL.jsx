"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import productData from "@/components/data/products.json";
import { Heart } from "lucide-react";

const selectedBrand = "Fastrack";

// Product Card Component
const ProductCard = ({ product, category }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="relative rounded-lg shadow-lg hover:shadow-md bg-white transition-all duration-300 group text-sm overflow-hidden">
      {/* Like Button */}
      <button
        className="absolute top-2 right-2 text-red-500 hover:text-red-600 z-10"
        onClick={() => setLiked(!liked)}
        aria-label="Like product"
      >
        <Heart
          size={16}
          className={`transition-transform ${
            liked ? "fill-current" : "fill-transparent"
          }`}
        />
      </button>

      {/* Clickable Link Around Card Content */}
      {/* <Link href={`/${encodeURIComponent(category.toLowerCase())}/${product.id}`}> */}
      <Link href={`/eyewear/${product.id}`}>
        <div className="p-2 flex flex-col items-center cursor-pointer">
          {/* Product Image */}
          <Image
            src={product.image}
            alt={product.name}
            width={120}
            height={90}
            className="rounded-md object-contain"
          />

          {/* Name & Brand */}
          <h2 className="font-medium mt-2 text-center">{product.name}</h2>
          <p className="text-gray-500 italic text-xs text-center mt-1">
            {product.brand}
          </p>

          {/* Description */}
          <p className="text-gray-600 text-xs text-center mt-1 line-clamp-2">
            {product.description || "No description"}
          </p>

          {/* Price & Button (Visual Only) */}
          <div className="flex items-center justify-between mt-2 w-full px-2">
            <span className="text-green-600 font-semibold text-sm">
              ₹{product.price}
            </span>
            <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs">
              View
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Main Component
const FastrackAll = () => {
  const sections = Object.entries(productData)
    .map(([categoryName, products]) => {
      const filteredProducts = products
        .filter((product) => product.brand === selectedBrand)
        .slice(0, 4);

      return {
        title: categoryName,
        imageSrc: "/product-left.jpg",
        products: filteredProducts,
      };
    })
    .filter((section) => section.products.length > 0);

  return (
    <main className="space-y-16 p-4">
      {sections.map((section, index) => (
        <section
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } items-start justify-between gap-6 bg-white p-4 rounded-lg shadow-md`}
        >
          {/* Section Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={section.imageSrc}
              alt={`${section.title} Image`}
              width={500}
              height={300}
              className="rounded-lg object-cover w-full h-auto"
            />
          </div>

          {/* Product Grid */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            {section.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                category={section.title}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default FastrackAll;
