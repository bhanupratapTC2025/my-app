"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const Slug = () => {
    const params = useParams();
    const slug = params?.slug || [];

    // Breadcrumb title builder
    const formatPart = (str) =>
        str.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());

    // Build breadcrumbs with links
    const breadcrumbs = slug.map((part, index) => {
        const path = "/" + slug.slice(0, index + 1).join("/");
        return {
            name: formatPart(part),
            href: path,
        };
    });

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <nav className="text-sm text-gray-500 mb-4 space-x-1">
                <Link href="/" className="hover:underline text-indigo-600">
                    Home
                </Link>
                {breadcrumbs.map((crumb, i) => (
                    <span key={i}>
                        <span className="text-gray-400 mx-1">{'>'}</span>
                        <Link href={crumb.href} className="hover:underline text-indigo-600">
                            {crumb.name}
                        </Link>
                    </span>
                ))}
            </nav>

            <h1 className="text-2xl font-bold text-indigo-700 mb-4">
                {breadcrumbs.length > 0
                    ? breadcrumbs[breadcrumbs.length - 1].name
                    : "Page"}
            </h1>

            <p className="text-gray-600">
                Displaying content for: <strong>{JSON.stringify(slug)}</strong>
            </p>
        </div>
    );
};

export default Slug;
