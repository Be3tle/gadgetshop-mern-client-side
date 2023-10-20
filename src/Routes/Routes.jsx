import { createBrowserRouter } from 'react-router-dom';

import Root from '../Layout/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import Products from '../Pages/Products/Products';
import AddProduct from '../Pages/AddToCart/AddProduct';
import MyCart from '../Pages/MyCart/MyCart';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('data.json'),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/brand/:name',
        element: <Products></Products>,
      },
      {
        path: '/addToCart',
        element: <AddProduct></AddProduct>,
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>,
        loader: () => fetch('http://localhost:5000/product'),
      },
    ],
  },
]);

export default routes;
