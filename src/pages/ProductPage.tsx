import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductPage() {
  const { slug } = useParams();
  const product = products.find(p => p.slug === slug);

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">

      {/* Left */}
      <div>
        <img
          src={product.coverImage}
          className="rounded-xl mb-6"
        />

        <div className="grid grid-cols-3 gap-4">
          {product.gallery.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Right */}
      <div>
        <h1 className="text-4xl font-bold">
          {product.name}
        </h1>

        <p className="text-xl mt-3">
          {product.price}
        </p>

        <p className="mt-4 text-gray-600">
          {product.shortDescription}
        </p>

        <h3 className="font-semibold mt-8 mb-3">
          What's Included
        </h3>

        <ul className="list-disc pl-5 space-y-2">
          {product.includes.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <a
          href={product.gumroadUrl}
          target="_blank"
          className="inline-block mt-10 bg-black text-white px-8 py-4 rounded-lg hover:opacity-80"
        >
          Buy Now
        </a>
      </div>

    </div>
  );
}
