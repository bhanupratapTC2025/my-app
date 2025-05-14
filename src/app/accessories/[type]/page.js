// app/eyeglasses/[type]/page.jsx
import FilterSidebar from "@/components/main-products/FilterSidebar";
import ProductFilter from "@/components/main-products/ProductFilter";

export default function AccessoriesPage({ params }) {
  const { type } = params;

  return (
    <div className="flex">
      <FilterSidebar currentCategory={type} />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4 capitalize">
          {type === "all" ? "All Eyeglasses" : `${type}`}
        </h1>
        <ProductFilter category={type} />
      </div>
    </div>
  );
}
