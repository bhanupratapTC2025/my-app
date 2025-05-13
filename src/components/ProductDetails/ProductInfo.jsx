'use client';
import { useState } from 'react';
import AddToCartButton from '@/components/AddToCartButton';
import BuyNowButton from '@/components/BuyNowButton';
import PinCodeChecker from '@/components/PinCodeChecker';

export default function ProductInfo({ product }) {
    const [quantity, setQuantity] = useState(1);
    const [expandedSection, setExpandedSection] = useState(null); // Manage expanded sections

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section); // Toggle section visibility
    };

    return (
        <div className="space-y-6 p-8 bg-gray-50 rounded-lg shadow-lg">
            {/* Product Information Section */}
            <div className="border-b pb-6">
                <h1 className="text-3xl font-extrabold text-gray-800">{product.name || 'Unnamed Product'}</h1>
                <p className="text-lg text-gray-600">{product.brand || 'No Brand Info'}</p>

                <div className="flex items-center gap-4 mt-4">
                    <span className="text-3xl font-bold text-blue-600">
                        ₹{product.price ?? 'N/A'}
                    </span>
                    {product.originalPrice && (
                        <span className="text-xl text-gray-500 line-through">
                            ₹{product.originalPrice}
                        </span>
                    )}
                    {product.discount && (
                        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {product.discount}% OFF
                        </span>
                    )}
                </div>
            </div>

            {/* Quantity Section */}
            <div className="border-b pb-6">
                <h3
                    className="text-xl font-medium text-gray-800 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection('quantity')}
                >
                    Quantity
                    <span>{expandedSection === 'quantity' ? '▲' : '▼'}</span>
                </h3>
                {expandedSection === 'quantity' && (
                    <div className="flex items-center gap-4 mt-4">
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
                )}
            </div>

            {/* Action Buttons Section */}
            <div className="flex gap-4">
                <AddToCartButton product={product} quantity={quantity} />
                <BuyNowButton product={product} quantity={quantity} />
            </div>

            {/* Pin Code Checker Section */}
            <PinCodeChecker />

            {/* Product Description Section */}
            <div className="border-b pb-6">
                <h3
                    className="text-xl font-medium text-gray-800 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection('description')}
                >
                    Description
                    <span>{expandedSection === 'description' ? '▲' : '▼'}</span>
                </h3>
                {expandedSection === 'description' && (
                    <p className="text-gray-700">{product.description || 'No description available.'}</p>
                )}
            </div>

            {/* Product Features Section */}
            <div className="border-b pb-6">
                <h3
                    className="text-xl font-medium text-gray-800 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection('features')}
                >
                    Features
                    <span>{expandedSection === 'features' ? '▲' : '▼'}</span>
                </h3>
                {expandedSection === 'features' && (
                    <ul className="list-disc pl-5 space-y-1">
                        {product.features?.length ? (
                            product.features.map((feature, i) => (
                                <li key={i} className="text-gray-600">{feature}</li>
                            ))
                        ) : (
                            <p className="text-gray-500">No features listed.</p>
                        )}
                    </ul>
                )}
            </div>

            {/* Frame Dimensions Section */}
            <div className="border-b pb-6">
                <h3
                    className="text-xl font-medium text-gray-800 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection('frameDimensions')}
                >
                    Frame Dimensions
                    <span>{expandedSection === 'frameDimensions' ? '▲' : '▼'}</span>
                </h3>
                {expandedSection === 'frameDimensions' && (
                    <div className="space-y-2 mt-4">
                        <div className="flex justify-between">
                            <span>Lens Width (Eye):</span>
                            <span className="text-gray-600">49 mm</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Bridge Width:</span>
                            <span className="text-gray-600">19 mm</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Temple Length:</span>
                            <span className="text-gray-600">145 mm</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Lens Height:</span>
                            <span className="text-gray-600">36 mm</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
