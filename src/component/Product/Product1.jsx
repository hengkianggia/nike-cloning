import React from "react";

const Product1 = ({title,cate,price}) => {
  return (
    <div className="w-[29vw] gap-y-5">
      <div className="w-full h-96 bg-red-400">
        <img
          src=""
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="mt-3 font-Helvetica mb-5">
        <h3 className="text-[20px]">{title}</h3>
        <p>{cate}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Product1;
