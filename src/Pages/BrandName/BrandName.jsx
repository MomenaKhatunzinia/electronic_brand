

const BrandName = () => {
  const handelbtn = (name) =>
  {
    console.log(name)
  }
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
    <h2
    onClick={()=>handelbtn('Samsung')}
    className="card-title">
      Samsung
    </h2>
  </div>
</div> 
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img
  className="w-[400px] h-[300px]" src="https://i.ibb.co/8m6wyMv/sayan-ghosh-Dn-Y2w-BIX8-VQ-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 
    onClick={()=>handelbtn('Apple')}
    className="card-title">
    
      Apple
    </h2>
  </div>
</div> 
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img
  className="w-[400px] h-[300px]" src="https://i.ibb.co/nrFKm8X/nikita-kostrykin-D3-Zdf-Bq-A4n-Q-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2
     onClick={()=>handelbtn('Sony')}
    className="card-title">
   
      Sony
    </h2>
  </div>
</div> 
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img 
  className="w-[400px] h-[300px]"
  src="https://i.ibb.co/9wY7CZM/mohammad-dadkhah-nj9-Sdbmg-Ij-I-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 
    onClick={()=>handelbtn('LG')}
    className="card-title">
      LG
    </h2>
  </div>
</div> 
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img
  className="w-[400px] h-[300px]"
   src="https://i.ibb.co/8bzfcfb/rubaitul-azad-i-L7jxe-Qv-Fu8-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2
    onClick={()=>handelbtn('HP')}
    className="card-title">
      HP
    </h2>
  </div>
</div> 
           <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img
  className="w-[400px] h-[300px]"
   src="https://i.ibb.co/G2PbZZG/its-me-pravin-0u-VSMGde-UKM-unsplash.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2
    onClick={()=>handelbtn('Dell')}
    className="card-title">
      DELL
    </h2>
  </div>
</div> 
        </div>
    );
};

export default BrandName;