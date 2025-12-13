import { useLoaderData } from "react-router-dom";
import CartShow from "../CartShow/CartShow";

const Cart = () => {
  const loadCart = useLoaderData() || [];

  return (
    <div
      className="gap-4
        pl-4
        lg:pl-24
        mt-11 
        md:pl-11
        grid 
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-2 "
    >
      {loadCart.length === 0 ? (
        <p className="p-4">No items found.</p>
      ) : (
        loadCart.map((cart) => (
          <CartShow key={cart._id} cart={cart} />
        ))
      )}
    </div>
  );
};

export default Cart;
