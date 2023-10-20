/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const DetailsCard = ({ products }) => {
  const { id, name, image, description } = products || {};

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
        <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 w-40">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default DetailsCard;
