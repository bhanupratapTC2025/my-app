import Banner from "@/components/Banner";
import FilterSidebar from "@/components/main-products/FilterSidebar";
import ProductFilter from "@/components/main-products/ProductFilter";
import React, { Suspense } from "react";

export default function PowerGlasses() {
  return (
    <div>
      <Banner
        title="Power Sunglasses"
        subtitle="Find the perfect pair of power sunglasses for your style and vision needs."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar on the left */}
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <FilterSidebar currentCategory="Power Sunglasses" />
            </div>
          </aside>

          {/* Products on the right */}
          <main className="md:col-span-3">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Power Sunglasses
            </h1>
            <Suspense
              fallback={
                <div className="text-center py-10">Loading products...</div>
              }
            >
              <ProductFilter category="Power Sunglasses" />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}
