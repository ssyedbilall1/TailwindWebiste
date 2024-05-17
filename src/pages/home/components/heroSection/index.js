import React from "react";
import head from "../../../../assets/img/head.png";
import instagram from "../../../../assets/img/instagram.png";
import twitter from "../../../../assets/img/twitter.png";
import youtube from "../../../../assets/img/youtube.png";
const HeroSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">
              GET EXCLUSIVE SEO TIPS THAT I ONLY SHARE WITH EMAIL SUBSCRIBERS
            </h1>
            <p className="mb-8 leading-relaxed text-base">
              Learn How You Can Grow Your Blog By Getting My SEO Strategy
              Straight Into Your Inbox
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                <input
                  type="text"
                  id="hero-field"
                  className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Enter Your Email Address"
                />
              </div>
              <button className="flex text-white bg-sky-500 border-0 py-2 px-6  hover:bg-sky-600 rounded text-lg ">
                Sign Up
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={head}
            />
          </div>
        </div>
        <div className="container mx-auto flex w-full mb-10 px-5">
          <hr className="mt-4 w-9/12 h-2 bg-gray-200 border-0 rounded" />
          <div className="flex space-x-[10px]">
            <img src={instagram} className="ms-4 w-8" alt="instagram" />
            <img src={twitter} className="w-8" alt="twitter" />
            <img src={youtube} className="w-8" alt="youtube" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
