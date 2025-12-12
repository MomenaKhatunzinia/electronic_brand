import { useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import BrandProductShow from "../BrandProductShow/BrandProductShow";
import swal from 'sweetalert';


const ProductShow = () => {
    const brandProduct = useLoaderData();
    const [brand, setBrand] = useState([]);
    const{ name} = useParams();
 
   useEffect(() => {
  const products = Array.isArray(brandProduct) ? brandProduct : [];

  const matched = products.filter(
    (p) => (p?.brandName || "").toLowerCase() === name.toLowerCase()
  );

  if (matched.length !== 0) {
    setBrand(matched);
  } else {
    swal({
      text: "No available product for this brand",
      buttons: {
        home: "Go Home",
      },
    }).then((value) => {
      if (value === "home") {
        window.location.href = "/";
      }
    });
  }
}, [name, brandProduct]);

    return (
        <div>
            <div className="mb-11">

            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">

  <div className="hero min-h-[400px]" style={{backgroundImage: 'url(https://i.ibb.co/4fBCm1c/martin-sanchez-G78c3-DPm-D-A-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <p className="mb-5">Don't miss out on our amazing deals and discounts. Shop now to save big on your favorite gadgets.</p>
    </div>
  </div>
</div>

  </div> 
  <div id="item2" className="carousel-item w-full">
  <div className="hero min-h-[400px]" style={{backgroundImage: 'url(https://i.ibb.co/LdGVB8x/amir-hanna-swe-UF7-Fcy-P4-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <p className="mb-5">Don't wait! Shop now and experience the future of technology in your hands. Upgrade your electronics today and stay ahead of the curve!"</p>
    </div>
  </div>
</div>
  </div> 
  <div id="item3" className="carousel-item w-full">
  <div className="hero min-h-[400px]" style={{backgroundImage: 'url(https://i.ibb.co/6Zs4WQ4/jens-kreuter-ng-Mts-E5r9e-I-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <p className="mb-5">Immerse yourself in the world of entertainment with crystal-clear audio and vibrant displays. Stay connected, work efficiently, and enjoy the best in entertainment.</p>
    </div>
  </div>
</div>
  </div> 
 
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
</div>
            </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-rows-2 gap-11
        lg:pl-20
        pl-7
        ">

            {
               brand?.map(brandP => 
                <BrandProductShow
                key={brandP._id}
                brandP ={ brandP}
                >
                
                </BrandProductShow>
                )
            }
        </div>
        </div>
    );
};

export default ProductShow;