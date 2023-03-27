import React from "react";

const Header = () => {
  return (
    <header className="w-full px-14 pt-16 ">
      <div>
        <h1 className="text-[24px] font-Helvetica"></h1>
      </div>

      <div className="w-full flex flex-col items-center gap-y-10 mt-5">
        <div className="w-full bg-red-300">
          <img
            src=""
            alt=""
            className="w-full h-[100vh] object-cover object-center"
          />
        </div>

        <div className="space-y-1 font-Helvetica w-[35%] text-center">
          <p>Just in</p>
          <h1 className="text-[72px] font-bold leading-[68px]">
            NIKE AIR MAX PULSE
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            blanditiis vero quo modi explicabo quaerat!
          </p>
          <button className="px-6 py-2 bg-black text-white rounded-full">
            Shop Now
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
