import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { RiLayoutGridFill } from "react-icons/ri";
import { SiJordan } from "react-icons/si";
import { Link } from "react-router-dom";

const NavS = () => {
  return (
    <div className="w-full px-6">
      <Link to={"/"}>
        <div className="w-full py-3 text-[16px] flex gap-x-2 items-center">
          <div>
            <IoIosArrowBack />
          </div>
          <h3>Visit Nike.com</h3>
        </div>
      </Link>

      <hr />

      <div className="w-full py-3 flex justify-between items-center">
        <Link to={"."}>
          <div className="text-[30px]">
            <SiJordan />
          </div>
        </Link>

        <div>
          <ul className="flex gap-x-8 font-Helvetica text-[16px]">
            <Link to={"."}>
              <li>Feed</li>
            </Link>
            <Link to={"in-stock"}>
              <li>In Stock</li>
            </Link>
            <Link to={"upcoming"}>
              <li>Upcoming</li>
            </Link>
          </ul>
        </div>

        <div className="text-[28px]">
          <RiLayoutGridFill />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavS;
