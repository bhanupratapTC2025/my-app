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
        frameType: ['Full-Rim', 'Half-Rim', 'Rimless'],
        material: ['Plastic', 'Metal', 'Titanium', 'Acetate', 'TR90'],
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

    const handleFilterRemove = (type, value) => {
        const newFilters = {
            ...selectedFilters,
            [type]: selectedFilters[type].filter(v => v !== value)
        };

        const params = new URLSearchParams();
        Object.keys(newFilters).forEach(filterType => {
            if (newFilters[filterType].length > 0) {
                params.set(filterType, newFilters[filterType].join(','));
            }
        });

        router.push(`${pathname}?${params.toString()}`);
    };

    // Clear all filters
    const handleClearAllFilters = () => {
        const params = new URLSearchParams();
        router.push(`${pathname}?${params.toString()}`);
    };

    // Check if any filter is selected
    const isAnyFilterSelected = Object.values(selectedFilters).some(filters => filters.length > 0);

    return (
        <div className="w-64 p-6 border-r bg-white sticky top-0 h-screen overflow-y-auto">
            <h2 className="font-bold text-2xl mb-4 text-gray-800">Filters</h2>

            {/* Display Selected Filters */}
            <div className="mb-6">
                <h3 className="font-semibold text-lg text-gray-700 mb-2">Applied Filters</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                    {Object.entries(selectedFilters).map(([type, selectedValues]) =>
                        selectedValues.map((value) => (
                            <div key={`${type}-${value}`} className="flex items-center bg-blue-200 text-blue-800 p-2 rounded-lg">
                                <span className="text-sm">{value}</span>
                                <button
                                    onClick={() => handleFilterRemove(type, value)}
                                    className="ml-2 text-blue-600 font-bold text-xs"
                                >
                                    X
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Clear All Filters Button */}
                {isAnyFilterSelected && (
                    <button
                        onClick={handleClearAllFilters}
                        className="mt-4 px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 w-full"
                    >
                        Clear All Filters
                    </button>
                )}
            </div>

            {/* Categories */}
            <div className="mb-6">
                <h3 className="font-semibold text-lg text-gray-700 mb-2">Categories</h3>
                <ul className="space-y-2">
                    {categories.map(cat => (
                        <li key={cat.name}>
                            <Link
                                href={cat.path}
                                className={`block p-2 rounded-lg text-sm ${currentCategory === cat.name.toLowerCase() ||
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

            {/* Filters */}
            {Object.entries(filters).map(([type, options]) => (
                <div key={type} className="mb-4">
                    <h3 className="font-semibold capitalize text-lg text-gray-700 mb-2">
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
