
// "use client";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import productsData from "@/components/data/products.json"; // Adjust path as needed

// export default function ProductFilter() {
//     const searchParams = useSearchParams();
//     const [filteredProducts, setFilteredProducts] = useState([]);

//     useEffect(() => {
//         // Parse all filters from URL
//         const gender = searchParams.get("gender")?.split(",") || [];
//         const brand = searchParams.get("brand")?.split(",") || [];
//         const frameType = searchParams.get("frameType")?.split(",") || [];
//         const material = searchParams.get("material")?.split(",") || [];
//         const frameColor = searchParams.get("frameColor")?.split(",") || [];
//         const lensColor = searchParams.get("lensColor")?.split(",") || [];
//         const lensType = searchParams.get("lensType")?.split(",") || [];
//         const lensCoating = searchParams.get("lensCoating")?.split(",") || [];
//         const lensMaterial = searchParams.get("lensMaterial")?.split(",") || [];

//         // Flatten all products
//         const allProducts = Object.values(productsData).flat();

//         // Apply filters
//         const filtered = allProducts.filter((product) => {
//             return (
//                 (gender.length === 0 || gender.includes(product.gender)) &&
//                 (brand.length === 0 || brand.includes(product.brand)) &&
//                 (frameType.length === 0 || frameType.includes(product.frameType)) &&
//                 (material.length === 0 || material.includes(product.material)) &&
//                 (frameColor.length === 0 || frameColor.includes(product.frameColor)) &&
//                 (lensColor.length === 0 || lensColor.includes(product.lensColor)) &&
//                 (lensType.length === 0 || lensType.includes(product.lensType)) &&
//                 (lensCoating.length === 0 ||
//                     lensCoating.includes(product.lensCoating)) &&
//                 (lensMaterial.length === 0 ||
//                     lensMaterial.includes(product.lensMaterial))
//             );
//         });

//         setFilteredProducts(filtered);
//     }, [searchParams]);

//     return (
//         <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {filteredProducts.length === 0 ? (
//                 <p>No products found.</p>
//             ) : (
//                 filteredProducts.map((product) => (
//                     <div key={product.id} className="border p-4 shadow rounded">
//                         <img
//                             src={product.image}
//                             alt={product.name}
//                             className="w-full h-48 object-cover mb-2"
//                         />
//                         <h2 className="font-bold text-lg">{product.name}</h2>
//                         <p className="text-sm text-gray-600">
//                             {product.brand} | {product.gender} | {product.frameType}
//                         </p>
//                         <p className="text-green-600 font-semibold">₹{product.price}</p>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }













// 'use client';
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import productsData from "@/components/data/products.json";

// export default function ProductFilter({ category }) {
//     const searchParams = useSearchParams();
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         setIsLoading(true);

//         // Parse all filters from URL
//         const filters = {};
//         const filterTypes = [
//             'gender', 'brand', 'frameType', 'material',
//             'frameColor', 'lensColor', 'lensType',
//             'lensCoating', 'lensMaterial'
//         ];

//         filterTypes.forEach(type => {
//             filters[type] = searchParams.get(type)?.split(",") || [];
//         });

//         // Get products based on category
//         let products = [];
//         if (category === 'all') {
//             products = Object.values(productsData).flat();
//         } else {
//             products = productsData[category] || [];
//         }

//         // Apply filters
//         const filtered = products.filter((product) => {
//             return filterTypes.every(type =>
//                 filters[type].length === 0 ||
//                 filters[type].includes(product[type])
//             );
//         });

//         // Simulate network delay for demo
//         const timer = setTimeout(() => {
//             setFilteredProducts(filtered);
//             setIsLoading(false);
//         }, 300);

//         return () => clearTimeout(timer);
//     }, [searchParams, category]);

//     if (isLoading) {
//         return (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {Array.from({ length: 8 }).map((_, i) => (
//                     <div key={i} className="border p-4 rounded shadow animate-pulse">
//                         <div className="bg-gray-200 h-48 w-full rounded"></div>
//                         <div className="h-4 bg-gray-200 rounded mt-2 w-3/4"></div>
//                         <div className="h-3 bg-gray-200 rounded mt-2 w-1/2"></div>
//                         <div className="h-4 bg-gray-200 rounded mt-2 w-1/4"></div>
//                     </div>
//                 ))}
//             </div>
//         );
//     }

//     return (
//         <>
//             <div className="mb-4 flex justify-between items-center">
//                 <p className="text-sm text-gray-600">
//                     Showing {filteredProducts.length} products
//                 </p>
//             </div>

//             {filteredProducts.length === 0 ? (
//                 <div className="col-span-full text-center py-10">
//                     <h3 className="text-xl font-semibold">No products found</h3>
//                     <p className="text-gray-600">Try adjusting your filters</p>
//                 </div>
//             ) : (
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                     {filteredProducts.map((product) => (
//                         <ProductCard key={product.id} product={product} />
//                     ))}
//                 </div>
//             )}
//         </>
//     );
// }










// 'use client';
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import productsData from "@/data/products.json";

// export default function ProductFilter({ category }) {
//     const searchParams = useSearchParams();
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         setIsLoading(true);

//         const filters = {};
//         const filterTypes = [
//             'gender', 'brand', 'frameType', 'material',
//             'frameColor', 'lensColor'
//         ];

//         filterTypes.forEach(type => {
//             filters[type] = searchParams.get(type)?.split(",") || [];
//         });

//         // Get products for current category
//         const categoryProducts = productsData[category] || [];

//         // Apply filters
//         const filtered = categoryProducts.filter((product) => {
//             return filterTypes.every(type =>
//                 filters[type].length === 0 ||
//                 filters[type].includes(product[type]))
//             );
//         });

//         setTimeout(() => {
//             setFilteredProducts(filtered);
//             setIsLoading(false);
//         }, 300);
//     }, [searchParams, category]);

//     if (isLoading) {
//         return (
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {[...Array(8)].map((_, i) => (
//                     <div key={i} className="border p-4 rounded shadow animate-pulse">
//                         <div className="bg-gray-200 h-48 w-full rounded"></div>
//                         <div className="h-4 bg-gray-200 rounded mt-2 w-3/4"></div>
//                         <div className="h-3 bg-gray-200 rounded mt-2 w-1/2"></div>
//                         <div className="h-4 bg-gray-200 rounded mt-2 w-1/4"></div>
//                     </div>
//                 ))}
//             </div>
//         );
//     }

//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {filteredProducts.length > 0 ? (
//                 filteredProducts.map((product) => (
//                     <ProductCard key={product.id} product={product} />
//                 ))
//             ) : (
//                 <div className="col-span-full text-center py-10">
//                     <h3 className="text-xl font-semibold">No products found</h3>
//                     <p className="text-gray-600">Try adjusting your filters</p>
//                 </div>
//             )}
//         </div>
//     );
// }










'use client';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import productsData from "@/components/data/products.json";

export default function ProductFilter({ category }) {
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

        filterTypes.forEach(type => {
            const value = searchParams.get(type);
            filters[type] = value ? value.split(",") : [];
        });

        const categoryProducts = productsData[category] || [];

        const filtered = categoryProducts.filter((product) =>
            filterTypes.every(type =>
                filters[type].length === 0 ||
                (product[type] && filters[type].includes(product[type]))
            )
        );

        // Simulate loading
        const timer = setTimeout(() => {
            setFilteredProducts(filtered);
            setIsLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [searchParams.toString(), category]); // ← FIXED dependency

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[...Array(8)].map((_, i) => (
                    <div key={i} className="border p-4 rounded shadow animate-pulse" aria-busy="true" aria-label="Loading product">
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
