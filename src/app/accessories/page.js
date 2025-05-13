import Banner from "@/components/Banner";
import FilterSidebar from "@/components/main-products/FilterSidebar";
import ProductFilter from "@/components/main-products/ProductFilter";
import React, { Suspense } from "react";

export default function Accessories() {
  return (
    <div>
      <Banner
        title="Computer Glasses"
        subtitle="Find the perfect pair of computer glasses for your style and vision needs."
      />
      all accessories here...
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar on the left */}
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <FilterSidebar currentCategory="Computer Glasses" />
            </div>
          </aside>

          {/* Products on the right */}
          <main className="md:col-span-3">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Computer Glasses
            </h1>
            <Suspense
              fallback={
                <div className="text-center py-10">Loading products...</div>
              }
            >
              <ProductFilter category="Computer Glasses" />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}
