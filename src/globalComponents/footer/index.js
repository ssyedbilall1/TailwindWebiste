import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 md:mx-0 mx-auto text-center md:text-left lg:w-1/2 md:w-1/2 ">
          <span className="ml-3 text-3xl text-sky-400 font-extrabold">
            BLOG
          </span>
          <span className="text-3xl font-extrabold">REX.</span>
          <p className="mt-2 text-sm text-gray-500 px-3">
            BlogRex can make you learn SEO and Blogging in quickest, simplest
            and most effective ways.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Company
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Home</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Company
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Blog</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 ">
        <div className="container mx-auto py-4 px-5">
          <p className="text-gray-500 text-sm text-center">
            © 2024 BlogRex —<span>Syed Bilal</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
