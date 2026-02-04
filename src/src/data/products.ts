import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">Shop Itineraries</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            key={product.slug}
            to={`/products/${product.slug}`}
            className="border rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={product.coverImage}
              className="h-64 w-full object-cover"
            />

            <div className="p-5">
              <h2 className="font-semibold text-lg">
                {product.name}
              </h2>

              <p className="text-gray-600 text-sm mt-1">
                {product.shortDescription}
              </p>

              <p className="mt-4 font-bold">
                {product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
