import React from "react";
import Product2 from "./Product2";

const ListProduct2 = () => {
  return (
    <div className="w-full px-14 mt-20 space-y-5">
      <div>
        <h1 className="font-Helvetica text-[24px]">Trending This Week</h1>
      </div>

      <div className="w-full flex justify-between">
        <Product2/>
        <Product2/>
      </div>
    </div>
  );
};

export default ListProduct2;
