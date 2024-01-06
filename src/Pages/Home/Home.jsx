import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import Brands from '../../Components/Brands/Brands';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import AboutUS from '../../Components/AboutUs/AboutUs';

const Home = () => {
  const cards = useLoaderData();

  return (
    <div className="text-center">
      <Banner></Banner>
      <Brands cards={cards}></Brands>
      <AboutUS></AboutUS>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
