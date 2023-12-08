
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'


const Update = () => {
const loadUpdate = useLoaderData();
const {image,name,brandName,type,price,rate,_id} = loadUpdate;
console.log(image)
console.log(loadUpdate)


const handelUpdate = event =>
    {
        event.preventDefault();
        const form = event.target;

        const image = form.image.value;
        const name = form.name.value;
        const price = form.price.value;
       
      
        const rate = form.rating.value;
        const type= form.type.value;
        const brandName= form.brandName.value;
      const updateProduct
      
      = {image,name,brandName,type,price,rate}
      form.reset()
      console.log(updateProduct
        
        )

      fetch(`https://electronic-store-server-five.vercel.app/products/${_id}`, {
        method:'PUT',
        headers: {
            'content-type' : 'application/json '
        },
        body: JSON.stringify(updateProduct
            
            )
      })
      .then(res => res.json())
      .then(data => 
        {
            console.log(data)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your data is Updated',
                showConfirmButton: false,
                timer: 1500
              })
            
        })
    }
    return (
        
        <div>
               <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold ">Update Product</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100
    ">
      <form  
      onSubmit={handelUpdate}
      className="card-body">
        {/* Image */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" placeholder="Image" 
          defaultValue={image}
          name = "image"
          className="input input-bordered" required />
        </div>
        {/* Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" 
          defaultValue={name}
          name = "name"
          className="input input-bordered" required />
        </div>
        {/* brand name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand-Name</span>
          </label>
          <input type="text" placeholder="Brand-Name" 
          defaultValue={brandName}
          name = "brandName"
          className="input input-bordered" required />
        </div>
        {/* Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="text" 
          defaultValue={type}placeholder="Type" 
          name = "type"
          className="input input-bordered" required />
        </div>
        {/* Price */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="Price" 
          defaultValue={price}
          name = "price"
          className="input input-bordered" required />
        </div>
        
{/* rating */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="Rating" 
          placeholder="Rating" 
          defaultValue={rate}
          name="rating"
          className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-black bg-sky-200">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Update;