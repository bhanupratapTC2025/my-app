'use client'
import { useRouter } from 'next/navigation';

export default function FilterSidebar({ categories }) {
    const router = useRouter();

    return (
        <div className="w-64 p-4 border-r">
            <h2 className="font-bold text-lg mb-4">Filter</h2>
            <ul className="space-y-2">
                {categories.map(cat => (
                    <li key={cat}>
                        <button
                            onClick={() => router.push(cat === "All" ? "/products" : `/products/${cat}`)}
                            className="text-left w-full hover:underline"
                        >
                            {cat}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
