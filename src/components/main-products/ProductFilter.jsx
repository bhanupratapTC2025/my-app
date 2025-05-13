'use client';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import productsData from "@/components/data/products.json";

export default function ProductFilter({ category, gender, frameType, material }) {
    const searchParams = useSearchParams();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const filters = {};
        const filterTypes = [
            'gender', 'brand', 'frameType', 'material',
            'frameColor', 'lensColor'
        ];

        // Extract query params from URL
        filterTypes.forEach(type => {
            const value = searchParams.get(type);
            filters[type] = value ? value.split(",") : [];
        });

        // ✅ Override gender if prop is passed and not "all"
        if (gender && gender !== "all") {
            filters.gender = [gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase()];
        }

        // ✅ Override frameType if prop is passed
        if (frameType && frameType !== "all") {
            filters.frameType = [frameType.charAt(0).toUpperCase() + frameType.slice(1).toLowerCase()];
        }

        // ✅ Override frameType if prop is passed
        if (material && material !== "all") {
            filters.material = [material.charAt(0).toUpperCase() + material.slice(1).toLowerCase()];
        }

        const categoryProducts = productsData[category] || [];

        const filtered = categoryProducts.filter((product) =>
            filterTypes.every(type =>
                filters[type].length === 0 ||
                (
                    product[type] &&
                    filters[type].some(filterVal =>
                        product[type].toLowerCase() === filterVal.toLowerCase()
                    )
                )
            )
        );


        const timer = setTimeout(() => {
            setFilteredProducts(filtered);
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [searchParams.toString(), category, gender, frameType, material]);

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="border p-4 rounded shadow animate-pulse">
                        <div className="bg-gray-200 h-48 w-full rounded"></div>
                        <div className="h-4 bg-gray-200 rounded mt-2 w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded mt-2 w-1/2"></div>
                        <div className="h-4 bg-gray-200 rounded mt-2 w-1/4"></div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <div className="col-span-full text-center py-10">
                    <h3 className="text-xl font-semibold">No products found</h3>
                    <p className="text-gray-600">Try adjusting your filters</p>
                </div>
            )}
        </div>
    );
}
