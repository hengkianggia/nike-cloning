import React from "react";

const Button = ({ className, teks }) => {
  return (
    <div>
      <button className={`px-6 py-2 grid place-items-center bg-black text-white rounded-full ${className}`}>
        {teks}
      </button>
    </div>
  );
};

export default Button;
