import React from "react";
import FilterProduk from "./Sale/FilterProduk";
import NavProduk from "./Sale/NavProduk";
import ListProduk from "./Sale/ListProduk";

const Sale = () => {
  return (
    <>
      <section className="w-full px-16 mt-20">
        <NavProduk />
        <div className="w-full flex">
          <FilterProduk />
          <ListProduk />
        </div>
      </section>
    </>
  );
};

export default Sale;
