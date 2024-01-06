import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
  const product = useLoaderData();
  const { _id, name, brand, type, price, rating } = product;
  console.log(brand);

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const updatedProduct = {
      name,
      brand,
      type,
      price,
      rating,
    };

    console.log(updatedProduct);

    // send data to the server
    fetch(`http://localhost:4000/product/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Product updated successfully!',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div className="bg-cyan-50 p-24">
      <h2 className="text-3xl font-extrabold text-center mb-7">
        Update Product: {name}
      </h2>
      <form onSubmit={handleUpdateProduct}>
        {/* form names row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Product Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                defaultValue={brand}
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form type and price row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Product Type</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="type"
                defaultValue={type}
                placeholder="Product Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form rating row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="rating"
                defaultValue={rating}
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update product"
          className="btn btn-block text-white bg-cyan-500 hover:bg-cyan-700 "
        />
      </form>
    </div>
  );
};

export default UpdateProduct;
