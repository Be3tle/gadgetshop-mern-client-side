/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BrandCard = ({ card }) => {
  const { id, name, logo } = card || {};
  return (
    <Link to={`/brand/${name}`} state={name}>
      <div>
        <div key={id} className="mb-4 relative">
          <div
            className={`flex w-52 h-52 flex-col rounded border-slate-300 border-2 hover:bg-opacity-70`}
          >
            <div className="flex justify-center items-center">
              <img className="w-32 p-3" src={logo} alt="" />
            </div>

            <div className="p-2">
              <h5 className="text-lg font-bold my-2 text-gray-700">{name}</h5>
            </div>
          </div>
          <div className="overlay absolute inset-0 bg-black bg-opacity-50 text-white text-center opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
        </div>
      </div>
    </Link>
  );
};

export default BrandCard;
