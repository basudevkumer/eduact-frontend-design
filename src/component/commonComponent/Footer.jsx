import React from "react";
import Container from "./Container";
import { allImages } from "../../helper/imageprovider";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const { footerLogo,blue, footerImage } = allImages;
  return (
    <footer className="relative overflow-hidden">
      <figure className="absolute  top-[-10px] left-[0%]">
        <img src={footerImage} alt="foote-image" className="h-[600px]" />
      </figure> 
      <div className="bg-[#2A254D] pt-[120px]  pb-[142px]">
        <Container>
          <div className="grid grid-cols-6 gap-x-[100px]">
            <div className="col-span-2 ">
              <figure>
                <img src={footerLogo} alt="footer-logo" />
              </figure>
              <div>
                <ul className="space-y-5 pt-[30px] pb-5">
                  <li className="font-normal font-urbanist text-lg/[30px]   text-[#B3ADE1] flex items-center gap-x-4">
                    <span className="text-xl text-[#F57005] inline-block">
                      <FaLocationDot />
                    </span>
                    6391 Elgin St. Celina, Delaware 10299
                  </li>
                  <li className="font-normal font-urbanist text-lg/[30px]   text-[#B3ADE1] flex items-center gap-x-4">
                    <span className="text-xl text-[#F57005] inline-block">
                      <FiPhoneCall />
                    </span>
                    (303) 555-0105
                  </li>
                  <li className="font-normal font-urbanist text-lg/[30px]   text-[#B3ADE1] flex items-center gap-x-4">
                    <span className="text-xl text-[#F57005] inline-block">
                      <BiMessageDetail />
                    </span>
                    michael.mitc@example.com
                  </li>
                </ul>
                <ul className="flex gap-x-4">
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
                      <FaTwitter />
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
            <div className="">
              <ul className="space-y-[16px]">
                <li className="font-semibold font-urbanist text-2xl/[30px] text-white pb-6">
                  {" "}
                  Quick Links
                </li>
                <li className="font-normal font-urbanist text-lg/[30px] text-[#B3ADE1] cursor-pointer whitespace-nowrap">
                  {" "}
                  Latest Courses
                </li>
                <li className="font-normal font-urbanist text-lg/[30px] text-[#B3ADE1] cursor-pointer whitespace-nowrap">
                  {" "}
                  Mission & Vision
                </li>
                <li className="font-normal font-urbanist text-lg/[30px] text-[#B3ADE1] cursor-pointer whitespace-nowrap">
                  {" "}
                  Our Approach
                </li>
                <li className="cursor-pointer font-normal font-urbanist text-lg/[30px] text-[#B3ADE1] whitespace-nowrap">
                  {" "}
                  Exclusive Advisors{" "}
                </li>
                <li className="font-normal cursor-pointer font-urbanist text-lg/[30px] text-[#B3ADE1] whitespace-nowrap">
                  {" "}
                  Join a Carrer
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="space-y-[16px]">
                <li className="font-semibold font-urbanist text-2xl/[30px] text-white pb-6">
                  {" "}
                  Explore
                </li>
                <li className="font-normal font-urbanist text-lg/[30px] text-[#B3ADE1] cursor-pointer whitespace-nowrap">
                  {" "}
                  About Us
                </li>
                <li className="font-normal font-urbanist text-lg/[30px] text-[#B3ADE1] cursor-pointer whitespace-nowrap">
                  {" "}
                  Upcoming Events
                </li>
                <li className="font-normal font-urbanist text-lg/[30px] text-[#B3ADE1] cursor-pointer whitespace-nowrap">
                  {" "}
                  Blog & News
                </li>
                <li className="cursor-pointer font-normal font-urbanist text-lg/[30px] text-[#B3ADE1] whitespace-nowrap">
                  {" "}
                  FAQ Question
                </li>
                <li className="font-normal cursor-pointer font-urbanist text-lg/[30px] text-[#B3ADE1] whitespace-nowrap">
                  {" "}
                  Testimonial
                </li>
                <li className="font-normal cursor-pointer font-urbanist text-lg/[30px] text-[#B3ADE1] whitespace-nowrap">
                  {" "}
                  Privacy Policy
                  </li>
              </ul>
            </div>
            <div className="col-span-2 ">
            <p className="font-semibold font-urbanist text-2xl/[30px] text-white pb-10">Gallery</p>
              <div className="grid grid-cols-3 gap-y-5">
                <figure>
                  <img src={blue} alt="footer-rightside-images" className="w-[92px] h-[92px] object-fit "/>
                </figure>
                <figure>
                  <img src={blue} alt="footer-rightside-images" className="w-[92px] h-[92px] object-fit "/>
                </figure>
                <figure>
                  <img src={blue} alt="footer-rightside-images" className="w-[92px] h-[92px] object-fit "/>
                </figure>
                <figure>
                  <img src={blue} alt="footer-rightside-images" className="w-[92px] h-[92px] object-fit "/>
                </figure>
                <figure>
                  <img src={blue} alt="footer-rightside-images" className="w-[92px] h-[92px] object-fit "/>
                </figure>
                <figure>
                  <img src={blue} alt="footer-rightside-images" className="w-[92px] h-[92px] object-fit "/>
                </figure>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div>
        <p className="py-[35px] text-[#B3ADE1] text-base/[30px] font-normal font-urbanist text-center bg-[#1F1944]">© Copyright 2023 by Company.com</p>
      </div>
    </footer>
  );
};

export default Footer;
