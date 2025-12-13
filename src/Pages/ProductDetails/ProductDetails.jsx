import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${API}/products/${id}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Not found");
        return data;
      })
      .then((data) => setProduct(data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!product) return <div className="p-6">Not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg"
        />

        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="mt-2">Brand: {product.brand}</p>
          <p className="mt-2">⭐ Rating: {product.rating}</p>
          <p className="mt-2 font-semibold">Price: {product.price} TK</p>

          <p className="mt-4 text-sm">{product.description}</p>

          <button className="btn bg-sky-200 text-black mt-6">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
