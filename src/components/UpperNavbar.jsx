// 'use client';
// import { useState } from 'react';
// import { ChevronDown, Menu, Search } from 'lucide-react';

// // Menu configuration as an array
// const menuItems = [
//     {
//         label: 'Eye Testing',
//         dropdown: [
//             'Digital Eye Strain Test',
//             'Online Eye Screening',
//             'Instore Free Eye Test',
//             'Book Appointment',
//         ],
//     },
//     { label: 'Hearing Test' },
//     { label: 'Sign In' },
//     { label: 'Track Order' },
//     { label: 'Find A Store' },
// ];

// const UpperNavbar = () => {
//     const [openDropdown, setOpenDropdown] = useState(null);

//     return (
//         <div className="bg-white shadow-sm border-b border-gray-200 px-4 md:px-12 py-2 flex items-center justify-between text-gray-700 text-sm font-medium">

//             {/* Left: Any Query */}
//             <div className="hidden sm:block">
//                 <span className="text-blue-600 hover:underline cursor-pointer">Any Query?</span>
//             </div>

//             <div className="flex-1 mx-4 sm:mx-8">
//                 <div className="relative flex items-center w-full max-w-xs sm:max-w-md mx-auto transition-all rounded-full border border-gray-300 focus-within:ring-2 focus-within:ring-blue-400">
//                     <input
//                         type="text"
//                         placeholder="Search eyewear, lenses, etc."
//                         className="flex-1 px-4 py-1.5 rounded-l-full focus:outline-none"
//                     />
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-full transition-all">
//                         <Search className="w-6 h-4" />
//                     </button>
//                 </div>
//             </div>

//             {/* Right Side: Menu Items */}
//             <div className="hidden md:flex items-center space-x-6">
//                 {menuItems.map((item, index) => (
//                     <div
//                         key={index}
//                         className="relative "
//                         onMouseEnter={() => item.dropdown && setOpenDropdown(index)}
//                         onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
//                     >
//                         <button className="flex items-center hover:text-blue-600">
//                             {item.label}
//                             {item.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
//                         </button>

//                         {/* Dropdown menu */}
//                         {item.dropdown && openDropdown === index && (
//                             <div className="absolute right-0  border bg-white  rounded-md shadow-lg z-50 w-56">
//                                 <ul className="py-2 text-left">
//                                     {item.dropdown.map((option, optIdx) => (
//                                         <li
//                                             key={optIdx}
//                                             className="px-4 py-2 hover:bg-blue-50 cursor-pointer"
//                                         >
//                                             {option}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>

//             {/* Mobile Menu Icon */}
//             <div className="md:hidden">
//                 <Menu className="w-6 h-6 text-gray-700" />
//             </div>
//         </div>
//     );
// };

// export default UpperNavbar;



'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, Search } from 'lucide-react';

// Menu configuration
const menuItems = [
  {
    label: 'Eye Testing',
    dropdown: [
      'Digital Eye Strain Test',
      'Online Eye Screening',
      'Instore Free Eye Test',
      'Book Appointment',
    ],
  },
  { label: 'Hearing Test' },
  { label: 'Sign In' },
  { label: 'Track Order' },
  { label: 'Find A Store' },
];

// Generate dynamic route
const generateLink = ( heading, item) => {
  
  const head = heading?.toLowerCase().replace(/\s+/g, '-');
  const it = item?.toLowerCase().replace(/\s+/g, '-');
  return `/${head}/${it}`;
};

const slugify = (text) => text?.toLowerCase().replace(/\s+/g, '-');

const UpperNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-4 md:px-12 py-2 flex items-center justify-between text-gray-700 text-sm font-medium">
      
      {/* Left: Any Query */}
      <div className="hidden sm:block">
        <span className="text-blue-600 hover:underline cursor-pointer">Any Query?</span>
      </div>

      {/* Center: Search Box */}
      <div className="flex-1 mx-4 sm:mx-8">
        <div className="relative flex items-center w-full max-w-xs sm:max-w-md mx-auto transition-all rounded-full border border-gray-300 focus-within:ring-2 focus-within:ring-blue-400">
          <input
            type="text"
            placeholder="Search eyewear, lenses, etc."
            className="flex-1 px-4 py-1.5 rounded-l-full focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-full transition-all">
            <Search className="w-6 h-4" />
          </button>
        </div>
      </div>

      {/* Right Side: Menu Items */}
      <div className="hidden md:flex items-center space-x-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => item.dropdown && setOpenDropdown(index)}
            onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
          >
            {/* Parent item */}
            {item.dropdown ? (
              <button className="flex items-center hover:text-blue-600">
                {item.label}
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
            ) : (
              <Link href={`/${slugify(item.label)}`} className="hover:text-blue-600">
                {item.label}
              </Link>
            )}

            {/* Dropdown menu */}
            {item.dropdown && openDropdown === index && (
              <div className="absolute right-0 border bg-white rounded-md shadow-lg z-50 w-56">
                <ul className="py-2 text-left">
                  {item.dropdown.map((option, optIdx) => (
                    <li key={optIdx}>
                      <Link
                       href={generateLink(item.label, option)}
                        className="block px-4 py-2 hover:bg-blue-50"
                      >
                        {option}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <Menu className="w-6 h-6 text-gray-700" />
      </div>
    </div>
  );
};

export default UpperNavbar;

