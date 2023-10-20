import { useLoaderData } from 'react-router-dom';
import MyProductCard from './MyProductCard';
import { useState } from 'react';

const MyCart = () => {
  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);

  return (
    <div>
      <h1 className="text-5xl">My Cart</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {products.map((product) => (
          <MyProductCard
            key={product._id}
            product={product}
            products={products}
            setProducts={setProducts}
          ></MyProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
