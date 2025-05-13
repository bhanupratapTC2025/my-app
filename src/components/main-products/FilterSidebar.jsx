// 'use client'
// import { useRouter } from 'next/navigation';

// export default function FilterSidebar({ categories }) {
//     const router = useRouter();

//     return (
//         <div className="w-64 p-4 border-r">
//             <h2 className="font-bold text-lg mb-4">Filter</h2>
//             <ul className="space-y-2">
//                 {categories.map(cat => (
//                     <li key={cat}>
//                         <button
//                             onClick={() => router.push(cat === "All" ? "/products" : `/products/${cat}`)}
//                             className="text-left w-full hover:underline"
//                         >
//                             {cat}
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }











// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';

// export default function FilterSidebar({ categories }) {
//     const router = useRouter();
//     const searchParams = useSearchParams();

//     const [selectedFilters, setSelectedFilters] = useState({
//         gender: [],
//         brand: [],
//         frameType: [],
//     });

//     const filters = {
//         gender: ['Men', 'Women', 'Kids'],
//         brand: ['RayBan', 'Oakley', 'Vogue'],
//         frameType: ['Full Rim', 'Half Rim', 'Rimless']
//     };

//     const handleCheckboxChange = (type, value) => {
//         setSelectedFilters(prev => {
//             const values = prev[type].includes(value)
//                 ? prev[type].filter(v => v !== value)
//                 : [...prev[type], value];
//             return { ...prev, [type]: values };
//         });
//     };

//     useEffect(() => {
//         const params = new URLSearchParams();
//         Object.keys(selectedFilters).forEach(type => {
//             if (selectedFilters[type].length > 0) {
//                 params.set(type, selectedFilters[type].join(','));
//             }
//         });

//         router.push(`/products?${params.toString()}`);
//     }, [selectedFilters]);

//     return (
//         <div className="w-64 p-4 border-r">
//             <h2 className="font-bold text-lg mb-4">Filter</h2>

//             <div className="mb-4">
//                 <h3 className="font-semibold mb-2">Categories</h3>
//                 <ul className="space-y-2">
//                     {categories.map(cat => (
//                         <li key={cat}>
//                             <button
//                                 onClick={() => router.push(cat === "All" ? "/products" : `/products/${cat}`)}
//                                 className="text-left w-full hover:underline"
//                             >
//                                 {cat}
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Filters */}
//             {Object.entries(filters).map(([type, options]) => (
//                 <div key={type} className="mb-4">
//                     <h3 className="font-semibold capitalize">{type}</h3>
//                     {options.map(option => (
//                         <label key={option} className="block">
//                             <input
//                                 type="checkbox"
//                                 className="mr-2"
//                                 checked={selectedFilters[type]?.includes(option)}
//                                 onChange={() => handleCheckboxChange(type, option)}
//                             />
//                             {option}
//                         </label>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// }

























// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter, useSearchParams } from 'next/navigation';

// export default function FilterSidebar({ categories }) {
//     const router = useRouter();
//     const searchParams = useSearchParams();

//     const [selectedFilters, setSelectedFilters] = useState({
//         gender: [],
//         brand: [],
//         frameType: [],
//         material: [],
//         frameColor: [],
//         lensColor: [],
//         lensType: [],
//         lensCoating: [],
//         lensMaterial: []
//     });

//     const filters = {
//         gender: ['Men', 'Women', 'Kids', 'Unisex'],
//         brand: ['RayBan', 'Oakley', 'Vogue', 'Titan', 'Fastrack', 'Zefr'],
//         frameType: ['Full Rim', 'Semi Rimless', 'Rimless'],
//         material: ['Plastic', 'Metal', 'Titanium', 'Acetate'],
//         frameColor: ['Black', 'Blue', 'Red', 'Gold', 'Brown'],
//         lensColor: ['Amber', 'Clear', 'Green', 'Blue', 'Gray'],
//         lensType: ['Single Vision', 'Progressive', 'Bifocal'],
//         lensCoating: ['Anti-Reflective', 'UV Protection', 'Blue Cut'],
//         lensMaterial: ['CR-39', 'Trivex', 'Polycarbonate']
//     };

//     const handleCheckboxChange = (type, value) => {
//         setSelectedFilters(prev => {
//             const values = prev[type].includes(value)
//                 ? prev[type].filter(v => v !== value)
//                 : [...prev[type], value];
//             return { ...prev, [type]: values };
//         });
//     };

//     useEffect(() => {
//         const params = new URLSearchParams();
//         Object.keys(selectedFilters).forEach(type => {
//             if (selectedFilters[type].length > 0) {
//                 params.set(type, selectedFilters[type].join(','));
//             }
//         });

//         router.push(`/products?${params.toString()}`);
//     }, [selectedFilters]);

//     return (
//         <div className="w-64 p-4 border-r overflow-y-auto max-h-screen">
//             <h2 className="font-bold text-lg mb-4">Filter</h2>

//             <div className="mb-4">
//                 <h3 className="font-semibold mb-2">Categories</h3>
//                 <ul className="space-y-2">
//                     {categories.map(cat => (
//                         <li key={cat}>
//                             <button
//                                 onClick={() => router.push(cat === "All" ? "/products" : `/products/${cat}`)}
//                                 className="text-left w-full hover:underline"
//                             >
//                                 {cat}
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Filters */}
//             {Object.entries(filters).map(([type, options]) => (
//                 <div key={type} className="mb-4">
//                     <h3 className="font-semibold capitalize">{type}</h3>
//                     {options.map(option => (
//                         <label key={option} className="block text-sm">
//                             <input
//                                 type="checkbox"
//                                 className="mr-2"
//                                 checked={selectedFilters[type]?.includes(option)}
//                                 onChange={() => handleCheckboxChange(type, option)}
//                             />
//                             {option}
//                         </label>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// }














// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter, useSearchParams, usePathname } from 'next/navigation';
// import Link from 'next/link';

// export default function FilterSidebar({ categories, currentCategory }) {
//     const router = useRouter();
//     const pathname = usePathname();
//     const searchParams = useSearchParams();

//     const [selectedFilters, setSelectedFilters] = useState({
//         gender: [],
//         brand: [],
//         frameType: [],
//         material: [],
//         frameColor: [],
//         lensColor: [],
//         lensType: [],
//         lensCoating: [],
//         lensMaterial: []
//     });

//     const filters = {
//         gender: ['Men', 'Women', 'Kids', 'Unisex'],
//         brand: ['RayBan', 'Oakley', 'Vogue', 'Titan', 'Fastrack', 'Zefr'],
//         frameType: ['Full Rim', 'Semi Rimless', 'Rimless'],
//         material: ['Plastic', 'Metal', 'Titanium', 'Acetate'],
//         frameColor: ['Black', 'Blue', 'Red', 'Gold', 'Brown'],
//         lensColor: ['Amber', 'Clear', 'Green', 'Blue', 'Gray'],
//         lensType: ['Single Vision', 'Progressive', 'Bifocal'],
//         lensCoating: ['Anti-Reflective', 'UV Protection', 'Blue Cut'],
//         lensMaterial: ['CR-39', 'Trivex', 'Polycarbonate']
//     };

//     // Initialize filters from URL
//     useEffect(() => {
//         const initialFilters = {};
//         Object.keys(filters).forEach(type => {
//             const values = searchParams.get(type);
//             initialFilters[type] = values ? values.split(',') : [];
//         });
//         setSelectedFilters(initialFilters);
//     }, [searchParams]);

//     const handleCheckboxChange = (type, value) => {
//         const newFilters = {
//             ...selectedFilters,
//             [type]: selectedFilters[type].includes(value)
//                 ? selectedFilters[type].filter(v => v !== value)
//                 : [...selectedFilters[type], value]
//         };

//         const params = new URLSearchParams();
//         Object.keys(newFilters).forEach(filterType => {
//             if (newFilters[filterType].length > 0) {
//                 params.set(filterType, newFilters[filterType].join(','));
//             }
//         });

//         router.push(`${pathname}?${params.toString()}`);
//     };

//     return (
//         <div className="w-full p-4 border rounded-lg bg-white sticky top-4">
//             <h2 className="font-bold text-lg mb-4">Filters</h2>

//             <div className="mb-6">
//                 <h3 className="font-semibold mb-2">Categories</h3>
//                 <ul className="space-y-2">
//                     {categories.map(cat => (
//                         <li key={cat}>
//                             <Link
//                                 href={cat === "All" ? "/products" : `/products/${cat.toLowerCase()}`}
//                                 className={`block p-2 rounded ${currentCategory === cat ? 'bg-blue-100 text-blue-800 font-medium' : 'hover:bg-gray-100'}`}
//                             >
//                                 {cat}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Filters */}
//             {Object.entries(filters).map(([type, options]) => (
//                 <div key={type} className="mb-4">
//                     <h3 className="font-semibold capitalize mb-2">{type.replace(/([A-Z])/g, ' $1').trim()}</h3>
//                     <div className="space-y-2">
//                         {options.map(option => (
//                             <label key={option} className="flex items-center space-x-2">
//                                 <input
//                                     type="checkbox"
//                                     className="rounded text-blue-600"
//                                     checked={selectedFilters[type]?.includes(option)}
//                                     onChange={() => handleCheckboxChange(type, option)}
//                                 />
//                                 <span>{option}</span>
//                             </label>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }











// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter, useSearchParams, usePathname } from 'next/navigation';
// import Link from 'next/link';

// export default function FilterSidebar({ categories, currentCategory }) {
//     const router = useRouter();
//     const pathname = usePathname();
//     const searchParams = useSearchParams();

//     const [selectedFilters, setSelectedFilters] = useState({
//         gender: [],
//         brand: [],
//         frameType: [],
//         material: [],
//         frameColor: [],
//         lensColor: [],
//         lensType: [],
//         lensCoating: [],
//         lensMaterial: []
//     });

//     const filters = {
//         gender: ['Men', 'Women', 'Kids', 'Unisex'],
//         brand: ['RayBan', 'Oakley', 'Vogue', 'Titan', 'Fastrack', 'Zefr'],
//         frameType: ['Full Rim', 'Semi Rimless', 'Rimless'],
//         material: ['Plastic', 'Metal', 'Titanium', 'Acetate'],
//         frameColor: ['Black', 'Blue', 'Red', 'Gold', 'Brown'],
//         lensColor: ['Amber', 'Clear', 'Green', 'Blue', 'Gray'],
//         lensType: ['Single Vision', 'Progressive', 'Bifocal'],
//         lensCoating: ['Anti-Reflective', 'UV Protection', 'Blue Cut'],
//         lensMaterial: ['CR-39', 'Trivex', 'Polycarbonate']
//     };

//     // Initialize filters from URL
//     useEffect(() => {
//         const initialFilters = {};
//         Object.keys(filters).forEach(type => {
//             const values = searchParams.get(type);
//             initialFilters[type] = values ? values.split(',') : [];
//         });
//         setSelectedFilters(initialFilters);
//     }, [searchParams]);

//     const handleCheckboxChange = (type, value) => {
//         const newFilters = {
//             ...selectedFilters,
//             [type]: selectedFilters[type].includes(value)
//                 ? selectedFilters[type].filter(v => v !== value)
//                 : [...selectedFilters[type], value]
//         };

//         const params = new URLSearchParams();
//         Object.keys(newFilters).forEach(filterType => {
//             if (newFilters[filterType].length > 0) {
//                 params.set(filterType, newFilters[filterType].join(','));
//             }
//         });

//         router.push(`${pathname}?${params.toString()}`);
//     };

//     // Function to generate proper category URLs
//     const getCategoryLink = (category) => {
//         if (category === "All") return "/products";

//         // Convert to URL-friendly format
//         const urlFriendly = category.toLowerCase().replace(/\s+/g, '-');
//         return `/products/${urlFriendly}`;
//     };

//     return (
//         <div className="w-full p-4 border rounded-lg bg-white sticky top-4">
//             <h2 className="font-bold text-lg mb-4">Filters</h2>

//             <div className="mb-6">
//                 <h3 className="font-semibold mb-2">Categories</h3>
//                 <ul className="space-y-2">
//                     {categories.map(cat => {
//                         const isActive = currentCategory === cat ||
//                             (currentCategory === "All" && cat === "All") ||
//                             (pathname.includes(cat.toLowerCase().replace(/\s+/g, '-')));

//                         return (
//                             <li key={cat}>
//                                 <Link
//                                     href={getCategoryLink(cat)}
//                                     className={`block p-2 rounded ${isActive ? 'bg-blue-100 text-blue-800 font-medium' : 'hover:bg-gray-100'
//                                         }`}
//                                 >
//                                     {cat}
//                                 </Link>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>

//             {/* Other filters remain the same */}
//             {Object.entries(filters).map(([type, options]) => (
//                 <div key={type} className="mb-4">
//                     <h3 className="font-semibold capitalize mb-2">{type.replace(/([A-Z])/g, ' $1').trim()}</h3>
//                     <div className="space-y-2">
//                         {options.map(option => (
//                             <label key={option} className="flex items-center space-x-2">
//                                 <input
//                                     type="checkbox"
//                                     className="rounded text-blue-600"
//                                     checked={selectedFilters[type]?.includes(option)}
//                                     onChange={() => handleCheckboxChange(type, option)}
//                                 />
//                                 <span>{option}</span>
//                             </label>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }















// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter, useSearchParams, usePathname } from 'next/navigation';
// import Link from 'next/link';

// export default function FilterSidebar({ currentCategory = "All" }) {
//     const router = useRouter();
//     const pathname = usePathname();
//     const searchParams = useSearchParams();

//     const categories = [
//         "All",
//         "Eyeglasses",
//         "Sunglasses",
//         "Power Sunglasses",
//         "Computer Glasses"
//     ];

//     const [selectedFilters, setSelectedFilters] = useState({
//         gender: [],
//         brand: [],
//         frameType: [],
//         material: [],
//         frameColor: [],
//         lensColor: [],
//         lensType: [],
//         lensCoating: [],
//         lensMaterial: []
//     });

//     const filters = {
//         gender: ['Men', 'Women', 'Kids', 'Unisex'],
//         brand: ['RayBan', 'Oakley', 'Vogue', 'Titan', 'Fastrack', 'Zefr'],
//         frameType: ['Full Rim', 'Semi Rimless', 'Rimless'],
//         material: ['Plastic', 'Metal', 'Titanium', 'Acetate'],
//         frameColor: ['Black', 'Blue', 'Red', 'Gold', 'Brown'],
//         lensColor: ['Amber', 'Clear', 'Green', 'Blue', 'Gray'],
//         lensType: ['Single Vision', 'Progressive', 'Bifocal'],
//         lensCoating: ['Anti-Reflective', 'UV Protection', 'Blue Cut'],
//         lensMaterial: ['CR-39', 'Trivex', 'Polycarbonate']
//     };

//     useEffect(() => {
//         const initialFilters = {};
//         Object.keys(filters).forEach(type => {
//             const values = searchParams.get(type);
//             initialFilters[type] = values ? values.split(',') : [];
//         });
//         setSelectedFilters(initialFilters);
//     }, [searchParams]);

//     const handleCheckboxChange = (type, value) => {
//         const newFilters = {
//             ...selectedFilters,
//             [type]: selectedFilters[type].includes(value)
//                 ? selectedFilters[type].filter(v => v !== value)
//                 : [...selectedFilters[type], value]
//         };

//         const params = new URLSearchParams();
//         Object.keys(newFilters).forEach(filterType => {
//             if (newFilters[filterType].length > 0) {
//                 params.set(filterType, newFilters[filterType].join(','));
//             }
//         });

//         router.push(`${pathname}?${params.toString()}`);
//     };

//     const getCategoryLink = (category) => {
//         if (category === "All") return "/";
//         return `/${category.toLowerCase().replace(/\s+/g, '-')}`;
//     };

//     return (
//         <div className="w-full p-4 border rounded-lg bg-white sticky top-4">
//             <h2 className="font-bold text-lg mb-4">Filters</h2>

//             <div className="mb-6">
//                 <h3 className="font-semibold mb-2">Categories</h3>
//                 <ul className="space-y-2">
//                     {categories.map(cat => {
//                         const isActive = currentCategory === cat ||
//                             (pathname === '/' && cat === "All");

//                         return (
//                             <li key={cat}>
//                                 <Link
//                                     href={getCategoryLink(cat)}
//                                     className={`block p-2 rounded ${isActive ? 'bg-blue-100 text-blue-800 font-medium' : 'hover:bg-gray-100'
//                                         }`}
//                                 >
//                                     {cat}
//                                 </Link>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>

//             {Object.entries(filters).map(([type, options]) => (
//                 <div key={type} className="mb-4">
//                     <h3 className="font-semibold capitalize mb-2">
//                         {type.replace(/([A-Z])/g, ' $1').trim()}
//                     </h3>
//                     <div className="space-y-2">
//                         {options.map(option => (
//                             <label key={option} className="flex items-center space-x-2">
//                                 <input
//                                     type="checkbox"
//                                     className="rounded text-blue-600"
//                                     checked={selectedFilters[type]?.includes(option)}
//                                     onChange={() => handleCheckboxChange(type, option)}
//                                 />
//                                 <span>{option}</span>
//                             </label>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }






















































// 'use client';
// import { useState, useEffect } from 'react';
// import { useRouter, useSearchParams, usePathname } from 'next/navigation';
// import Link from 'next/link';

// export default function FilterSidebar({ currentCategory = "All" }) {
//     const router = useRouter();
//     const pathname = usePathname();
//     const searchParams = useSearchParams();

//     const categories = [
//         "All",
//         "Eyeglasses",
//         "Sunglasses",
//         "Power Sunglasses",
//         "Computer Glasses"
//     ];

//     const [selectedFilters, setSelectedFilters] = useState({
//         gender: [],
//         brand: [],
//         frameType: [],
//         material: [],
//         frameColor: [],
//         lensColor: [],
//         lensType: [],
//         lensCoating: [],
//         lensMaterial: []
//     });

//     const filters = {
//         gender: ['Men', 'Women', 'Kids', 'Unisex'],
//         brand: ['RayBan', 'Oakley', 'Vogue', 'Titan', 'Fastrack', 'Zefr'],
//         frameType: ['Full Rim', 'Semi Rimless', 'Rimless'],
//         material: ['Plastic', 'Metal', 'Titanium', 'Acetate'],
//         frameColor: ['Black', 'Blue', 'Red', 'Gold', 'Brown'],
//         lensColor: ['Amber', 'Clear', 'Green', 'Blue', 'Gray'],
//         lensType: ['Single Vision', 'Progressive', 'Bifocal'],
//         lensCoating: ['Anti-Reflective', 'UV Protection', 'Blue Cut'],
//         lensMaterial: ['CR-39', 'Trivex', 'Polycarbonate']
//     };

//     useEffect(() => {
//         const initialFilters = {};
//         Object.keys(filters).forEach(type => {
//             const values = searchParams.get(type);
//             initialFilters[type] = values ? values.split(',') : [];
//         });
//         setSelectedFilters(initialFilters);
//     }, [searchParams]);

//     const handleCheckboxChange = (type, value) => {
//         const newFilters = {
//             ...selectedFilters,
//             [type]: selectedFilters[type].includes(value)
//                 ? selectedFilters[type].filter(v => v !== value)
//                 : [...selectedFilters[type], value]
//         };

//         const params = new URLSearchParams();
//         Object.keys(newFilters).forEach(filterType => {
//             if (newFilters[filterType].length > 0) {
//                 params.set(filterType, newFilters[filterType].join(','));
//             }
//         });

//         router.push(`${pathname}?${params.toString()}`);
//     };

//     const getCategoryLink = (category) => {
//         if (category === "All") return "/";
//         return `/${category.toLowerCase().replace(/\s+/g, '-')}`;
//     };

//     return (
//         <div className="w-full p-4 border rounded-lg bg-white sticky top-4">
//             <h2 className="font-bold text-lg mb-4">Filters</h2>

//             <div className="mb-6">
//                 <h3 className="font-semibold mb-2">Categories</h3>
//                 <ul className="space-y-2">
//                     {categories.map(cat => {
//                         const isActive = currentCategory === cat ||
//                             (pathname === '/' && cat === "All");

//                         return (
//                             <li key={cat}>
//                                 <Link
//                                     href={getCategoryLink(cat)}
//                                     className={`block p-2 rounded ${isActive ? 'bg-blue-100 text-blue-800 font-medium' : 'hover:bg-gray-100'
//                                         }`}
//                                 >
//                                     {cat}
//                                 </Link>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>

//             {Object.entries(filters).map(([type, options]) => (
//                 <div key={type} className="mb-4">
//                     <h3 className="font-semibold capitalize mb-2">
//                         {type.replace(/([A-Z])/g, ' $1').trim()}
//                     </h3>
//                     <div className="space-y-2">
//                         {options.map(option => (
//                             <label key={option} className="flex items-center space-x-2">
//                                 <input
//                                     type="checkbox"
//                                     className="rounded text-blue-600"
//                                     checked={selectedFilters[type]?.includes(option)}
//                                     onChange={() => handleCheckboxChange(type, option)}
//                                 />
//                                 <span>{option}</span>
//                             </label>
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }





'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';

export default function FilterSidebar({ currentCategory }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const categories = [
        { name: "All", path: "/" },
        { name: "Eyeglasses", path: "/eyeglasses" },
        { name: "Sunglasses", path: "/sunglasses" },
        { name: "Power Sunglasses", path: "/power-sunglasses" },
        { name: "Computer Glasses", path: "/computer-glasses" }
    ];

    const [selectedFilters, setSelectedFilters] = useState({
        gender: [],
        brand: [],
        frameType: [],
        material: [],
        frameColor: [],
        lensColor: []
    });

    const filters = {
        gender: ['Men', 'Women', 'Unisex'],
        brand: ['RayBan', 'Oakley', 'Vogue', 'Titan', 'Fastrack', 'Zefr'],
        frameType: ['Full Rim', 'Semi Rimless', 'Rimless'],
        material: ['Plastic', 'Metal', 'Titanium', 'Acetate'],
        frameColor: ['Black', 'Blue', 'Red', 'Gold', 'Brown'],
        lensColor: ['Amber', 'Clear', 'Green', 'Blue', 'Gray']
    };

    useEffect(() => {
        const initialFilters = {};
        Object.keys(filters).forEach(type => {
            const values = searchParams.get(type);
            initialFilters[type] = values ? values.split(',') : [];
        });
        setSelectedFilters(initialFilters);
    }, [searchParams]);

    const handleCheckboxChange = (type, value) => {
        const newFilters = {
            ...selectedFilters,
            [type]: selectedFilters[type].includes(value)
                ? selectedFilters[type].filter(v => v !== value)
                : [...selectedFilters[type], value]
        };

        const params = new URLSearchParams();
        Object.keys(newFilters).forEach(filterType => {
            if (newFilters[filterType].length > 0) {
                params.set(filterType, newFilters[filterType].join(','));
            }
        });

        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <div className="w-64 p-4 border-r bg-white sticky top-0 h-screen overflow-y-auto">
            <h2 className="font-bold text-lg mb-4">Filters</h2>

            <div className="mb-6">
                <h3 className="font-semibold mb-2">Categories</h3>
                <ul className="space-y-2">
                    {categories.map(cat => (
                        <li key={cat.name}>
                            <Link
                                href={cat.path}
                                className={`block p-2 rounded ${currentCategory === cat.name.toLowerCase() ||
                                    (pathname === '/' && cat.name === "All")
                                    ? 'bg-blue-100 text-blue-800 font-medium'
                                    : 'hover:bg-gray-100'
                                    }`}
                            >
                                {cat.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {Object.entries(filters).map(([type, options]) => (
                <div key={type} className="mb-4">
                    <h3 className="font-semibold capitalize mb-2">
                        {type.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <div className="space-y-2">
                        {options.map(option => (
                            <label key={option} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    className="rounded text-blue-600"
                                    checked={selectedFilters[type]?.includes(option)}
                                    onChange={() => handleCheckboxChange(type, option)}
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}