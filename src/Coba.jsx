import React from "react";

const Coba = () => {
  return (
    <div className="w-full h-[100vh] bg-orange-400 flex flex-row py-20 overflow-auto gap-x-5">
      <div className="bg-white grid-cols-3 grid-rows-5 gap-5 relative w-full h-96">
        <div className="col-span-2 row-span-3 bg-red-400"><h1>makmu</h1></div>
        <div className="col-span-2 row-span-3 bg-red-400"><h1>makmu</h1></div>
        <div className="col-span-2 row-span-3 bg-red-400"><h1>makmu</h1></div>
      </div>
    </div>
  );
};

export default Coba;
