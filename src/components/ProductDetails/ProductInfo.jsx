'use client';
import { useState } from 'react';
import AddToCartButton from '@/components/AddToCartButton';
import BuyNowButton from '@/components/BuyNowButton';
import PinCodeChecker from '@/components/PinCodeChecker';

export default function ProductInfo({ product }) {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-lg text-gray-600">{product.brand}</p>

            <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-blue-600">₹{product.price}</span>
                {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                        ₹{product.originalPrice}
                    </span>
                )}
                {product.discount && (
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                        {product.discount}% OFF
                    </span>
                )}
            </div>

            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <span className="font-medium">Quantity:</span>
                    <div className="flex border rounded-md">
                        <button
                            onClick={() => setQuantity(q => Math.max(1, q - 1))}
                            className="px-3 py-1 text-lg"
                        >
                            -
                        </button>
                        <span className="px-4 py-1 border-x">{quantity}</span>
                        <button
                            onClick={() => setQuantity(q => q + 1)}
                            className="px-3 py-1 text-lg"
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="flex gap-4">
                    <AddToCartButton product={product} quantity={quantity} />
                    <BuyNowButton product={product} quantity={quantity} />
                </div>
            </div>

            <PinCodeChecker />

            <div className="pt-6 border-t">
                <h3 className="text-lg font-semibold mb-2">Description</h3>
                <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="pt-6 border-t">
                <h3 className="text-lg font-semibold mb-2">Features</h3>
                <ul className="list-disc pl-5 space-y-1">
                    {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}