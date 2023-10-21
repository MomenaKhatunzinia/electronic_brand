import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const Details = () => {  
    const detailsProduct = useLoaderData();
    console.log(detailsProduct)
    const{_id} = useParams();
    const [details, setDetails] = useState([]);
    console.log(detailsProduct)
   
    useEffect(()=>
   { const matched =  detailsProduct?.find(id=>id._id == _id)
         
        setDetails(matched);
        console.log(details)
   
},[]
    )
    const {image,name,brandName,type,price,shortDep,rate} = details;
    const detailInfo = {image,name,brandName,type,price,shortDep,rate};
    console.log(detailInfo)
    const handelAddCart= () =>
    {
  
  
      fetch('http://localhost:5000/productsAddCart', {
        method:'POST',
        headers: {
            'content-type' : 'application/json '
        },
        body: JSON.stringify(detailInfo)
      })
      .then(res => res.json())
      .then(data => 
        {
            console.log(data)
            swal('Add Successful')
        })
      
     
    }
   
    return (
        <div>



<div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={details.image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{details.name}</h2>
    <p>{details.shortDep}</p>
    <div className="card-actions justify-end">
      <button 
      onClick={()=>handelAddCart(details._id)}
      className="btn btn-primary">Add Cart</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Details;