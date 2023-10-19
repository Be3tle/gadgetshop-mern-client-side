import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import Brands from '../../Components/Brands/Brands';
import BannerEvent from '../../Components/BannerEvent/BannerEvent';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';

const Home = () => {
  const cards = useLoaderData();

  return (
    <div className="text-center">
      <Banner></Banner>
      <Brands cards={cards}></Brands>
      <BannerEvent></BannerEvent>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
