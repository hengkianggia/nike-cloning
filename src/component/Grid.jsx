import React from 'react'
import Button from './UI/Button';

const Grid = ({title1, button1, title2, button2, title3, button3, title4, button4}) => {
  return (
    <div className="w-full h-[200vh] px-14 grid grid-cols-4 grid-rows-5 gap-3 relative mt-20">
      <div className=" bg-red-400 relative col-span-2 row-span-3">
        <div className="absolute bottom-10 left-10">
          <h1 className="text-[20px] font-Helvetica text-white">
            {title1}
          </h1>
          <Button teks={button1} className={"mt-5"} />
        </div>
      </div>
      <div className=" bg-red-400 relative col-span-2 row-span-2">
        <div className="absolute bottom-10 left-10">
          <h1 className="text-[20px] font-Helvetica text-white">
            {title2}
          </h1>
          <Button teks={button2} className={"mt-5"} />
        </div>
      </div>
      <div className=" bg-red-400 relative col-span-2 row-span-3">
        <div className="absolute bottom-10 left-10">
          <h1 className="text-[20px] font-Helvetica text-white">
            {title3}
          </h1>
          <Button teks={button3} className={"mt-5"} />
        </div>
      </div>
      <div className=" bg-red-400 relative col-span-2 row-span-2">
        <div className="absolute bottom-10 left-10">
          <h1 className="text-[20px] font-Helvetica text-white">
            {title4}
          </h1>
          <Button teks={button4} className={"mt-5"} />
        </div>
      </div>
    </div>
  );
}

export default Grid