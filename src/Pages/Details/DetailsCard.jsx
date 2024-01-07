import Swal from 'sweetalert2';
import useAxios from '../../Hooks/useAxios';
import useAuth from '../../Hooks/useAuth';

const DetailsCard = ({ products }) => {
  const { id, name, image, description } = products || {};

  const axios = useAxios();
  const { user } = useAuth();

  const handleAddToCart = () => {
    const cartItem = { name, image, email: user.email };
    console.log(cartItem);

    axios.post('/cart', cartItem).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
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
    <div className="pt-10">
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
          className="btn bg-cyan-500 hover:bg-cyan-700 text-white font-bold my-2 w-40"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default DetailsCard;
