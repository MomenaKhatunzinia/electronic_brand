import { Link } from "react-router-dom";


const BrandName = () => {
 
    return (
     
        
        <div className="
        gap-4
        pl-4
        lg:pl-24
        mt-11 
        md:pl-11
        grid 
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-2 ">
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img 
  className="w-[400px] h-[300px]"
  src="https://i.ibb.co/Kw7kWz1/boliviainteligente-7n-Lzbe-Vfj-A4-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <Link
    to={`/brands/${'Samsung'}`}
    >
    <h2
    className="card-title">
      Samsung
    </h2>
    </Link>
  </div>
</div> 
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img
  className="w-[400px] h-[300px]" src="https://i.ibb.co/8m6wyMv/sayan-ghosh-Dn-Y2w-BIX8-VQ-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
   <Link to={`/brands/${'Apple'}`}>
   <h2 
    
    className="card-title">
    
      Apple
    </h2>
   </Link>
  </div>
</div> 
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img
  className="w-[400px] h-[300px]" src="https://i.ibb.co/nrFKm8X/nikita-kostrykin-D3-Zdf-Bq-A4n-Q-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
<Link
to={`/brands/${'Sony'}`}
>
<h2
   
   className="card-title">
  
     Sony
   </h2>
</Link>
  </div>
</div> 
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img 
  className="w-[400px] h-[300px]"
  src="https://i.ibb.co/9wY7CZM/mohammad-dadkhah-nj9-Sdbmg-Ij-I-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <Link to={`/brands/${'LG'}`}>
    <h2 
    className="card-title">
      LG
    </h2>
    </Link>
  </div>
</div> 
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img
  className="w-[400px] h-[300px]"
   src="https://i.ibb.co.com/YBWyv6WL/rubaitul-azad-i-L7jxe-Qv-Fu8-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
   <Link
   to={`/brands/${'HP'}`}
   >
   <h2
    className="card-title">
      HP
    </h2>
   </Link>
  </div>
</div> 
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img
  className="w-[400px] h-[300px]"
   src="https://i.ibb.co/G2PbZZG/its-me-pravin-0u-VSMGde-UKM-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <Link
    to={`/brands/${'Dell'}`}
    >
    <h2
    
    className="card-title">
      DELL
    </h2>
    </Link>
  </div>
</div> 
        </div>
    );
};

export default BrandName;