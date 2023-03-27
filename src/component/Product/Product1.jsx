import React from "react";

const Product1 = () => {
  return (
    <div className="w-[32%] gap-y-5">
      <div className="w-full h-96 bg-red-400">
        <img
          src=""
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="mt-3 font-Helvetica mb-5">
        <h3 className="text-[20px]">Nike Air Max Flyknit Racer Next Nature</h3>
        <p>Men's Shoes</p>
        <p>Rp 1.700,000</p>
      </div>
    </div>
  );
};

export default Product1;
