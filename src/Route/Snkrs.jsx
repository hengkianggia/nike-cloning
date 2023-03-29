import React from "react";
import { Outlet } from "react-router";
import Footer from "../component/Footer";
import NavS from "./SNKRS/NavS";

const Snkrs = () => {
  return (
    <>
      <NavS />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Snkrs;
