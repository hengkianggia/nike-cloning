import React from "react";
import { useSelector } from "react-redux";
import Button from "../../component/UI/Button";

const ItemS = ({ img, p, title, button }) => {
  const isGrid = useSelector((state) => state.grid.grid);

  return (
    <div className={!isGrid ? "w-[33%]" : "w-[24.5%] mb-3"}>
      <div
        className={
          !isGrid
            ? "w-full h-[75vh]  bg-orange-400"
            : "w-full h-[60vh]  bg-orange-400"
        }
      >
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>

      {!isGrid ? (
        <div className="mt-5 flex flex-col items-center font-Helvetica">
          <p className="text-[18px]">{p}</p>
          <h1 className="text-[36px]">{title}</h1>
          {button ? <Button teks={button} /> : ""}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ItemS;
