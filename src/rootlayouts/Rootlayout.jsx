import React from "react";
import Navbar from "../component/commonComponent/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/commonComponent/Footer";

const Rootlayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
