// export default function ProductCard({ product }) {
//     return (
//         <div className="border p-4 rounded shadow">
//             <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
//             <h3 className="mt-2 font-semibold">{product.name}</h3>
//             <p className="text-sm text-gray-600">{product.brand}</p>
//             <p className="font-bold text-blue-600">₹{product.price}</p>
//         </div>
//     );
// }











// 'use client';
// import Link from 'next/link';

// export default function ProductCard({ product }) {
//     return (
//         <Link href={`/products/${product.category.toLowerCase()}/${product.id}`} className="block">
//             <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow bg-white h-full flex flex-col">
//                 <div className="aspect-square mb-4">
//                     <img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-full h-full object-contain rounded"
//                     />
//                 </div>
//                 <h3 className="font-semibold line-clamp-2 mb-1">{product.name}</h3>
//                 <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
//                 <div className="mt-auto">
//                     <div className="flex justify-between items-center">
//                         <p className="font-bold text-blue-600">₹{product.price}</p>
//                         {product.discount && (
//                             <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded">
//                                 {product.discount}% OFF
//                             </span>
//                         )}
//                     </div>
//                     <p className="text-xs text-gray-500 mt-1">{product.category} • {product.gender}</p>
//                 </div>
//             </div>
//         </Link>
//     );
// }





























// import Link from 'next/link';

// export default function ProductCard({ product }) {
//     return (
//         <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow bg-white h-full flex flex-col">
//             <div className="aspect-square mb-4">
//                 <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-contain rounded"
//                 />
//             </div>
//             <h3 className="font-semibold line-clamp-2 mb-1">{product.name}</h3>
//             <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
//             <div className="mt-auto">
//                 <p className="font-bold text-blue-600">₹{product.price}</p>
//                 <p className="text-xs text-gray-500 mt-1">
//                     {product.gender} • {product.frameColor}
//                 </p>
//             </div>
//         </div>
//     );
// }






// import Link from 'next/link';

// export default function ProductCard({ product }) {
//     return (
//         <Link href={`/eyewear/${product.id}`} className="block">
//             <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all">
//                 <div className="aspect-square mb-4">
//                     <img
//                         src={product.images?.[0] || product.image}
//                         alt={product.name}
//                         className="w-full h-full object-contain"
//                     />
//                 </div>
//                 <h3 className="font-semibold line-clamp-2">{product.name}</h3>
//                 <p className="text-sm text-gray-600">{product.brand}</p>
//                 <div className="mt-2 flex items-center gap-2">
//                     <span className="font-bold">₹{product.price}</span>
//                     {product.originalPrice && (
//                         <span className="text-sm text-gray-500 line-through">
//                             ₹{product.originalPrice}
//                         </span>
//                     )}
//                 </div>
//             </div>
//         </Link>
//     );
// }








import Link from 'next/link';

export default function ProductCard({ product, selectedFilters }) {
    const genderFilter = selectedFilters?.gender?.length > 0 ? selectedFilters.gender : null;
    const isGenderFiltered = genderFilter && !genderFilter.includes(product.gender);

    return (
        <Link href={`/eyewear/${product.id}`} className="block">
            <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all">
                <div className="aspect-square mb-4">
                    <img
                        src={product.images?.[0] || product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                    />
                </div>
                <h3 className="font-semibold line-clamp-2">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.brand}</p>

                <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded-full mt-2">
                    {product.gender}
                </span>
                <span className="text-xs bg-blue-200 text-purple-800 px-2 py-1 rounded-full mt-2">
                    {product.frameType}
                </span>
                <span className="text-xs bg-blue-200 text-red-800 px-2 py-1 rounded-full mt-2">
                    {product.material}
                </span>

                <div className="mt-2 flex items-center gap-2">
                    <span className="font-bold">₹{product.price}</span>
                    {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                            ₹{product.originalPrice}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
