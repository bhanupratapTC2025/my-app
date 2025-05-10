"use client";
import Image from "next/image";
import productData from "@/components/data/products.json";

const selectedBrand = "Fastrack"; // Replace with dynamic value if needed

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
    <main className="space-y-20 p-4">
      {sections.map((section, index) => (
        <section
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } items-start justify-between gap-8 bg-white p-6 rounded-lg shadow-md`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src={section.imageSrc}
              alt={`${section.title} Image`}
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>

          {/* Product Cards */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {section.products.map((product) => (
              <div
                key={product.id}
                className="border rounded-xl p-4 shadow-md bg-gray-50 flex flex-col items-center"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={150}
                  className="rounded-md"
                />
                <h2 className="text-lg font-semibold mt-3 text-center">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500 mt-1 text-center italic">
                  Brand: {product.brand}
                </p>
                <p className="text-sm text-gray-600 text-center mt-1">
                  {product.description || "No description available"}
                </p>
                <div className="flex items-center justify-between mt-3 w-full px-4">
                  <span className="text-green-600 font-bold text-base">
                    ₹{product.price}
                  </span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default FastrackAll;
