/* eslint-disable react/no-unescaped-entities */

const Banner = () => {
  const bannerStyle = {
    backgroundImage: 'url("https://i.postimg.cc/ydgM1pkV/cybermon.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '80vh',
  };

  return (
    <div
      className="flex justify-center items-center mt-0"
      style={bannerStyle}
    ></div>
  );
};

export default Banner;
