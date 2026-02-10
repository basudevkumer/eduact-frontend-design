import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Capsule = ({teacherName, department}) => {
  return (
    <div className="w-[415px] h-[549px]      group relative flex items-end">
      <div className="bg-[#152B4A] absolute w-[352px] h-[513px]  rounded-full overflow-hidden top-0 left-1/2 -translate-x-1/2">
        <div className=" flex flex-col gap-y-5 items-center justify-center absolute bg-[#18181898] w-full h-full rounded-full translate-y-[105%] left-0 group-hover:translate-y-0  transition duration-500 ease-in-out ">
          <div className="flex flex-col items-center">
            <h4 class="text-[32px]/[39px] font-urbanist font-bold text-white">
              {teacherName}
            </h4>
            <p class="text-xl/[38px] font-normal font-urbanist text-white pt-1">
              {department}
            </p>
          </div>
          <ul className="flex gap-x-2">
            <li className="text-lg text-white p-2 border-2 border-[#4F5DE4] cursor-pointer  rounded-full">
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li className="text-lg text-white p-2 border-2 border-[#4F5DE4] cursor-pointer  rounded-full">
              <a href="#">
                <FaLinkedinIn />
              </a>
            </li>
            <li className="text-lg text-white p-2 border-2 border-[#4F5DE4] cursor-pointer  rounded-full">
              <a href="#">
                <FaYoutube />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#F57005]  w-full rounded-b-full h-[309px] transition duration-500 ease-in-out group-hover:bg-[#4F5DE4]"></div>
    </div>
  );
};

export default Capsule;
