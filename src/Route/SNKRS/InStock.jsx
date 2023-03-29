import React from "react";
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

  return (
    <div className="w-full px-6 mt-5 flex justify-between flex-wrap gap-y-16">
      {listProduk}
    </div>
  );
};

export default InStock;
