import FilterSidebar from "@/components/FilterSidebar";
import rawData from "@/components/data/products.json";

export default function ProductsLayout({ children }) {
  const categories = ["All", ...Object.keys(rawData)];

  return (
    <div className="flex">
      <FilterSidebar categories={categories} />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
