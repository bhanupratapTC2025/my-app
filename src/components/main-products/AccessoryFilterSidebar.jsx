'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { IoMdClose } from 'react-icons/io';
import { FaFilter } from 'react-icons/fa';

export default function AccessoryFilterSidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const accessoryOptions = [
        'Swimming Goggles',
        'Charger',
        'Wipes',
        'Face Masks',
        'Packaging Case',
        'Chains',
    ];

    const [selectedAccessories, setSelectedAccessories] = useState([]);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const selected = searchParams.get('accessories');
        setSelectedAccessories(selected ? selected.split(',') : []);
    }, [searchParams]);

    const handleCheckboxChange = (value) => {
        const updated = selectedAccessories.includes(value)
            ? selectedAccessories.filter(v => v !== value)
            : [...selectedAccessories, value];

        const params = new URLSearchParams();
        if (updated.length > 0) {
            params.set('accessories', updated.join(','));
        }

        router.push(`${pathname}?${params.toString()}`);
    };

    const handleClearAll = () => {
        router.push(pathname);
    };

    const handleRemoveFilter = (value) => {
        const updated = selectedAccessories.filter(v => v !== value);
        const params = new URLSearchParams();
        if (updated.length > 0) {
            params.set('accessories', updated.join(','));
        }
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <>
            {/* Mobile Button */}
            <div className="lg:hidden px-4 py-2 flex justify-end">
                <button
                    onClick={() => setMobileOpen(true)}
                    className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md shadow-md"
                >
                    <FaFilter /> Filter
                </button>
            </div>

            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-64 p-6 border-r bg-white sticky top-0 h-screen overflow-y-auto">
                <SidebarContent
                    options={accessoryOptions}
                    selected={selectedAccessories}
                    onChange={handleCheckboxChange}
                    onClear={handleClearAll}
                    onRemove={handleRemoveFilter}
                />
            </div>

            {/* Mobile Sidebar */}
            {mobileOpen && (
                <div className="fixed inset-0 z-10">
                    <div className="fixed inset-0 bg-black bg-opacity-40" onClick={() => setMobileOpen(false)}></div>
                    <div className="relative z-50 w-72 bg-white p-6 h-full overflow-y-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                            <button onClick={() => setMobileOpen(false)} className="text-2xl text-gray-600">
                                <IoMdClose />
                            </button>
                        </div>
                        <SidebarContent
                            options={accessoryOptions}
                            selected={selectedAccessories}
                            onChange={handleCheckboxChange}
                            onClear={handleClearAll}
                            onRemove={handleRemoveFilter}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

function SidebarContent({ options, selected, onChange, onClear, onRemove }) {
    const isAnySelected = selected.length > 0;

    return (
        <div className="space-y-6">
            {/* Applied Filters */}
            {isAnySelected && (
                <div>
                    <h3 className="font-semibold text-lg text-gray-700 mb-2">Applied Filters</h3>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {selected.map(value => (
                            <div key={value} className="flex items-center bg-blue-200 text-blue-800 p-1 px-2 rounded-md text-sm">
                                {value}
                                <button onClick={() => onRemove(value)} className="ml-2 font-bold">×</button>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={onClear}
                        className="w-full text-sm text-white bg-red-500 px-4 py-1.5 rounded hover:bg-red-600"
                    >
                        Clear All Filters
                    </button>
                </div>
            )}

            {/* Accessory Filters */}
            <div>
                <h3 className="font-semibold text-lg text-gray-700 mb-2">Accessories</h3>
                <div className="space-y-1">
                    {options.map(option => (
                        <label key={option} className="flex items-center space-x-2 text-sm">
                            <input
                                type="checkbox"
                                checked={selected.includes(option)}
                                onChange={() => onChange(option)}
                            />
                            <span>{option}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}
