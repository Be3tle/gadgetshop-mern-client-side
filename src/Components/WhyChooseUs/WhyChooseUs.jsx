import { TbBrandApple } from 'react-icons/tb';
import { FaShippingFast } from 'react-icons/fa';
import { BiBadgeCheck } from 'react-icons/bi';

const WhyChooseUs = () => {
  return (
    <div className="py-20 text-slate-900 text-center bg-slate-50">
      <div className="mx-auto max-w-screen-xl">
        <h1 className="text-2xl md:text-5xl font-bold leading-tight  mt-10 mb-32">
          Why Choose Electon?
        </h1>
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-3 mx-auto gap-10">
          {/* 1 */}
          <div className="card w-96 h-72 flex flex-col justify-center items-center border-[1px] border-gray-700 ">
            <TbBrandApple className="text-9xl text-cyan-400" />

            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-10">Top Brands</h2>
              <p className="mt-2 text-lg">
                We offer a curated selection of electronic gadgets from the top
                brands in the industry.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="card w-96 h-72 flex flex-col justify-center items-center border-[1px] border-gray-700">
            <FaShippingFast className="text-7xl text-cyan-400" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-10">Fast Shipping</h2>
              <p className="mt-2 text-lg">
                Enjoy speedy and reliable shipping options to get your gadgets
                delivered in no time.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="card w-96 h-72 flex border-[1px] border-gray-700 flex-col justify-center items-center">
            <BiBadgeCheck className="text-9xl text-cyan-400" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-10">
                Quality Assurance
              </h2>
              <p className="mt-2 text-lg">
                We stand by the quality of our products and ensure that you
                receive only the best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
