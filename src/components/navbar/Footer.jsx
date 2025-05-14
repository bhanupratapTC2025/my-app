import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const footerLinks = [
    {
        title: "Eye Glasses",
        links: ["Men", "Women", "Kids", "Fastrack", "Rimless", "Titan"],
    },
    {
        title: "Sunglasses",
        links: ["Men", "Women", "Kids", "Fastrack"],
    },
    {
        title: "CONTACT LENSES",
        links: ["Bounsch & Lomb", "Johnson & Johnson"],
    },
    {
        title: "Account",
        links: [
            "Our Policies",
            "My Account",
            "Create an Account",
            "Tata Neu Pass",
            "Tata Neu Pass",
        ],
    },
    {
        title: "ABOUT TITAN EYE +",
        links: [
            "About Us",
            "Blog",
            "Contact Us",
            "Terms & Conditions",
            "Cyber Security Policy",
        ],
    },
    {
        title: "USEFUL LINKS",
        links: [
            "Store Locations",
            "Business Partner",
            "EyeX Compatible App",
            "Hearing Aids",
            "Exercise Your Rights",
            "Glossary",
        ],
    },
];

const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                {/* Grid Columns */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h2 className="text-xl font-bold mb-4">{section.title}</h2>
                            <ul className="space-y-2">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link href="/" className="hover:text-gray-400">
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider and Copyright */}

                {/* Social & App Download Section */}
                <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Social Media */}
                    <div>
                        <div className="text-center">TITANEYE+</div>
                        <div className="flex gap-4">
                            {socialLinks.map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-gray-400 text-lg"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* App Download Buttons */}
                    <div>
                        <p className="text-center">DOWNLOAD TITANEYE+ APP</p>
                        <div className="flex gap-4">
                            <Link
                                href="https://play.google.com/store"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/google-play-badge.png"
                                    alt="Get it on Google Play"
                                    className="h-10"
                                />
                            </Link>
                            <Link
                                href="https://www.apple.com/app-store/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/apple-store-badge.png"
                                    alt="Download on the App Store"
                                    className="h-10"
                                />
                            </Link>
                        </div>
                        <div>
                            <div>REACH US AT</div>
                            <div>
                                <Link
                                    href="mailto:cs@titaneyeplus.com"
                                    className=" hover:underline"
                                >
                                    {" "}
                                    cs@titaneyeplus.com
                                </Link>
                            </div>
                            <div>
                                <Link href="tel:1800-266-0123" className=" hover:underline">
                                    {" "}
                                    1800-266-0123
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                    &copy; {new Date().getFullYear()} Tech Cherry Eye  Plus. All rights reserved.
                </div>
            </div>
        </footer>
    );
}