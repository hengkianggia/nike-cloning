import React from "react";
import { Outlet } from "react-router";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default Home;
