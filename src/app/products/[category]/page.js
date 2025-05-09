import rawData from "@/components/data/products.json";
import ProductCard from "@/components/ProductCard";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }) {
  const { category } = params;
  const products = rawData[category];

  if (!products) {
    notFound(); // invalid category = 404
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
