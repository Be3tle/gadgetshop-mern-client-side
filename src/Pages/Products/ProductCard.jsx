/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const MyProductCard = ({ product, products, setProducts }) => {
  const { _id, name, brand, type, price, rating, description, image } = product;

  // const handleDelete = (_id) => {
  //   console.log(_id);
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, sure!',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       fetch(`https://gadgetshop-server.vercel.app/product/${_id}`, {
  //         method: 'DELETE',
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           if (data.deletedCount > 0) {
  //             Swal.fire(
  //               'Deleted!',
  //               'Your product has been deleted.',
  //               'success'
  //             );
  //             const remaining = products.filter(
  //               (product) => product._id !== _id
  //             );
  //             setProducts(remaining);
  //           }
  //         });
  //     }
  //   });
  // };

  return (
    <div className="card w-80 bg-base-100 shadow-xl p-5">
      <figure>
        <img src={image} className="w-48" alt="gadget" />
      </figure>
      <div className="">
        <div className="flex justify-between my-2">
          <h2 className="text-lg font-semibold">{name}</h2>
          <p>{type}</p>
        </div>
        <div className="flex justify-between my-2">
          <p className="font-medium">{brand}</p>
          <p>${price}</p>
        </div>
        <p className="my-4">{description}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions justify-center mt-4">
          <Link to={`/details/${_id}`}>
            <button className="btn bg-cyan-500 hover:bg-cyan-700 text-white">
              Details
            </button>
          </Link>

          <Link to={`/update/${_id}`}>
            <button className="btn bg-cyan-500 hover:bg-cyan-700 text-white">
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
