import React from 'react'
import Product4 from './Product4'

const ListProduct4 = () => {
  return (
    <div className="w-full px-14 mt-20">
      <div className="flex justify-between items-center font-Helvetica">
        <h1 className="text-[24px] ">Gear Up</h1>
      </div>

      <div className="w-full flex justify-between mt-5">
        <Product4 />
        <Product4 />
        <Product4 />
      </div>
    </div>
  );
}

export default ListProduct4