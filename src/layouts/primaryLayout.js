import React from "react";
import Navbar from "../globalComponents/navbar";
import { Outlet } from "react-router-dom";
const PrimaryLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default PrimaryLayout;
