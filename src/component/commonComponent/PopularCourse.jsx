import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const PopularCourse = () => {
  return (
    <div className="rounded-[12px] overflow-hidden  relative group w-[416px] h-[590px] shadow-xl">
      <span className="absolute text-white z-80 top-4 left-4   p-3 bg-[#F57005]  rounded-full cursor-pointer">
        <FaRegHeart />
      </span>
      <div className="bg-[#152B4A] w-[145%] h-[558px] rounded-full absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 "></div>
      <div className=" transition duration-300 ease-in-out group-hover:bg-[#4F5DE4] bg-[#F57005] w-[100%] h-[360px] absolute top-1/2 left-1/2 -translate-y-[98.5%] -translate-x-1/2 !z-0 rounded-full"></div>
      <div className="p-[30px] mt-[295px]">
        <p className="text-[14px]/[26px] text-white font-semibold font-urbanist px-[10px] py-[7px] bg-[#2A254D] rounded-[5px] w-fit ">
          20 Hours
        </p>

        <div className="flex gap-x-1 pt-[22px] pb-[7px] ">
          <ul className="flex items-center  gap-x-2">
            <li className="text-[16px] text-[#F57005]">
              <FaStar />
            </li>
            <li className="text-[16px] text-[#F57005]">
              <FaStar />
            </li>
            <li className="text-[16px] text-[#F57005]">
              <FaStar />
            </li>
            <li className="text-[16px] text-[#F57005]">
              <FaStar />
            </li>
            <li className="text-[16px] text-[#F57005]">
              <FaStar />
            </li>
          </ul>
          <p className="text-[#2A254D] font-normal text-[14px]/[26px]  font-urbanist">
            (25 Reviews)
          </p>
        </div>
        <h6 className="text-[#2A254D]  font-bold  text-2xl/[29px] font-urbanist">
          Management Consultants in Competitive Markets
        </h6>
        <div class="flex items-center justify-between rounded-[6px] p-3 bg-[#F6F6F6] mt-[30px]">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-[#0F2A4D]"></div>
            <div>
              <p class="text-base font-bold font-urbanist text-[#0F2A4D]">
                Guy Hawkins
              </p>
              <p class="text-xs font-urbanist font-medium text-gray-400">
                PROJECT MANAGER
              </p>
            </div>
          </div>

          <div class="text-right">
            <p class="text-base font-bold font-urbanist text-[#0F2A4D]">
              $473.00
            </p>
            <p class="text-xs font-urbanist font-medium text-gray-400">
              15 LESSONS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCourse;
