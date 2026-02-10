import React from "react";

const Bredcrumb = ({ slug, slugHeading }) => {
  return (
    <div className="pt-[174px] pb-[154px] bg-[#000000] flex flex-col items-center">
      <h2 className="text-[50px]/[47px] font-bold font-urbanist text-white">
       {slugHeading}
      </h2>
      <div className="pt-5 flex gap-x-3 items-center">
        <span className="text-white text-xl/[47px] font-normal font-urbanist">
          Home
        </span>
        <span className="text-white text-xl/[47px] font-normal font-urbanist">
          /
        </span>
        <span className="text-white text-xl/[47px] font-normal font-urbanist">
          {slug}
        </span>
      </div>
    </div>
  );
};

export default Bredcrumb;
