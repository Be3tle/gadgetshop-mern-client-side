import { useLoaderData, useParams } from 'react-router-dom';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import Slider from './Slider';

const Products = () => {
  const { brand } = useParams();

  const loadedProducts = useLoaderData();
  const [products, setProducts] = useState(loadedProducts);
  const brandProduct = products.filter(
    (product) => product.brand?.toLowerCase() == brand?.toLocaleLowerCase()
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col">
      <Slider></Slider>

      {loading ? (
        <span className="loading loading-spinner loading-lg my-32"></span>
      ) : brandProduct.length ? (
        <div>
          <h1 className="text-2xl font-semibold mt-32 mb-4 text-center">
            Latest {brand} products
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            {brandProduct.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                products={products}
                setProducts={setProducts}
              ></ProductCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center my-32">
          <h1 className="text-xl font-medium">
            Products will be available soon. Thanks for having patience.
          </h1>
        </div>
      )}
    </div>
  );
};

export default Products;
