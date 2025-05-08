// 'use client';
// import { useState } from 'react';
// import Link from 'next/link';
// import { ShoppingCart } from 'lucide-react';

// const dropdownData = {
//     EYEGLASSES: [
//         { heading: 'GENDER', items: ['All', 'Men', 'Women', 'Kids'] },
//         { heading: 'COLLECTION', items: ['EyeX', 'Tees', 'Signature', 'Spiderman', 'Hipster'] },
//         { heading: 'SHAPE', items: ['Rectangle', 'Round', 'Cat Eye', 'Geometric', 'Wayfarer'] },
//         { heading: 'STYLE', items: ['Rimmed', 'Semi-Rimmed', 'Rimless'] },
//         {
//             heading: 'TOP BRANDS',
//             items: [
//                 'Zefr', 'Titan', 'Fastrack', 'Rayban', 'Dash For Kids',
//                 'Aristo By Tanishq', 'Vogue Eyewear', 'Tommy Hilfiger',
//                 'Emporio Armani', 'ZEISS',
//             ],
//         },
//         {
//             heading: 'Featured Brands',
//             items: [
//                 'Bolon', 'Oakley', 'Carrera', 'Stepper', 'Burberry',
//                 'Tom Ford', 'Ted Baker', 'Silhouette', 'Swarovski', 'Mont Blanc', 'Calvin Klein',
//             ],
//         },
//     ],
//     SUNGLASSES: [
//         { heading: 'GENDER', items: ['All', 'Men', 'Women', 'Kids'] },
//         { heading: 'STYLE', items: ['Mirrored', 'Tinted', 'UV Protection', 'Polarized'] },
//         { heading: 'USAGE', items: ['Regular', 'Power'] },
//         { heading: 'Collection', items: ['Smart Sunglasses', 'Donald', 'Glow Up', 'Whiplash', 'Vivid Geometry'] },
//         { heading: 'SHAPE', items: ['Aviator', 'Wayfarer', 'Wraparound', 'Rectangle', 'Round'] },
//         {
//             heading: 'BRANDS',
//             items: [
//                 'Titan', 'Fastrack', 'Tees By Fastrack', 'Dash For Kids', 'Vogue Eyewear',
//                 'Emporio Armani', 'Rayban', 'Burberry', 'Maui Jim', 'Ted Baker', 'Oakley',
//             ],
//         },
//     ],
//     ACCESSORIES: [
//         {
//             heading: '',
//             items: [
//                 'SWIMMING GOGGLES', 'CONTACT LENS SOLUTION', 'CHARGER',
//                 'SOLAR ECLIPSE GOGGLES', 'WIPES', 'FACE MASKS',
//                 'BINOCULARS', 'PACKAGING CASE', 'CHAINS',
//             ],
//         },
//     ],
//     BRANDS: [
//         {
//             heading: '',
//             items: [
//                 'TITAN', 'FASTRACK', 'ZEFR', 'VOGUE EYEWEAR', 'RAY BAN',
//                 'MAUI JIM', 'TED-BAKER', 'TEES BY FASTRACK',
//                 'ACUVUE BY J&J', 'BAUSCH AND LOMB', 'ZEISS',
//             ],
//         },
//     ],
// };

// const navItems = [
//     'EYEGLASSES',
//     'SUNGLASSES',
//     'POWER SUNGLASSES',
//     'COMPUTER GLASSES',
//     'HEARING AIDS',
//     'CONTACT LENSES',
//     'ACCESSORIES',
//     'BRANDS',
// ];

// const Navbar = () => {
//     const [openDropdown, setOpenDropdown] = useState(null);
//     const [cartCount, setCartCount] = useState(2); // Example count

//     const generateLink = (category, heading, item) => {
//         if (!category || !heading || !item) return "#";
//         return `/${category.toLowerCase()}/${heading.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`;
//     };


//     return (
//         <nav className="bg-white shadow  w-full z-50">

//             <div className="max-w-7xl mx-auto px-2 py-3 flex items-center justify-between">
//                 {/* Logo */}
//                 <Link href="/" className="text-xl font-bold text-indigo-700">
//                     Techcherry <span className="text-gray-800">Eye+</span>
//                 </Link>

//                 {/* Center Nav */}
//                 <div className="hidden lg:flex space-x-4">
//                     {navItems.map((item) => (
//                         <div
//                             key={item}
//                             className="relative"
//                             onMouseEnter={() => dropdownData[item] && setOpenDropdown(item)}
//                             onMouseLeave={() => dropdownData[item] && setOpenDropdown(null)}
//                         >
//                             <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-gray-700 hover:text-indigo-600">
//                                 {item}
//                             </Link>


//                             {/* Dropdown */}
//                             {dropdownData[item] && openDropdown === item && (
//                                 <div
//                                     className={`absolute top-8 left-0  mt-[-10] bg-white shadow-lg p-4 z-50
//                                     ${item === 'BRANDS' || item === 'ACCESSORIES'
//                                             ? 'w-45' // Smaller width for BRANDS & ACCESSORIES
//                                             : dropdownData[item][0].heading
//                                                 ? 'grid grid-cols-3 gap-6 w-[600px]' // Normal grid
//                                                 : 'w-64' // Fallback
//                                         }`}
//                                 >
//                                     {dropdownData[item][0].heading ? (
//                                         dropdownData[item].map((cat) => (
//                                             <div key={cat.heading}>
//                                                 <h4 className="text-indigo-700 font-semibold mb-2">{cat.heading}</h4>
//                                                 <ul className="space-y-1">
//                                                     {cat.items.map((sub) => (
//                                                         <li key={sub}>
//                                                             <Link href={generateLink(item, sub)} className="text-gray-600 text-sm hover:text-indigo-500">
//                                                                 {sub}
//                                                             </Link>
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         ))
//                                     ) : (
//                                         <ul className="space-y-1">
//                                             {dropdownData[item][0].items.map((sub) => (
//                                                 <li key={sub}>
//                                                     <Link href={generateLink(item, sub)} className="text-gray-600 text-sm hover:text-indigo-500 ">
//                                                         {sub}
//                                                     </Link>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                     )}
//                                 </div>
//                             )}
//                         </div>
//                     ))}
//                 </div>

//                 {/* Cart Icon */}
//                 <div className="relative">
//                     <Link href="/cart">
//                         <ShoppingCart className="text-gray-700" size={24} />
//                         {cartCount > 0 && (
//                             <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                                 {cartCount}
//                             </span>
//                         )}
//                     </Link>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;





'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';

const dropdownData = {
  EYEGLASSES: [
    { heading: 'GENDER', items: ['All', 'Men', 'Women', 'Kids'] },
    { heading: 'COLLECTION', items: ['EyeX', 'Tees', 'Signature', 'Spiderman', 'Hipster'] },
    { heading: 'SHAPE', items: ['Rectangle', 'Round', 'Cat Eye', 'Geometric', 'Wayfarer'] },
    { heading: 'STYLE', items: ['Rimmed', 'Semi-Rimmed', 'Rimless'] },
    {
      heading: 'TOP BRANDS',
      items: ['Zefr', 'Titan', 'Fastrack', 'Rayban', 'Dash For Kids', 'Aristo By Tanishq', 'Vogue Eyewear', 'Tommy Hilfiger', 'Emporio Armani', 'ZEISS'],
    },
    {
      heading: 'Featured Brands',
      items: ['Bolon', 'Oakley', 'Carrera', 'Stepper', 'Burberry', 'Tom Ford', 'Ted Baker', 'Silhouette', 'Swarovski', 'Mont Blanc', 'Calvin Klein'],
    },
  ],
  SUNGLASSES: [
    { heading: 'GENDER', items: ['All', 'Men', 'Women', 'Kids'] },
    { heading: 'STYLE', items: ['Mirrored', 'Tinted', 'UV Protection', 'Polarized'] },
    { heading: 'USAGE', items: ['Regular', 'Power'] },
    { heading: 'Collection', items: ['Smart Sunglasses', 'Donald', 'Glow Up', 'Whiplash', 'Vivid Geometry'] },
    { heading: 'SHAPE', items: ['Aviator', 'Wayfarer', 'Wraparound', 'Rectangle', 'Round'] },
    {
      heading: 'BRANDS',
      items: ['Titan', 'Fastrack', 'Tees By Fastrack', 'Dash For Kids', 'Vogue Eyewear', 'Emporio Armani', 'Rayban', 'Burberry', 'Maui Jim', 'Ted Baker', 'Oakley'],
    },
  ],
  ACCESSORIES: [
    {
      heading: '',
      items: ['SWIMMING GOGGLES', 'CONTACT LENS SOLUTION', 'CHARGER', 'SOLAR ECLIPSE GOGGLES', 'WIPES', 'FACE MASKS', 'BINOCULARS', 'PACKAGING CASE', 'CHAINS'],
    },
  ],
  BRANDS: [
    {
      heading: '',
      items: ['TITAN', 'FASTRACK', 'ZEFR', 'VOGUE EYEWEAR', 'RAY BAN', 'MAUI JIM', 'TED-BAKER', 'TEES BY FASTRACK', 'ACUVUE BY J&J', 'BAUSCH AND LOMB', 'ZEISS'],
    },
  ],
};

const navItems = ['EYEGLASSES', 'SUNGLASSES', 'POWER SUNGLASSES', 'COMPUTER GLASSES', 'HEARING AIDS', 'CONTACT LENSES', 'ACCESSORIES', 'BRANDS'];

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [cartCount, setCartCount] = useState(2);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const generateLink = (category, heading, item) => {
    const cat = category?.toLowerCase().replace(/\s+/g, '-');
    const head = heading?.toLowerCase().replace(/\s+/g, '-');
    const it = item?.toLowerCase().replace(/\s+/g, '-');
    return `/${cat}/${head}/${it}`;
  };

  return (
    <nav className="bg-white shadow w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-indigo-700">
          Techcherry <span className="text-gray-800">Eye+</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-4">
          {navItems.map((item) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => dropdownData[item] && setOpenDropdown(item)}
              onMouseLeave={() => dropdownData[item] && setOpenDropdown(null)}
            >
              <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-gray-700 hover:text-indigo-600">
                {item}
              </Link>

              {dropdownData[item] && openDropdown === item && (
                <div
                  className={`absolute top-full left-0 mt-2 bg-white shadow-lg p-4 z-50 
                    ${item === 'BRANDS' || item === 'ACCESSORIES' ? 'w-48' :
                      dropdownData[item][0].heading ? 'grid grid-cols-3 gap-6 w-[600px]' : 'w-54'}`}
                >
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

        {/* Cart Icon */}
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

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4">
          {navItems.map((item) => (
            <div key={item} className="mb-2">
              <div
                className="flex justify-between items-center text-gray-700 font-medium"
                onClick={() => setOpenDropdown(openDropdown === item ? null : item)}
              >
                <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</Link>
                {dropdownData[item] && (
                  <span>{openDropdown === item ? '-' : '+'}</span>
                )}
              </div>

              {dropdownData[item] && openDropdown === item && (
                <div className="pl-4 mt-2">
                  {dropdownData[item][0].heading ? (
                    dropdownData[item].map((cat) => (
                      <div key={cat.heading} className="mb-2">
                        <h4 className="text-indigo-700 font-semibold">{cat.heading}</h4>
                        <ul className="pl-2">
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
                    <ul className="pl-2">
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
