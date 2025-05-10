'use client';
import { useRouter } from 'next/navigation';

export default function AddToCartButton({ product, quantity }) {
    const router = useRouter();

    const handleAddToCart = () => {
        // Add to cart logic
        console.log('Added to cart:', product, quantity);
        router.push('/cart');
    };

    return (
        <button
            onClick={handleAddToCart}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium"
        >
            Add to Cart
        </button>
    );
}