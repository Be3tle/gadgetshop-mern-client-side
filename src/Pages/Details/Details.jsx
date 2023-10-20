/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from './DetailsCard';

const Details = () => {
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  console.log(products);
  useEffect(() => {
    fetch(`https://gadgetshop-server.vercel.app/product/${id}`).then((res) =>
      res.json().then((data) => {
        setProducts(data);
      })
    );
  }, [id]);

  // console.log(id, products);

  return (
    <div>
      <DetailsCard products={products}></DetailsCard>
    </div>
  );
};

export default Details;
