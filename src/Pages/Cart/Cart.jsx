import { useLoaderData } from "react-router-dom";
import CartShow from "../CartShow/CartShow";


const Cart = () => {
    const loadCart = useLoaderData();
    console.log(loadCart)
    
    return (
        <div className="gap-4
        pl-4
        lg:pl-24
        mt-11 
        md:pl-11
        grid 
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-2 ">

            {
                loadCart?.map(cart=>
                    <CartShow
                    key={cart._id}
                    cart = {cart}
                    ></CartShow>
                    )
            }
            
        </div>
    );
};

export default Cart;