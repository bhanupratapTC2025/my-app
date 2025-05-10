// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import { FaHeart, FaRegHeart } from "react-icons/fa";

// const frameStyleOptions = ["Rimmed", "Semi-Rimmed", "Rimless"];
// const frameColorOptions = ["Black", "Silver", "Gold"];
// const lensColorOptions = ["Blue", "Green", "Brown"];
// const frameMaterialOptions = ["Metal", "Plastic", "Wood"];
// const brandOptions = ["RayBan", "Oakley", "Gucci"];
// const genderOptions = ["Men", "Women", "Unisex"];
// const frameshapeOptions = [
//   { name: "Polarized", image: "/images/polarized.jpg" },
//   { name: "Photochromic", image: "/images/photochromic.jpg" },
//   { name: "UV Protection", image: "/images/uv-protection.jpg" },
// ];

// const allProducts = [
//   {
//     id: 1,
//     name: "RayBan Classic",
//     category: "Eyewear",
//     style: "Rimmed",
//     shape: "Polarized",
//     color: "Black",
//     lens: "Blue",
//     material: "Metal",
//     brand: "RayBan",
//     gender: "Men",
//     price: 4500,
//     image: "/images/rayban.jpg",
//   },
//   {
//     id: 2,
//     name: "Gucci Elegant",
//     category: "Eyewear",
//     style: "Semi-Rimmed",
//     shape: "Photochromic",
//     color: "Gold",
//     lens: "Green",
//     material: "Plastic",
//     brand: "Gucci",
//     gender: "Women",
//     price: 6200,
//     image: "/images/gucci.jpg",
//   },
//   {
//     id: 4,
//     name: "Oakley Pro",
//     category: "Eyewear",
//     style: "Rimless",
//     shape: "UV Protection",
//     color: "Silver",
//     lens: "Brown",
//     material: "Wood",
//     brand: "Oakley",
//     gender: "Unisex",
//     price: 5000,
//     image: "/images/oakley.jpg",
//   },
//   {
//     id: 5,
//     name: "Oakley Pro",
//     category: "Eyewear",
//     style: "Rimless",
//     shape: "UV Protection",
//     color: "Silver",
//     lens: "Brown",
//     material: "Wood",
//     brand: "Oakley",
//     gender: "Unisex",
//     price: 5000,
//     image: "/images/oakley.jpg",
//   },
//   {
//     id: 6,
//     name: "Oakley Pro",
//     category: "Eyewear",
//     style: "Rimless",
//     shape: "UV Protection",
//     color: "Silver",
//     lens: "Brown",
//     material: "Wood",
//     brand: "Oakley",
//     gender: "Unisex",
//     price: 5000,
//     image: "/images/oakley.jpg",
//   },
//   {
//     id: 7,
//     name: "Oakley Pro",
//     category: "Eyewear",
//     style: "Rimless",
//     shape: "UV Protection",
//     color: "Silver",
//     lens: "Brown",
//     material: "Wood",
//     brand: "Oakley",
//     gender: "Unisex",
//     price: 5000,
//     image: "/images/oakley.jpg",
//   },
//   {
//     id: 8,
//     name: "Oakley Pro",
//     category: "Eyewear",
//     style: "Rimless",
//     shape: "UV Protection",
//     color: "Silver",
//     lens: "Brown",
//     material: "Wood",
//     brand: "Oakley",
//     gender: "Unisex",
//     price: 5000,
//     image: "/images/oakley.jpg",
//   },
// ];

// export default function ProductFilter() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [liked, setLiked] = useState([]);

//   const [filters, setFilters] = useState({
//     style: searchParams.getAll("style"),
//     color: searchParams.getAll("color"),
//     lens: searchParams.getAll("lens"),
//     material: searchParams.getAll("material"),
//     brand: searchParams.getAll("brand"),
//     gender: searchParams.getAll("gender"),
//     shape: searchParams.getAll("shape"),
//   });

//   const handleFilterChange = (key, value) => {
//     const updated = [...filters[key]];
//     const index = updated.indexOf(value);

//     if (index > -1) updated.splice(index, 1);
//     else updated.push(value);

//     setFilters((prev) => ({ ...prev, [key]: updated }));
//   };

//   const resetFilters = () => {
//     setFilters({
//       style: [],
//       color: [],
//       lens: [],
//       material: [],
//       brand: [],
//       gender: [],
//       shape: [],
//     });
//   };

//   const toggleLike = (id) => {
//     setLiked((prev) =>
//       prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
//     );
//   };

//   useEffect(() => {
//     const newParams = new URLSearchParams();
//     Object.entries(filters).forEach(([key, values]) => {
//       values.forEach((val) => newParams.append(key, val));
//     });
//     router.replace(`?${newParams.toString()}`, { shallow: true });
//   }, [filters]);

//   useEffect(() => {
//     setFilters({
//       style: searchParams.getAll("style"),
//       color: searchParams.getAll("color"),
//       lens: searchParams.getAll("lens"),
//       material: searchParams.getAll("material"),
//       brand: searchParams.getAll("brand"),
//       gender: searchParams.getAll("gender"),
//       shape: searchParams.getAll("shape"),
//     });
//   }, [searchParams]);

//   const matchedProducts = allProducts.filter((p) => {
//     return (
//       (filters.style.length === 0 || filters.style.includes(p.style)) &&
//       (filters.color.length === 0 || filters.color.includes(p.color)) &&
//       (filters.lens.length === 0 || filters.lens.includes(p.lens)) &&
//       (filters.material.length === 0 ||
//         filters.material.includes(p.material)) &&
//       (filters.brand.length === 0 || filters.brand.includes(p.brand)) &&
//       (filters.gender.length === 0 || filters.gender.includes(p.gender)) &&
//       (filters.shape.length === 0 || filters.shape.includes(p.shape))
//     );
//   });

//   const unmatchedProducts = allProducts.filter(
//     (p) => !matchedProducts.includes(p)
//   );

//   const renderProductCard = (product, dimmed = false) => (
//     <div
//       key={product.id}
//       className={`border p-4 rounded shadow relative transition ${
//         dimmed ? "opacity-50 bg-gray-50" : "bg-white hover:shadow-lg"
//       }`}
//     >
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-32 object-cover rounded mb-2"
//       />
//       <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
//       <p className="text-sm capitalize text-gray-600 mb-2">
//         {product.category} - ₹{product.price}
//       </p>
//       <button
//         onClick={() => toggleLike(product.id)}
//         className="absolute top-2 right-2 text-red-500 cursor-pointer"
//       >
//         {liked.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
//       </button>
//     </div>
//   );

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row">
//       <aside className="w-full md:w-72 p-4 bg-gray-100 border-r sticky top-0 md:h-screen overflow-y-auto">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="font-bold text-xl">Filters</h2>
//           <button
//             onClick={resetFilters}
//             className="text-sm text-blue-600 hover:underline"
//           >
//             Reset
//           </button>
//         </div>

//         {[
//           {
//             label: "Frame Style",
//             key: "style",
//             options: frameStyleOptions,
//           },
//           {
//             label: "Frame Color",
//             key: "color",
//             options: frameColorOptions,
//           },
//           {
//             label: "Lens Color",
//             key: "lens",
//             options: lensColorOptions,
//           },
//           {
//             label: "Frame Material",
//             key: "material",
//             options: frameMaterialOptions,
//           },
//           {
//             label: "Brands",
//             key: "brand",
//             options: brandOptions,
//           },
//           {
//             label: "Gender",
//             key: "gender",
//             options: genderOptions,
//           },
//         ].map(({ label, key, options }) => (
//           <details key={key} className="mb-4">
//             <summary className="font-semibold cursor-pointer">{label}</summary>
//             <div className="mt-2 ml-2">
//               {options.map((option) => (
//                 <label key={option} className="block mb-2">
//                   <input
//                     type="checkbox"
//                     checked={filters[key].includes(option)}
//                     onChange={() => handleFilterChange(key, option)}
//                     className="mr-2"
//                   />
//                   <span className="capitalize">{option}</span>
//                 </label>
//               ))}
//             </div>
//           </details>
//         ))}

//         <details className="mb-4">
//           <summary className="font-semibold cursor-pointer">
//             Frame Shape
//           </summary>
//           <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {frameshapeOptions.map(({ name, image }) => (
//               <label
//                 key={name}
//                 className={`cursor-pointer border rounded overflow-hidden shadow-sm hover:shadow-md transition relative ${
//                   filters.shape.includes(name) ? "ring-2 ring-blue-500" : ""
//                 }`}
//               >
//                 <input
//                   type="checkbox"
//                   checked={filters.shape.includes(name)}
//                   onChange={() => handleFilterChange("shape", name)}
//                   className="absolute top-2 right-2 z-10 w-4 h-4"
//                 />
//                 <img
//                   src={image}
//                   alt={name}
//                   className="w-full h-24 object-cover"
//                 />
//                 <div className="p-2 text-center capitalize font-medium">
//                   {name}
//                 </div>
//               </label>
//             ))}
//           </div>
//         </details>
//       </aside>

//       <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {matchedProducts.map((product) => renderProductCard(product))}
//         {unmatchedProducts.length > 0 && (
//           <>
//             <div className="col-span-full text-gray-600 mt-8 font-semibold border-t pt-4">
//               Other Products
//             </div>
//             {unmatchedProducts.map((product) =>
//               renderProductCard(product, true)
//             )}
//           </>
//         )}
//       </main>
//     </div>
//   );
// }




"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const frameStyleOptions = ["Rimmed", "Semi-Rimmed", "Rimless"];
const frameColorOptions = ["Black", "Silver", "Gold"];
const lensColorOptions = ["Blue", "Green", "Brown"];
const frameMaterialOptions = ["Metal", "Plastic", "Wood"];
const brandOptions = ["RayBan", "Oakley", "Gucci"];
const genderOptions = ["Men", "Women", "Unisex"];
const frameshapeOptions = [
  { name: "Polarized", image: "/images/polarized.jpg" },
  { name: "Photochromic", image: "/images/photochromic.jpg" },
  { name: "UV Protection", image: "/images/uv-protection.jpg" },
];

const allProducts = [
  {
    id: 1,
    name: "RayBan Classic",
    category: "Eyewear",
    style: "Rimmed",
    shape: "Polarized",
    color: "Black",
    lens: "Blue",
    material: "Metal",
    brand: "RayBan",
    gender: "Men",
    price: 4500,
    image: "/images/rayban.jpg",
  },
  {
    id: 2,
    name: "Gucci Elegant",
    category: "Eyewear",
    style: "Semi-Rimmed",
    shape: "Photochromic",
    color: "Gold",
    lens: "Green",
    material: "Plastic",
    brand: "Gucci",
    gender: "Women",
    price: 6200,
    image: "/images/gucci.jpg",
  },
  {
    id: 4,
    name: "Oakley Pro",
    category: "Eyewear",
    style: "Rimless",
    shape: "UV Protection",
    color: "Silver",
    lens: "Brown",
    material: "Wood",
    brand: "Oakley",
    gender: "Unisex",
    price: 5000,
    image: "/images/oakley.jpg",
  },
  {
    id: 5,
    name: "Oakley Pro",
    category: "Sunglasses",
    style: "Rimless",
    shape: "UV Protection",
    color: "Silver",
    lens: "Brown",
    material: "Wood",
    brand: "Oakley",
    gender: "Unisex",
    price: 5000,
    image: "/images/oakley.jpg",
  },
  {
    id: 6,
    name: "Gucci Bold",
    category: "Sunglasses",
    style: "Rimmed",
    shape: "Polarized",
    color: "Black",
    lens: "Blue",
    material: "Plastic",
    brand: "Gucci",
    gender: "Women",
    price: 7500,
    image: "/images/gucci.jpg",
  },
];

export default function ProductFilter({ category }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [liked, setLiked] = useState([]);

  const [filters, setFilters] = useState({
    style: searchParams.getAll("style"),
    color: searchParams.getAll("color"),
    lens: searchParams.getAll("lens"),
    material: searchParams.getAll("material"),
    brand: searchParams.getAll("brand"),
    gender: searchParams.getAll("gender"),
    shape: searchParams.getAll("shape"),
  });

  const handleFilterChange = (key, value) => {
    const updated = [...filters[key]];
    const index = updated.indexOf(value);

    if (index > -1) updated.splice(index, 1);
    else updated.push(value);

    setFilters((prev) => ({ ...prev, [key]: updated }));
  };

  const resetFilters = () => {
    setFilters({
      style: [],
      color: [],
      lens: [],
      material: [],
      brand: [],
      gender: [],
      shape: [],
    });
  };

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const newParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, values]) => {
      values.forEach((val) => newParams.append(key, val));
    });
    router.replace(`?${newParams.toString()}`, { shallow: true });
  }, [filters]);

  useEffect(() => {
    setFilters({
      style: searchParams.getAll("style"),
      color: searchParams.getAll("color"),
      lens: searchParams.getAll("lens"),
      material: searchParams.getAll("material"),
      brand: searchParams.getAll("brand"),
      gender: searchParams.getAll("gender"),
      shape: searchParams.getAll("shape"),
    });
  }, [searchParams]);

  const matchedProducts = allProducts.filter((p) => {
    if (!category || !p.category) return false;

    return (
      p.category.toLowerCase() === category.toLowerCase() &&
      (filters.style.length === 0 || filters.style.includes(p.style)) &&
      (filters.color.length === 0 || filters.color.includes(p.color)) &&
      (filters.lens.length === 0 || filters.lens.includes(p.lens)) &&
      (filters.material.length === 0 ||
        filters.material.includes(p.material)) &&
      (filters.brand.length === 0 || filters.brand.includes(p.brand)) &&
      (filters.gender.length === 0 || filters.gender.includes(p.gender)) &&
      (filters.shape.length === 0 || filters.shape.includes(p.shape))
    );
  });

  const unmatchedProducts = allProducts.filter(
    (p) =>
      category &&
      p.category?.toLowerCase() === category.toLowerCase() &&
      !matchedProducts.includes(p)
  );

  const renderProductCard = (product, dimmed = false) => (
    <div
      key={product.id}
      className={`border p-4 rounded shadow relative transition ${
        dimmed ? "opacity-50 bg-gray-50" : "bg-white hover:shadow-lg"
      }`}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-32 object-cover rounded mb-2"
      />
      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
      <p className="text-sm capitalize text-gray-600 mb-2">
        {product.category} - ₹{product.price}
      </p>
      <button
        onClick={() => toggleLike(product.id)}
        className="absolute top-2 right-2 text-red-500 cursor-pointer"
      >
        {liked.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <aside className="w-full md:w-72 p-4 bg-gray-100 border-r sticky top-0 md:h-screen overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-bold text-xl">Filters</h2>
          <button
            onClick={resetFilters}
            className="text-sm text-blue-600 hover:underline"
          >
            Reset
          </button>
        </div>

        {[
          { label: "Frame Style", key: "style", options: frameStyleOptions },
          { label: "Frame Color", key: "color", options: frameColorOptions },
          { label: "Lens Color", key: "lens", options: lensColorOptions },
          {
            label: "Frame Material",
            key: "material",
            options: frameMaterialOptions,
          },
          { label: "Brands", key: "brand", options: brandOptions },
          { label: "Gender", key: "gender", options: genderOptions },
        ].map(({ label, key, options }) => (
          <details key={key} className="mb-4">
            <summary className="font-semibold cursor-pointer">{label}</summary>
            <div className="mt-2 ml-2">
              {options.map((option) => (
                <label key={option} className="block mb-2">
                  <input
                    type="checkbox"
                    checked={filters[key].includes(option)}
                    onChange={() => handleFilterChange(key, option)}
                    className="mr-2"
                  />
                  <span className="capitalize">{option}</span>
                </label>
              ))}
            </div>
          </details>
        ))}

        <details className="mb-4">
          <summary className="font-semibold cursor-pointer">
            Frame Shape
          </summary>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {frameshapeOptions.map(({ name, image }) => (
              <label
                key={name}
                className={`cursor-pointer border rounded overflow-hidden shadow-sm hover:shadow-md transition relative ${
                  filters.shape.includes(name) ? "ring-2 ring-blue-500" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={filters.shape.includes(name)}
                  onChange={() => handleFilterChange("shape", name)}
                  className="absolute top-2 right-2 z-10 w-4 h-4"
                />
                <img
                  src={image}
                  alt={name}
                  className="w-full h-24 object-cover"
                />
                <div className="p-2 text-center capitalize font-medium">
                  {name}
                </div>
              </label>
            ))}
          </div>
        </details>
      </aside>

      <main className="flex-1 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {matchedProducts.map((product) => renderProductCard(product))}
        {unmatchedProducts.length > 0 && (
          <>
            <div className="col-span-full text-gray-600 mt-8 font-semibold border-t pt-4">
              Other Products
            </div>
            {unmatchedProducts.map((product) =>
              renderProductCard(product, true)
            )}
          </>
        )}
      </main>
    </div>
  );
}
