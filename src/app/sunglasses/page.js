"use client";
import Banner from "@/components/Banner";
<<<<<<< HEAD
import FilterSidebar from "@/components/main-products/FilterSidebar";
import ProductFilter from "@/components/main-products/ProductFilter";
import React, { Suspense } from "react";
=======

import ProductFilter from "@/components/sunglass/ProductFilter";

import React from "react";
>>>>>>> branch/bhed

export default function Sunglasses() {

  return (
    <>
      <Banner
        title="Sunglasses"
        subtitle="Explore our stylish and protective sunglasses collection."
      />
<<<<<<< HEAD
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar on the left */}
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <FilterSidebar currentCategory="Sunglasses" />
            </div>
          </aside>

          {/* Products on the right */}
          <main className="md:col-span-3">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Sunglasses
            </h1>
            <Suspense
              fallback={
                <div className="text-center py-10">Loading products...</div>
              }
            >
              <ProductFilter category="Sunglasses" />
            </Suspense>
          </main>
        </div>
      </div>
=======
      <h1>Sunglasses</h1>
      <p>This is the sunglasses page.</p>
      <ProductFilter category="Sunglasses"/>
>>>>>>> branch/bhed
    </>
  );
}
