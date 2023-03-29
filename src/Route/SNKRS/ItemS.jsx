import React from "react";
import Button from "../../component/UI/Button";

const ItemS = ({ img, p, title, button }) => {
  return (
    <div className="w-[32.5%]">
      <div className="w-full h-[70vh]  bg-orange-400">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="mt-10 flex flex-col items-center font-Helvetica">
        <p className="text-[18px]">{p}</p>
        <h1 className="text-[36px]">{title}</h1>
        {button ? <Button teks={button} /> : ""}
      </div>
    </div>
  );
};

export default ItemS;
