import React from "react";
import HeroSection from "./components/heroSection";
import DigitalSection from "./components/digitalSection";
import Blog from "./components/blog";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <DigitalSection />
      <Blog />
    </div>
  );
};

export default Home;
