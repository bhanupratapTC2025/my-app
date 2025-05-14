"use client";
import Banner from "@/components/Banner";
import AccessoryFilterSidebar from "@/components/main-products/AccessoryFilterSidebar";
import ProductFilter from "@/components/main-products/ProductFilter";
import React, { Suspense } from "react";
import { useParams } from "next/navigation";

export default function Accessories() {
  const { type } = useParams();
  return (
    <div>
      <Banner
        title="Computer Glasses"
        subtitle="Find the perfect pair of computer glasses for your style and vision needs."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar on the left */}
          {/* <aside className="md:col-span-1">
            <div className="sticky top-24">
              <AccessoryFilterSidebar /> */}
          {/* </div>
          </aside> */}

          {/* Products on the right */}
          <main className="md:col-span-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">{type}</h1>
            <Suspense
              fallback={
                <div className="text-center py-10">Loading products...</div>
              }
            >
              <ProductFilter category={type} />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
}
