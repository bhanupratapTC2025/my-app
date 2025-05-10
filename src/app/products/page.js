"use client";
import { Suspense } from "react";
import FilterSidebar from "@/components/main-products/FilterSidebar";
import ProductFilter from "@/components/main-products/ProductFilter";

const categories = ["All", "Eyeglasses", "Sunglasses", "Contact Lenses"];

export default function ProductsPage() {
  return (
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar on the left */}
        <aside className="md:col-span-1">
          <div className="sticky top-24">
            <FilterSidebar categories={categories} currentCategory="All" />
          </div>
        </aside>

        {/* Products on the right */}
        <main className="md:col-span-3">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            All Products
          </h1>
          <Suspense
            fallback={
              <div className="text-center py-10">Loading products...</div>
            }
          >
            <ProductFilter category="All" />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
