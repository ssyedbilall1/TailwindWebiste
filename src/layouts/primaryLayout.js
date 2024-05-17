import React from "react";
import Navbar from "../globalComponents/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../globalComponents/footer";
const PrimaryLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PrimaryLayout;
