'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';

const dropdownData = {
  EYEGLASSES: [
    { heading: 'GENDER', items: ['All', 'Men', 'Women', 'Kids'] },
    { heading: 'COLLECTION', items: ['EyeX', 'Tees', 'Signature', 'Spiderman', 'Hipster'] },
    // { heading: 'SHAPE', items: ['Rectangle', 'Round', 'Cat Eye', 'Geometric', 'Wayfarer'] },
    { heading: 'MATERIAL', items: ['Plastic', 'Metal', 'Titanium', 'Acetate', 'TR90'] },
    { heading: 'STYLE', items: ['Full Rim', 'Half Rim', 'Rimless'] },
    // {
    //   heading: 'TOP BRANDS',
    //   items: ['Zefr', 'Titan', 'Fastrack', 'Rayban', 'Dash For Kids', 'Aristo By Tanishq', 'Vogue Eyewear', 'Tommy Hilfiger', 'Emporio Armani', 'ZEISS'],
    // },
    // {
    //   heading: 'Featured Brands',
    //   items: ['Bolon', 'Oakley', 'Carrera', 'Stepper', 'Burberry', 'Tom Ford', 'Ted Baker', 'Silhouette', 'Swarovski', 'Mont Blanc', 'Calvin Klein'],
    // },
  ],
  SUNGLASSES: [
    { heading: 'GENDER', items: ['All', 'Men', 'Women', 'Kids'] },
    { heading: 'MATERIAL', items: ['Plastic', 'Metal', 'Titanium', 'Acetate', 'TR90'] },
    { heading: 'STYLE', items: ['Full Rim', 'Half Rim', 'Rimless'] },
    { heading: 'COLLECTION', items: ['EyeX', 'Tees', 'Signature', 'Spiderman', 'Hipster'] },

    // { heading: 'STYLE', items: ['Mirrored', 'Tinted', 'UV Protection', 'Polarized'] },
    // { heading: 'USAGE', items: ['Regular', 'Power'] },
    // { heading: 'Collection', items: ['Smart Sunglasses', 'Donald', 'Glow Up', 'Whiplash', 'Vivid Geometry'] },
    // { heading: 'SHAPE', items: ['Aviator', 'Wayfarer', 'Wraparound', 'Rectangle', 'Round'] },
    // {
    //   heading: 'BRANDS',
    //   items: ['Titan', 'Fastrack', 'Tees By Fastrack', 'Dash For Kids', 'Vogue Eyewear', 'Emporio Armani', 'Rayban', 'Burberry', 'Maui Jim', 'Ted Baker', 'Oakley'],
    // },
  ],
  ACCESSORIES: [
    {
      heading: '',
      items: ["Swimming Goggles",
        "Contact Lens Solution",
        "Charger",
        "Solar Eclipse Goggles",
        "Wipes",
        "Face Masks",
        "Binoculars",
        "Packaging Case",
        "Chains",],
    },
  ],
  BRANDS: [
    {
      heading: '',
      items: [
        "Titan",
        "Fastrack",
        "Zefr",
        "Vogue Eyewear",
        "Ray Ban",
        "Maui Jim",
        "Ted-Baker",
        "Tees By Fastrack",
        "Acuvue By J&J",
        "Bausch And Lomb",
        "Zeiss",
      ]

    },
  ],
};

const navItems = ['EYEGLASSES', 'SUNGLASSES', 'POWER SUNGLASSES', 'COMPUTER GLASSES', 'HEARING AIDS', 'CONTACT LENSES', 'ACCESSORIES', 'BRANDS'];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [cartCount] = useState(2);

  const generateLink = (category, heading, item) => {
    if (!category || !item) return '#';
    const base = `/${category.toLowerCase()}`;
    const sub = heading ? `/${heading.toLowerCase()}` : '';
    const itemSlug = `/${item.toLowerCase().replace(/\s+/g, '-')}`;
    return base + sub + itemSlug;
  };

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-700">
          Techcherry <span className="text-gray-800">Eye+</span>
        </Link>

        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-4  items-center">
          {navItems.map((item) => (
            <div
              key={item}
              className="relative group"
              onMouseEnter={() => dropdownData[item] && setOpenDropdown(item)}
              onMouseLeave={() => dropdownData[item] && setOpenDropdown(null)}
            >
              <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-gray-700 hover:text-indigo-600">
                {item}
              </Link>
              {dropdownData[item] && openDropdown === item && (
                <div className={`absolute left-0top-8 bg-white shadow-lg p-4 z-50 rounded-lg ${dropdownData[item][0].heading ? 'grid grid-cols-4 gap-6 w-[700px]' : 'w-34'}`}>
                  {dropdownData[item][0].heading ? (
                    dropdownData[item].map((cat) => (
                      <div key={cat.heading}>
                        <h4 className="text-indigo-700 font-semibold mb-2">{cat.heading}</h4>
                        <ul className="space-y-1">
                          {cat.items.map((sub) => (
                            <li key={sub}>
                              <Link href={generateLink(item, cat.heading, sub)} className="text-gray-600 text-sm hover:text-indigo-500">
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <ul className="space-y-1">
                      {dropdownData[item][0].items.map((sub) => (
                        <li key={sub}>
                          <Link href={generateLink(item, '', sub)} className="text-gray-600 text-sm hover:text-indigo-500">
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="relative">
          <Link href="/cart">
            <ShoppingCart className="text-gray-700" size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 space-y-2 bg-white border-t">
          {navItems.map((item) => (
            <div key={item}>
              <div className="flex justify-between items-center">
                <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="block text-sm font-medium text-gray-700">
                  {item}
                </Link>
                {dropdownData[item] && (
                  <button onClick={() => setMobileDropdown(mobileDropdown === item ? null : item)}>
                    <ChevronDown className={`transform transition-transform ${mobileDropdown === item ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </div>

              {dropdownData[item] && mobileDropdown === item && (
                <div className="mt-2 ml-4 space-y-2">
                  {dropdownData[item][0].heading ? (
                    dropdownData[item].map((cat) => (
                      <div key={cat.heading}>
                        <h4 className="text-indigo-700 font-semibold">{cat.heading}</h4>
                        <ul className="ml-2 space-y-1">
                          {cat.items.map((sub) => (
                            <li key={sub}>
                              <Link href={generateLink(item, cat.heading, sub)} className="text-sm text-gray-600 hover:text-indigo-500">
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <ul className="ml-2 space-y-1">
                      {dropdownData[item][0].items.map((sub) => (
                        <li key={sub}>
                          <Link href={generateLink(item, '', sub)} className="text-sm text-gray-600 hover:text-indigo-500">
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
