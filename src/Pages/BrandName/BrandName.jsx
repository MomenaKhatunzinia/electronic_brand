import { Link } from "react-router-dom";

const BrandName = () => {
  const brands = [
    {
      name: "Samsung",
      img: "https://i.ibb.co/Kw7kWz1/boliviainteligente-7n-Lzbe-Vfj-A4-unsplash.jpg",
    },
    {
      name: "Apple",
      img: "https://i.ibb.co/8m6wyMv/sayan-ghosh-Dn-Y2w-BIX8-VQ-unsplash.jpg",
    },
    {
      name: "Sony",
      img: "https://i.ibb.co/nrFKm8X/nikita-kostrykin-D3-Zdf-Bq-A4n-Q-unsplash.jpg",
    },
    {
      name: "LG",
      img: "https://i.ibb.co/9wY7CZM/mohammad-dadkhah-nj9-Sdbmg-Ij-I-unsplash.jpg",
    },
    {
      name: "HP",
      img: "https://i.ibb.co/YBWyv6WL/rubaitul-azad-i-L7jxe-Qv-Fu8-unsplash.jpg", // ✅ fixed domain
    },
    {
      name: "Dell",
      img: "https://i.ibb.co/G2PbZZG/its-me-pravin-0u-VSMGde-UKM-unsplash.jpg",
    },
  ];

  return (
    <div
      className="
        gap-4
        pl-4
        lg:pl-24
        mt-11 
        md:pl-11
        grid 
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-2
      "
    >
      {brands.map((b) => (
        <div key={b.name} className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="w-[400px] h-[300px]" src={b.img} alt={b.name} />
          </figure>
          <div className="card-body">
            {/* ✅ route matches router: /brand/:brandName */}
            <Link to={`/brand/${b.name}`}>
              <h2 className="card-title">{b.name}</h2>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandName;
