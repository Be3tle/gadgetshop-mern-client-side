import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyCartCard from './MyCartCard';

const MyCart = () => {
  const loadedCartProducts = useLoaderData();

  // const cartProduct = loadedCartProducts;
  const [cartProducts, setCartProducts] = useState(loadedCartProducts);

  return (
    <div>
      {cartProducts.length ? (
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-2xl font-semibold mb-4 text-center">My Cart</h1>
          <div className="grid md:grid-cols-2 gap-12">
            {cartProducts.map((cart) => (
              <MyCartCard
                key={cart._id}
                cart={cart}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
              ></MyCartCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center h-screen pt-32">
          <h1 className="text-xl font-medium">
            You have not added any products in your cart yet.
          </h1>
        </div>
      )}
    </div>
  );
};

export default MyCart;
