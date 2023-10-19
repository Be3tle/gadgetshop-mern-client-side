/* eslint-disable react/no-unescaped-entities */
import banner from './event.jpg';

const BannerEvent = () => {
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
  };

  return (
    <div className="flex justify-center items-center mt-0" style={bannerStyle}>
      {/* <h1 className="text-xs md:text-sm md:font-medium bg-yellow-400 p-3 md:p-5 rounded-full ml-28 mt-28 md:ml-96 md:mt-44">
        FLASH SALE! <br />
        30% OFF!
      </h1> */}
    </div>
  );
};

export default BannerEvent;
