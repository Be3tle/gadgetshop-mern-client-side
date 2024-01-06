/* eslint-disable react/prop-types */

import Swal from 'sweetalert2';

const MyCartCard = ({ cart, cartProducts, setCartProducts }) => {
  const { _id, name, image } = cart;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, sure!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/cart/${_id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your product has been deleted.',
                'success'
              );
              const remaining = cartProducts.filter(
                (product) => product._id !== _id
              );
              setCartProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl p-5">
      <div className="">
        <div className="flex justify-between my-2 items-center">
          <img src={image} className="w-20" alt="gadget" />
          <h2 className="text-lg font-semibold ">{name}</h2>
          <button
            onClick={() => {
              handleDelete(_id);
            }}
            className="btn bg-red-500 hover:bg-red-700 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCartCard;
