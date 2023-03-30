import React from "react";
import FilterProduk from "./Sale/FilterProduk";
import NavProduk from "./Sale/NavProduk";
import ListProduk from "./Sale/ListProduk";
import { useSelector } from "react-redux";

const Sale = () => {
const isOpen = useSelector((state) => state.filter.open);

  return (
    <>
      <section className="w-full px-16 mt-20">
        <NavProduk />
        <div className="w-full flex">
          {isOpen && <FilterProduk />}
          <ListProduk />
        </div>
      </section>
    </>
  );
};

export default Sale;
