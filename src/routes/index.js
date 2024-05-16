import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import About from "../pages/aboutUs";
import PrimaryLayout from "../layouts/primaryLayout";
import Home from "../pages/home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PrimaryLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
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
