/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import Swal from 'sweetalert2';

const DetailsCard = ({ products }) => {
  const { id, name, image, description } = products || {};

  const handleAddToCart = () => {
    const cartItem = { name, image };
    console.log(cartItem);

    fetch('http://localhost:5000/cart', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Added successfully!',
            text: 'Do you want to continue?',
            icon: 'success',
            confirmButtonText: 'Sure!',
          });
        }
      });
  };

  return (
    <div className="mt-10">
      <div key={id} className="flex justify-center items-center ">
        <div className="relative">
          <img src={image} className="w-96" alt="Your Image" />
        </div>
      </div>

      <div className="flex flex-col text-left w-[1080px] mx-auto">
        <h5 className="text-2xl font-bold pt-10 pb-5">{name}</h5>
        <p className="">{description}</p>
        <button
          onClick={handleAddToCart}
          className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 w-40"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default DetailsCard;
