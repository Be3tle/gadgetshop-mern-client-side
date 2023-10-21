import { Link, NavLink } from 'react-router-dom';
import logo from './logo.png';
import emblem from './user.png';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    logOut().then().catch();
  };

  const [theme, setTheme] = useState('light');

  function handleThemeSwitch() {
    const html = document.documentElement;

    if (theme === 'light') {
      html.classList.remove('light');
      html.classList.add('dark');
      setTheme('dark');

      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme') || 'light';

    setTheme(currentTheme);
    const html = document.documentElement;
    html.classList.add(currentTheme);
  }, []);

  const navLinks = (
    <>
      <li className="dark:text-white">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="dark:text-white hover:text-gray-500">
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li className="dark:text-white">
        <NavLink to="/myCart">My Cart</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar max-w-4xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-500 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img src={logo} className="w-16" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full mr-3">
              <img src={user ? user?.photoURL : emblem} />
            </div>
          </label>
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn bg-cyan-500 hover:bg-cyan-700 text-white"
            >
              Sign out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn bg-cyan-500 hover:bg-cyan-700 text-white">
                Sign in / Sign up
              </button>
            </Link>
          )}

          <input
            onClick={handleThemeSwitch}
            type="checkbox"
            className="toggle ml-3"
            id="my-toggle"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
