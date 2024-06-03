import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import About from "../pages/aboutUs";
import Contact from "../pages/contact";
import Blogs from "../pages/blogs";
import PrimaryLayout from "../layouts/primaryLayout";
import Home from "../pages/home";
import Products from "../pages/products";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PrimaryLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/products" element={<Products />} />
    </Route>
  )
);

const WebsiteRoutes = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default WebsiteRoutes;
