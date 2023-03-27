import React from 'react'
import Product3 from './Product3';

const ListProduct3 = () => {
  return (
    <div className="w-[49%]">
      <div className="flex justify-between items-center font-Helvetica">
        <h1 className="text-[24px] ">Gear Up</h1>
        <p className="">Shop Men's</p>
      </div>

      <div className="w-full flex justify-between mt-5">
        <Product3 />
        <Product3 />
      </div>
    </div>
  );
}

export default ListProduct3