// components/AllProductSections.jsx
import Image from 'next/image';

const data = [
  {
    title: 'Men',
    imageSrc: '/product-left.jpg',
    products: [
      { id: 1, name: 'Men Classic', image: '/product.jpg', price: 999, description: 'Classic style.' },
      { id: 2, name: 'Men Sport', image: '/product.jpg', price: 1299, description: 'Sporty and strong.' },
      { id: 3, name: 'Men Leather', image: '/product.jpg', price: 1399, description: 'Elegant leather.' },
    ],
  },
  {
    title: 'Women',
    imageSrc: '/product-left.jpg',
    products: [
      { id: 1, name: 'Women Elegant', image: '/product.jpg', price: 899, description: 'Chic and modern.' },
      { id: 2, name: 'Women Gold', image: '/product.jpg', price: 1199, description: 'Golden shine.' },
    ],
  },
  {
    title: 'Kids',
    imageSrc: '/product-left.jpg',
    products: [
      { id: 1, name: 'Kids Fun Watch', image: '/product.jpg', price: 499, description: 'Colorful & fun.' },
      { id: 2, name: 'Kids School Time', image: '/product.jpg', price: 599, description: 'Perfect for school.' },
    ],
  },
  {
    title: 'Unisex',
    imageSrc: '/product-left.jpg',
    products: [
      { id: 1, name: 'Unisex Minimal', image: '/product.jpg', price: 1099, description: 'Sleek & simple.' },
      { id: 2, name: 'Unisex Sport', image: '/product.jpg', price: 1299, description: 'For everyone.' },
    ],
  },
];

const FastrackAll = () => {
  return (
    <main className="space-y-20 p-4">
      {data.map((section, index) => (
        <section
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 === 1 ? 'md:flex-row-reverse' : ''
          } items-start justify-between gap-8 bg-white p-6 rounded-lg shadow-md`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <Image
              src={section.imageSrc}
              alt={`${section.title} Image`}
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>

          {/* Product Cards */}
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {section.products.map((product) => (
              <div
                key={product.id}
                className="border rounded-xl p-4 shadow-md bg-gray-50 flex flex-col items-center"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={150}
                  className="rounded-md"
                />
                <h2 className="text-lg font-semibold mt-3 text-center">{product.name}</h2>
                <p className="text-sm text-gray-600 text-center mt-1">{product.description}</p>
                <div className="flex items-center justify-between mt-3 w-full px-4">
                  <span className="text-green-600 font-bold text-base">₹{product.price}</span>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default FastrackAll;
