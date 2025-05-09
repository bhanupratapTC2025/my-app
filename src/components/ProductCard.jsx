export default function ProductCard({ product }) {
    return (
        <div className="border p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h3 className="mt-2 font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.brand}</p>
            <p className="font-bold text-blue-600">₹{product.price}</p>
        </div>
    );
}
