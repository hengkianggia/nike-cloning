import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { filterAction } from "../../Store/Filter";

const NavProduk = () => {
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();
  const filterHandler = () => {
    dispatch(filterAction.openFilter());
  };

  return (
    <section className="w-full">
      <div className="flex justify-between pb-10 items-center">
        <h1 className="text-xl font-Helvetica font-medium">Trending (20)</h1>

        <div className="flex gap-x-8">
          <div
            className="flex items-center font-Helvetica gap-x-2 cursor-pointer"
            onClick={filterHandler}
          >
            <p>Hide Filters</p>
            <div className="text-[20px]">
              <BsFilter />
            </div>
          </div>

          <div
            className="flex items-center font-Helvetica gap-x-1 cursor-pointer"
            onClick={openHandler}
          >
            <p>Sort by</p>
            <div className="text-[30px] relative">
              <IoMdArrowDropdown />
              {open && (
                <div className="absolute space-y-4 w-40 p-5 bg-white z-50 right-0 text-[16px] rounded-xl flex flex-col items-end">
                  <p>Newest</p>
                  <p>Oldest</p>
                  <p>Top Rating</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavProduk;
