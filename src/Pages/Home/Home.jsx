import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import Brands from '../../Components/Brands/Brands';

const Home = () => {
  const cards = useLoaderData();

  return (
    <div className="text-center">
      <Banner></Banner>
      <Brands cards={cards}></Brands>
    </div>
  );
};

export default Home;
