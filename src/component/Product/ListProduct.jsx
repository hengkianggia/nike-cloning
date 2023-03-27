import React from "react";
import Product1 from "./Product1";

const ListProduct = () => {
  return (
    <div className="w-full px-14 mt-20 space-y-5">
      <div>
        <h1 className="font-Helvetica text-[24px]">Trending This Week</h1>
      </div>

      <div className="w-full flex justify-between overflow-x-scroll">
        <Product1 />
        <Product1 />
        <Product1 />
      </div>
    </div>
  );
};

export default ListProduct;
