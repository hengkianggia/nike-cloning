import React from "react";
import { useSelector } from "react-redux";
import produk from "../../Data/Snkrs/Instock";
import ItemS from "./ItemS";

const InStock = () => {
  const listProduk = produk.map((item) => {
    return (
      <ItemS
        p={item.p}
        title={item.title}
        button={item.button}
        img={item.img}
      />
    );
  });

    const isGrid = useSelector((state) => state.grid.grid);

  return (
    <div
      className={
        !isGrid
          ? "w-full px-6 mt-5 flex justify-between flex-wrap gap-y-16"
          : "w-full px-6 mt-5 flex justify-between flex-wrap"
      }
    >
      {listProduk}
    </div>
  );
};

export default InStock;
