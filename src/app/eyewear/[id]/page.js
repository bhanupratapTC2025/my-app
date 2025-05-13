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

import { Suspense } from "react";
import ProductImages from "@/components/ProductDetails/ProductImages";
import ProductInfo from "@/components/ProductDetails/ProductInfo";
import SimilarProducts from "@/components/ProductDetails/SimilarProducts";
import LoadingSpinner from "@/components/LoadingSpinner";

async function getProduct(id) {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 100));

  // Import inside function for dynamic fetching
  const { default: productsData } = await import(
    "@/components/data/products.json"
  );

  // Find product across all categories
  for (const category in productsData) {
    const product = productsData[category].find(
      (p) => String(p.id) === String(id)
    );

    if (product) return product;
  }
  return null;
}

export default function ProductPage({ params }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<LoadingSpinner />}>
        <ProductContent id={params.id} />
      </Suspense>
    </div>
  );
}

async function ProductContent({ id }) {
  const product = await getProduct(id);

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/2">
          <ProductImages
            images={
              Array.isArray(product.images)
                ? product.images
                : [product.image || "/fallback.jpg"]
            }
          />
        </div>
        <div className="md:w-1/2">
          <ProductInfo product={product} />
        </div>
      </div>
      <SimilarProducts currentProduct={product} />
    </>
  );
}
