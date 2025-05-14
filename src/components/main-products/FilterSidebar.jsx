'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
import { FaFilter } from 'react-icons/fa';

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
        brand: ['RayBan', 'Oakley', 'Vogue', 'Titan', 'Fastrack', 'Zefr','carrera'],
        frameType: ['Full-Rim', 'Half-Rim', 'Rimless'],
        material: ['Plastic', 'Metal', 'Titanium', 'Acetate', 'TR90'],
        frameColor: ['Black', 'Blue', 'Red', 'Gold', 'Brown'],
        lensColor: ['Amber', 'Clear', 'Green', 'Blue', 'Gray']
    };

    const [mobileOpen, setMobileOpen] = useState(false);

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

    const handleClearAllFilters = () => {
        const params = new URLSearchParams();
        router.push(`${pathname}?${params.toString()}`);
    };

    const isAnyFilterSelected = Object.values(selectedFilters).some(filters => filters.length > 0);

    return (
        <>
            {/* Mobile Filter Toggle Button */}
            <div className="lg:hidden hidden  justify-end px-4 py-2">
                <button
                    onClick={() => setMobileOpen(true)}
                    className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md shadow-md"
                >
                    <FaFilter className="text-lg " /> Filter
                </button>
            </div>

            {/* Sidebar: Hidden on mobile, visible on large screens */}
            <div className="hidden lg:block w-64  p-6 border-r bg-white sticky top-0 h-120 overflow-y-auto">
                <SidebarContent
                    categories={categories}
                    currentCategory={currentCategory}
                    selectedFilters={selectedFilters}
                    filters={filters}
                    handleCheckboxChange={handleCheckboxChange}
                    handleFilterRemove={handleFilterRemove}
                    handleClearAllFilters={handleClearAllFilters}
                    isAnyFilterSelected={isAnyFilterSelected}
                    pathname={pathname}
                />
            </div>

            {/* Slide-in Mobile Sidebar */}
            {mobileOpen && (
                <div className="fixed hidden inset-0 z-10 mt-16 ">
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-40"
                        onClick={() => setMobileOpen(false)}
                    ></div>

                    {/* Sidebar Panel */}
                    <div className="relative  left-0 z-50 w-72 bg-white p-6 overflow-y-auto h-full">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl  font-bold text-gray-800">Filters</h2>
                            <button onClick={() => setMobileOpen(false)} className="text-2xl text-gray-600">
                                <IoMdClose />
                            </button>
                        </div>

                        <SidebarContent
                            categories={categories}
                            currentCategory={currentCategory}
                            selectedFilters={selectedFilters}
                            filters={filters}
                            handleCheckboxChange={handleCheckboxChange}
                            handleFilterRemove={handleFilterRemove}
                            handleClearAllFilters={handleClearAllFilters}
                            isAnyFilterSelected={isAnyFilterSelected}
                            pathname={pathname}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

// Sidebar Inner Content
function SidebarContent({
    categories,
    currentCategory,
    selectedFilters,
    filters,
    handleCheckboxChange,
    handleFilterRemove,
    handleClearAllFilters,
    isAnyFilterSelected,
    pathname
}) {
    return (
        <div className="space-y-6">
            {/* Applied Filters */}
            <div>
                <h3 className="font-semibold text-lg text-gray-700 mb-2">Applied Filters</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                    {Object.entries(selectedFilters).map(([type, selectedValues]) =>
                        selectedValues.map(value => (
                            <div key={`${type}-${value}`} className="flex items-center bg-blue-200 text-blue-800 p-1 px-2 rounded-md text-sm">
                                {value}
                                <button
                                    onClick={() => handleFilterRemove(type, value)}
                                    className="ml-2 text-blue-600 font-bold"
                                >
                                    ×
                                </button>
                            </div>
                        ))
                    )}
                </div>
                {isAnyFilterSelected && (
                    <button
                        onClick={handleClearAllFilters}
                        className="mt-2 text-sm text-white bg-red-500 px-4 py-1.5 rounded hover:bg-red-600 w-full"
                    >
                        Clear All Filters
                    </button>
                )}
            </div>

            {/* Categories */}
            <div>
                <h3 className="font-semibold text-lg text-gray-700 mb-2">Categories</h3>
                <ul className="space-y-1">
                    {categories.map(cat => (
                        <li key={cat.name}>
                            <Link
                                href={cat.path}
                                className={`block p-2 rounded-md text-sm ${currentCategory === cat.name.toLowerCase() ||
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
                <div key={type}>
                    <h3 className="font-semibold capitalize text-gray-700 mb-2">
                        {type.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <div className="space-y-1">
                        {options.map(option => (
                            <label key={option} className="flex items-center space-x-2 text-sm">
                                <input
                                    type="checkbox"
                                    className="text-blue-600"
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
