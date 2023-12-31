import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BrandProductShow = ({brandP}) =>
 {
    const {image,name,brandName,type,price,rate,_id} = brandP;
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
    <div className='space-x-4'>
      
<Link to={`/update/${_id}`}>
<button className="btn btn-accent bg-sky-200">Update</button>
</Link>
    
    <Link
    to={`/detail/${_id}`}
    >
    <button className="btn btn-accent bg-sky-200">Details </button>
    </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandProductShow;