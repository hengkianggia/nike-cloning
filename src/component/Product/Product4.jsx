import React from "react";

const Product4 = ({title}) => {
  return (
    <div className="w-[32%] relative">
      <div className="w-full h-[95vh] bg-orange-400">
        <img
          src=""
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute bottom-10 left-10">
        <button className="px-6 py-2 bg-white text-black font-Helvetica rounded-full">{title}</button>
      </div>
    </div>
  );
};

export default Product4;
