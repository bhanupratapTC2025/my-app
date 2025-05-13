'use client';
import { useRouter } from 'next/navigation';

export default function BuyNowButton({ product, quantity }) {
    const router = useRouter();

    const handleBuyNow = () => {
        // Direct checkout logic
        console.log('Buy now:', product, quantity);
        router.push('/checkout');
    };

    return (
        <button
            onClick={handleBuyNow}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium"
        >
            Buy Now
        </button>
    );
}