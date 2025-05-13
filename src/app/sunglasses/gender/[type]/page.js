"use client";
import { useParams } from "next/navigation";
import FilterSidebar from "@/components/main-products/FilterSidebar";
import ProductFilter from "@/components/main-products/ProductFilter";
import BestSeller from "@/components/main-products/BestSeller";

export default function GenderSunglassesPage() {
  const { type } = useParams();

  return (
    <div className="flex">
      <FilterSidebar currentCategory="Sunglasses" />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4 capitalize">
          {type === "all" ? "All Sunglasses" : `${type} Sunglasses`}
        </h1>
        <ProductFilter category="Sunglasses" gender={type} />
      </div>
      {/* <BestSeller/> */}
    </div>
  );
}
