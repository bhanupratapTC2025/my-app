
import productsData from '@/components/data/products.json';
import ProductCard from '@/components/main-products/ProductCard';

export default function SimilarProducts({ currentProduct }) {
    const similarProducts = productsData[currentProduct.category]
        .filter(p => p.id !== currentProduct.id)
        .slice(0, 4);

    if (similarProducts.length === 0) return null;

    return (
        <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {similarProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}