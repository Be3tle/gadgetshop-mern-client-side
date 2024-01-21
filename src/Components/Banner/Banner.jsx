const Banner = () => {
  const bannerStyle = {
    backgroundImage: 'url("https://i.postimg.cc/ydgM1pkV/cybermon.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
  };

  return (
    <div className="flex justify-center items-center mt-0" style={bannerStyle}>
      <h1 className="text-xs md:text-sm md:font-medium bg-yellow-400 p-3 md:p-5 rounded-full ml-28 mt-28 md:ml-96 md:mt-44">
        FLASH SALE! <br />
        30% OFF!
      </h1>
    </div>
  );
};

export default Banner;
