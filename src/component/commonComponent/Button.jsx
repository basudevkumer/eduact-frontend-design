import React from "react";

const Button = (className, children, icon) => {
  return (
    <button
      className={`cursor-pointer font-urbanist   rounded-[6px] px-[32px] py-[19px] bg-[#F57005] text-white font-bold text-lg flex items-center gap-x-[10px] overflow-hidden  relative  ${className} `}
    >
      {children} <span className="text-lg">{icon}</span>
      <span className="absolute bg-[#f6f5f535] w-full h-full top-0  left-[103.5%] translate-x-[-50%] rotate-115"></span>
    </button>
  );
};

export default Button;
