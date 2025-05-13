'use client';
import { useState } from 'react';

export default function ProductImages({ images }) {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden bg-white p-4">
                <img
                    src={images[selectedImage]}
                    alt="Main product"
                    className="w-full h-96 object-contain"
                />
            </div>
            <div className="flex gap-2 overflow-x-auto">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`border rounded-md p-1 min-w-16 ${selectedImage === index ? 'ring-2 ring-blue-500' : ''}`}
                    >
                        <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-16 h-16 object-contain"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
}