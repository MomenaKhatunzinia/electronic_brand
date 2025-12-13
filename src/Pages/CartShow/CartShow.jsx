import { FaStar } from "react-icons/fa";

const CartShow = ({ cart }) => {
  // ✅ backward compatible with old + new schema
  const image = cart?.image;
  const name = cart?.name;

  const brand = cart?.brand ?? cart?.brandName;
  const category = cart?.category ?? cart?.type;

  const price = cart?.price;
  const rating = cart?.rating ?? cart?.rate;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{name}</h2>

          <div className="flex">
            <p>{price} TK</p>
            <div className="flex items-center">
              <p>{rating}</p>
              <FaStar />
            </div>
          </div>

          <div className="card-actions justify-end">
            {brand && <div className="badge badge-outline">{brand}</div>}
            {category && <div className="badge badge-outline">{category}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartShow;
