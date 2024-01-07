import { useEffect, useState } from 'react';
import MyCartCard from './MyCartCard';
import useAxios from '../../Hooks/useAxios';
import useAuth from '../../Hooks/useAuth';

const MyCart = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const res = await axios.get(`/cart/${user?.email}`);
        setCartProducts(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    if (user?.email) {
      fetchCartProducts();
    }
  }, [axios, user]);

  return (
    <div>
      {' '}
      {cartProducts.length ? (
        <div className="flex justify-center items-center flex-col h-screen">
          <div className='border-2 border-gray-700 rounded-lg border-opacity-10 p-10'>
            <h1 className="text-2xl font-semibold mb-4 text-center">My Cart</h1>
            <div className="grid md:grid-cols-1 gap-12">
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
