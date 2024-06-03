import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-3xl text-sky-400 font-extrabold">
            BLOG
          </span>
          <span className="text-3xl font-extrabold">REX.</span>
        </NavLink>
        <nav className="md:ml-auto flex flex-wrap items-center text-lg justify-center">
          <NavLink to="/" className="p-5 focus:font-extrabold text-xl">
            Home
          </NavLink>
          <NavLink to="/products" className="p-5 focus:font-extrabold text-xl">
            Products
          </NavLink>
          <NavLink to="/about" className="p-5 focus:font-extrabold text-xl">
            About Us
          </NavLink>
          <NavLink to="/contact" className="p-5 focus:font-extrabold text-xl">
            Contact Us
          </NavLink>
          <NavLink to="/blogs" className="p-5 focus:font-extrabold text-xl">
            Blog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
