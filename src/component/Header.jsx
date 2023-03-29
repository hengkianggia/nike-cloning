import React from "react";
import Button from "./UI/Button";

const Header = ({ p, title, desc, kate, className, button}) => {

  return (
    <header className="w-full px-14 pt-16">
      <div>
        <h1 className="text-[24px] font-Helvetica">{kate}</h1>
        {/* <div>
          <ul className="flex font-Helvetica">
            <li>{listt}</li>
          </ul>
        </div> */}
      </div>

      <div className="w-full flex flex-col items-center gap-y-10 mt-5">
        <div className="w-full bg-red-300">
          <img
            src=""
            alt=""
            className="w-full h-[100vh] object-cover object-center"
          />
        </div>

        <div className="space-y-1 font-Helvetica w-[45%] text-center flex flex-col items-center">
          <div className="mb-5 flex flex-col items-center">
            <p>{p}</p>
            <h1 className={`${className} text-[72px] font-bold leading-[68px]`}>
              {title}
            </h1>
          </div>
          <p>{desc}</p>
          <Button teks={button} className={"text-white mt-5"} />
        </div>
      </div>
    </header>
  );
};

export default Header;
