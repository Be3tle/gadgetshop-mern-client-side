/* eslint-disable react/prop-types */

import BrandCard from './BrandCard';

const Brands = ({ cards }) => {
  return (
    <div className="flex justify-center items-center flex-col mt-16">
      <h1 className="text-2xl font-bold mb-7 text-gray-500 dark:text-gray-300">
        TOP BRANDS
      </h1>

      <div className="md:grid grid-cols-1 lg:grid-cols-3 gap-3 mx-auto">
        {cards?.map((card) => (
          <BrandCard key={card.id} card={card}></BrandCard>
        ))}
      </div>
    </div>
  );
};

export default Brands;
