import { FaStar } from 'react-icons/fa';

const CartShow = ({cart}) => {
    const {image,name,brandName,type,price,shortDep,rate} = cart;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
    </h2>
   
    <div className="flex">
    <p>{price} TK</p>
    <div className='flex  items-center'>
    <p>{rate}</p>
    <FaStar></FaStar>
    </div>
    </div>

    <div className="card-actions justify-end">
      <div className="badge badge-outline">{brandName}</div> 
      <div className="badge badge-outline">{type}</div>
    </div>
   
  </div>
</div>
        </div>
    );
};

export default CartShow;