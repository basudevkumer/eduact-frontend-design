import React from "react";
import { FaChevronRight } from "react-icons/fa";


const ServiceCard = ({icon,title,description}) => {
  return (
    <div className=" rounded-[10px]  bg-white     flex flex-col items-center relative  overflow-hidden group">
      <div className='bg-[#F6F6F6] w-[492px] h-[492px] rounded-full absolute top-[-85%]'></div>
      <span className="w-[166px] h-[166px]    bg-[#F57005]    text-white text-[70px] rounded-full flex items-end justify-center pb-4 relative translate-y-[-33%] group-hover:bg-[#4F5DE4] transition duration-300 ease-in-out ">
        {icon}
      </span>
      <div className="pb-10 flex flex-col items-center ">
        <p className="font-urbanist font-bold text-xl text-[#2A254D] ">
          {title}
        </p>
        <p className="font-urbanist text-center font-medium text-base pt-7 w-[215px] text-[#2A254D]">
          {description}
        </p>
      </div>
      <div className="border-t-2 border-[#E4E4E4] w-full flex  justify-center  group-hover:bg-[#4F5DE4] transition duration-300 ease-in-out">
        <button className="text-[#2A254D] font-urbanist font-bold  items-center text-base flex gap-x-2 py-[30px]  cursor-pointer group-hover:text-[#fff] transition duration-300 ease-in-out">
          Read More{" "}
          <span>
            <FaChevronRight />
          </span>{" "}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
