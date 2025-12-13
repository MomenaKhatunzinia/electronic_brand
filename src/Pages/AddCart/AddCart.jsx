import swal from "sweetalert";

const AddCart = () => {
  const handelSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const image = form.image.value;
    const name = form.name.value;
    const price = form.price.value;
    const shortDep = form.shortDep.value;
    const rate = form.rating.value;
    const type = form.type.value;
    const brandName = form.brandName.value;

    // ✅ match backend schema
    const addProduct = {
      image,
      name,
      brand: brandName,
      category: type,
      price: Number(price),
      rating: Number(rate),
      description: shortDep,
    };

    fetch(`${import.meta.env.VITE_API_URL}/products`, {
      method: "POST",
      headers: {
        "content-type": "application/json", // ✅ removed extra space
      },
      body: JSON.stringify(addProduct),
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data?.error || "Failed to add");
        return data;
      })
      .then(() => {
        swal("Success", "Product added successfully!", "success");
        form.reset();
      })
      .catch(() => {
        swal("Error", "Failed to add product!", "error");
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold ">Add Product</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handelSubmit} className="card-body">
              {/* Image */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  type="text"
                  placeholder="Image"
                  name="image"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* brand name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand-Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Brand-Name"
                  name="brandName"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Type */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <input
                  type="text"
                  placeholder="Type"
                  name="type"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Price */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price"
                  name="price"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Short Description */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short Description</span>
                </label>
                <input
                  type="text"
                  placeholder="Short Description"
                  name="shortDep"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* rating */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="number"
                  step="0.1"
                  placeholder="Rating"
                  name="rating"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary text-black bg-sky-200">
                  ADD
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCart;
