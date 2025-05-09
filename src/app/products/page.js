import rawData from "@/data/products.json";
import ProductCard from "@/components/ProductCard";

export default function AllProductsPage() {
  const allProducts = Object.values(rawData).flat();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
