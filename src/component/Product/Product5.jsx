import React from "react";

const Product5 = ({ title }) => {
  return (
    <div className="w-[32%] relative">
      <div className="w-full h-[80vh] bg-orange-400">
        <img
          src=""
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="mt-5">
        <h1 className="text-[20px] font-Helvetica">{title}</h1>
      </div>
    </div>
  );
};

export default Product5;
