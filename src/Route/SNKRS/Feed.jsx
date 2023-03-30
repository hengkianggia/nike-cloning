import React from "react";
import ItemS from "./ItemS";
import produk from "../../Data/Snkrs/Feed";
import { useSelector } from "react-redux";

const Feed = () => {
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

export default Feed;
