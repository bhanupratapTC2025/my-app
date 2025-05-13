// 'use client';

// import { usePathname } from 'next/navigation';
// import Link from 'next/link';

// const Breadcrumb = () => {
//     const pathname = usePathname(); // e.g., "/about/team"
//     const pathParts = pathname.split('/').filter(Boolean); // ['about', 'team']

//     const crumbs = pathParts.map((part, index) => {
//         const href = '/' + pathParts.slice(0, index + 1).join('/');
//         const label = decodeURIComponent(part.replace(/-/g, ' ')); // optional

//         return (
//             <span key={href}>
//                 {' > '}
//                 <Link href={href} className="text-blue-600 hover:underline capitalize">
//                     {label}
//                 </Link>
//             </span>
//         );
//     });

//     return (
//         <div className="p-4 bg-gray-100 text-gray-800">
//             <div className="text-sm">
//                 <Link href="/" className="text-blue-600 font-bold hover:underline">
//                     Home
//                 </Link>
//                 {crumbs}
//             </div>
//             <h2 className="text-xl font-bold mb-2">Slug at Affordable Price</h2>
//         </div>
//     );
// };

// export default Breadcrumb;




'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Breadcrumb = () => {
    const pathname = usePathname(); // e.g., "/about/team"
    const pathParts = pathname.split('/').filter(Boolean); // ['about', 'team']

    const mainSlug = decodeURIComponent(pathParts[0]?.replace(/-/g, ' ') || ''); // home ke baad wala
    const crumbs = pathParts.map((part, index) => {
        const href = '/' + pathParts.slice(0, index + 1).join('/');
        const label = decodeURIComponent(part.replace(/-/g, ' '));

        return (
            <span key={href}>
                {' > '}
                <Link
                    href={href}
                    className="text-blue-600 font-bold hover:underline capitalize"
                >
                    {label}
                </Link>
            </span>
        );
    });

    return (
        <div className="p-4 bg-gray-100 text-gray-800">
            <div className="text-sm">
                <Link href="/" className="text-blue-600 font-bold hover:underline">
                    Home
                </Link>
                {crumbs}
            </div>
            {/* {mainSlug && (
                <h2 className="text-xl text-blue-800 font-bold mt-4 capitalize">
                    {mainSlug}
                </h2>
            )} */}
        </div>
    );
};

export default Breadcrumb;
