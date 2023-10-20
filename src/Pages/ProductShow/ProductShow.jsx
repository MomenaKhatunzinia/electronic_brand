import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import BrandProductShow from "../BrandProductShow/BrandProductShow";


const ProductShow = () => {
    const brandProduct = useLoaderData();
    const [brand, setBrand] = useState([]);
    const{ name} = useParams();
 
    useEffect(()=>
   { const matched =  brandProduct?.filter(names=>names.brandName === name)
    
    if(matched.length ===  0)
    {
        console.log("null")
    }
   else{ setBrand(matched);}
},[name,brandProduct]
    )
    return (
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
    );
};

export default ProductShow;