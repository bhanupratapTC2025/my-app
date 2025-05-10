// 'use client';
// import { useEffect, useState } from 'react';
// import ProductImages from '@/components/ProductDetails/ProductImages';
// import ProductInfo from '@/components/ProductDetails/ProductInfo';
// import SimilarProducts from '@/components/ProductDetails/SimilarProducts';
// import productsData from '@/components/data/products.json';

// export default function ProductDetails({ params }) {
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedImage, setSelectedImage] = useState(0);

//   useEffect(() => {
//     // Find product by ID from all categories
//     let foundProduct = null;
//     for (const category in productsData) {
//       foundProduct = productsData[category].find(p => p.id === params.id);
//       if (foundProduct) break;
//     }

//     setProduct(foundProduct);
//     setLoading(false);
//   }, [params.id]);

//   if (loading) {
//     return <div className="container mx-auto py-8">Loading...</div>;
//   }

//   if (!product) {
//     return <div className="container mx-auto py-8">Product not found</div>;
//   }

//   return (
//     <div className="container mx-auto py-8 px-4">
//       {/* Main Product Section */}
//       <div className="flex flex-col md:flex-row gap-8 mb-12">
//         {/* Product Images - Left Side */}
//         <div className="md:w-1/2">
//           <ProductImages
//             images={product.images || [product.image]}
//             selectedImage={selectedImage}
//             setSelectedImage={setSelectedImage}
//           />
//         </div>

//         {/* Product Info - Right Side */}
//         <div className="md:w-1/2">
//           <ProductInfo product={product} />
//         </div>
//       </div>

//       {/* Similar Products Section */}
//       <SimilarProducts currentProductId={product.id} category={product.category} />
//     </div>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import ProductImages from "@/components/ProductDetails/ProductImages";
import ProductInfo from "@/components/ProductDetails/ProductInfo";
import SimilarProducts from "@/components/ProductDetails/SimilarProducts";
import productsData from "@/data/products.json";

export default function ProductPage({ params }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find product across all categories
    let foundProduct = null;
    for (const category in productsData) {
      foundProduct = productsData[category].find((p) => p.id === params.id);
      if (foundProduct) break;
    }
    setProduct(foundProduct);
    setLoading(false);
  }, [params.id]);

  if (loading) return <div className="container py-8">Loading...</div>;
  if (!product) return <div className="container py-8">Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <ProductImages images={product.images} />
        </div>
        <div className="md:w-1/2">
          <ProductInfo product={product} />
        </div>
      </div>
      <SimilarProducts currentProduct={product} />
    </div>
  );
}
