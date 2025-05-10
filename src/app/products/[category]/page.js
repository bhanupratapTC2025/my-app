"use client";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import FilterSidebar from "@/components/main-products/FilterSidebar";
import ProductFilter from "@/components/main-products/ProductFilter";

const categories = ["Eyeglasses", "Sunglasses", "Contact Lenses"];

export default function CategoryPage({ params }) {
  const { category } = params;
  const decodedCategory = decodeURIComponent(category);

  if (!categories.includes(decodedCategory)) {
    return notFound();
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-64">
        <FilterSidebar
          categories={["All", ...categories]}
          currentCategory={decodedCategory}
        />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-bold mb-6 capitalize">
          {decodedCategory}
        </h1>
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductFilter category={decodedCategory.toLowerCase()} />
        </Suspense>
      </div>
    </div>
  );
}
