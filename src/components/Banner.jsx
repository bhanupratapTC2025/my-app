'use client';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const bannerImages = {
    '/eyeglasses': '/banners/eyeglasses.jpg',
    '/sunglasses': '/banners/sunglasses.jpg',
    'power-sunglasses': '/banners/power-sunglasses.jpg',
    'computer-glasses': '/banners/computer-glasses.jpg',
    '/contact-lenses': '/banners/contact-lenses.jpg',
    '/hearing-aid': '/banners/hearing-aid.jpg',
    'accessories': '/banners/accessories.jpg',
    'brands': '/banners/brands.jpg',
    default: '/banners/default.jpg',
};

const Banner = ({ title, subtitle }) => {
    const pathname = usePathname();
    const backgroundImage = bannerImages[pathname] || bannerImages.default;

    return (
        <div className="relative h-44 w-[100%] mx-auto  overflow-hidden shadow-lg">
            <Image
                src={backgroundImage}
                alt="Banner"
                layout="fill"
                objectFit="cover"
                className="brightness-75"
                priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
                {subtitle && <p className="text-sm md:text-base mt-2">{subtitle}</p>}
            </div>
        </div>
    );
};

export default Banner;
