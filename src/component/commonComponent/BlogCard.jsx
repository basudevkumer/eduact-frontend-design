import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";


const BlogCard = ({cardImages,userImages,time,heading,userName, userDepartment}) => {
  return (
    <div className="rounded-[5px]">
      <div className="">
        <img
          src={cardImages}
          className="w-full h-[488px] rounded-[5px] object-cover"
        />
      </div>
      <div className=" w-[90%] p-[30px]  mx-auto rounded-t-[10px] rounded-b-[50px] bg-white relative -translate-y-1/2 shadow-xl">
        <div className="flex items-center justify-between">
          <button className="text-white text-[14px]/[26px] bg-[#4F5DE4] rounded-[5px]  cursor-pointer font-semibold font-urbanist px-[10px]">
            Development
          </button>
          <p className="text-[#F57005] text-base/[26px] font-semibold font-urbanist">{time}</p>
        </div>
        <h6 className="text-[#2A254D] text-2xl font-bold font-urbanist py-[30px]">{heading}</h6>
        <div  className="flex items-center justify-between">
            <div className="flex  items-center gap-x-[10px]">
                <figure>
                    <img src={userImages} alt="blog-user-image"  className="h-[44px] w-[44px] object-cover  rounded-full"/>
                </figure>
                <div>
                    <p className="text-[#2A254D] text-base/[26px] font-bold font-urbanist">{userName}</p>
                    <p className="text-[#697585] text-[12px]/[25px] font-medium tracking-[4%] font-urbanist">{userDepartment}</p>
                </div>
            </div>
            <span className="p-3.5 inline-block   hover:bg-[#F57005] text-[#697585] border border-[#F57005] transition duration-300 ease-in-out text-lg  hover:text-white rounded-full"><FaArrowRightLong/></span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
