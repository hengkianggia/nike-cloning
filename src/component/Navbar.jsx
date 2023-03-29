import React from "react";
import { SiNike } from "react-icons/si";
import { GrNotification } from "react-icons/gr";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className=" w-full py-4 px-16 flex justify-between items-center bg-white sticky top-0 z-50">
      <div className="text-[60px]">
        <SiNike />
      </div>

      <div className="flex items-center gap-x-32">
        <div className="h-full">
          <ul className="flex gap-x-6 items-center font-Helvetica text-md">
            <Link to={"/"}>
              <li>New & Featured</li>
            </Link>
            <Link to={"men"}>
              <li>Men</li>
            </Link>
            <Link to={"women"}>
              <li>Women</li>
            </Link>
            <Link to={"kids"}>
              <li>Kids</li>
            </Link>
            <Link to={"sale"}>
              <li>Sale</li>
            </Link>
            <Link to={"snkrs"}>
              <li>SNKRS</li>
            </Link>
          </ul>
        </div>

        <div className="flex gap-x-5 items-center">
          <input
            type="text"
            placeholder="search"
            className="w-40 py-2 px-4 rounded-full bg-gray-100 text-md focus:border-gray-300"
          ></input>
          <div className="text-[24px]">
            <MdFavoriteBorder />
          </div>
          <div className="text-[24px]">
            <AiOutlineUser />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
