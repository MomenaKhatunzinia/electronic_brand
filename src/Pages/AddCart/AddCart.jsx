

const AddCart = () => {
    const handelSubmit = event =>
    {
        event.preventDefault();
        const form = event.target;

        const image = form.image.value;
        const name = form.name.value;
        const price = form.price.value;
        const shortDep = form.shortDep.value;
      
        const rate = form.rating.value;
        const type= form.type.value;
        const brandName= form.brandName.value;
      const addProduct = {image,name,brandName,type,price,shortDep,rate}
      form.reset()
      console.log(addProduct)

      fetch('http://electronic-store-server-8ft5vz5wp-momenakhatunzinia.vercel.app/products', {
        method:'POST',
        headers: {
            'content-type' : 'application/json '
        },
        body: JSON.stringify(addProduct)
      })
      .then(res => res.json())
      .then(data => 
        {
            console.log(data)
        })
        
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold ">Add Product</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100
    ">
      <form 
      onSubmit={handelSubmit}
      
      className="card-body">
        {/* Image */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" placeholder="Image" 
          name = "image"
          className="input input-bordered" required />
        </div>
        {/* Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name" 
          name = "name"
          className="input input-bordered" required />
        </div>
        {/* brand name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand-Name</span>
          </label>
          <input type="text" placeholder="Brand-Name" 
          name = "brandName"
          className="input input-bordered" required />
        </div>
        {/* Type */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="text" placeholder="Type" 
          name = "type"
          className="input input-bordered" required />
        </div>
        {/* Price */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="Price" 
          name = "price"
          className="input input-bordered" required />
        </div>
        {/* Short Description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <input type="text" placeholder="Short Description" 
          name = "shortDep"
          className="input input-bordered" required />
        </div>
{/* rating */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="Rating" placeholder="Rating" 
          name="rating"
          className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-black bg-sky-200">ADD</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddCart;