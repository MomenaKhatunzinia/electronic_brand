import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function BrandProducts() {
  const { brandName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${API}/products?brand=${encodeURIComponent(brandName)}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Failed");
        return data;
      })
      .then((data) => setProducts(data))
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [brandName]);

  if (loading) return <div className="p-6">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">{brandName} Products</h2>

      {products.length === 0 ? (
        <p>No products found for {brandName}.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p._id} className="border rounded-lg p-4 shadow">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-44 object-cover rounded"
              />

              <h3 className="text-lg font-semibold mt-3">{p.name}</h3>
              <p className="text-sm mt-1">⭐ Rating: {p.rating}</p>

              <div className="flex gap-2 mt-4">
                <button className="btn btn-sm bg-sky-200 text-black">
                  Add to Cart
                </button>

                <Link to={`/products/${p._id}`} className="btn btn-sm">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
