import React from "react";
import Button from "./UI/Button";

const Grid2 = ({
  kate,
  title1,
  button1,
  p1,
  title2,
  button2,
  p2,
  title3,
  button3,
  p3,
}) => {
  return (
    <div className="grid gap-y-5 mt-20 px-14">
      <div>
        <h1 className="text-[24px] font-Helvetica">{kate}</h1>
      </div>
      <div className="w-full h-[160vh] grid grid-cols-4 grid-rows-4 gap-3 relative">
        <div className=" bg-red-400 relative col-span-2 row-span-4">
          <div className="absolute bottom-10 left-10 space-y-5 w-full">
            <h1 className="text-[20px] font-Helvetica text-white">{title1}</h1>
            <p className="text-[18px] text-white w-[35%]">{p1}</p>
            <Button teks={button1} className={"mt-5 bg-white text-black"} />
          </div>
        </div>

        <div className=" bg-red-400 relative col-span-2 row-span-2">
          <div className="absolute bottom-10 left-10 space-y-5 w-full">
            <h1 className="text-[20px] font-Helvetica text-white">{title2}</h1>
            <p className="text-[18px] text-white w-[35%]">{p2}</p>
            <Button teks={button2} className={"mt-5 bg-white text-black"} />
          </div>
        </div>

        <div className=" bg-red-400 relative col-span-2 row-span-2">
          <div className="absolute bottom-10 left-10 space-y-5 w-full">
            <h1 className="text-[20px] font-Helvetica text-white">{title3}</h1>
            <p className="text-[18px] text-white w-[35%]">{p3}</p>
            <Button teks={button3} className={"mt-5 bg-white text-black"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid2;
