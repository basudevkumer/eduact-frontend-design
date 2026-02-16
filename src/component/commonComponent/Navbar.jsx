import React from "react";
import { allImages } from "../../helper/imageprovider";
import Container from "../commonComponent/Container";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router";

const Navbar = () => {
  const { navbarImage } = allImages;
  return (
    <nav className="py-2 shadow-xl">
      <Container>
        <div className="flex items-center justify-between">
          <figure>
            <img src={navbarImage} alt="nav-images" />
          </figure>
          <ul className="flex items-center gap-x-[55px]">
            <li className="font-semibold font-urbanist text-base text-[#2A254D]">
              <a href="#">Home</a>
            </li>
            <li className="font-semibold font-urbanist text-base text-[#2A254D]">
              <a href="#" className="flex items-center gap-x-1">
                About{" "}
                <span>
                  <IoChevronDownSharp />
                </span>
              </a>
            </li>
            <li className="font-semibold font-urbanist text-base text-[#2A254D]">
              <a href="#">Courses</a>
            </li>
            <li className="font-semibold font-urbanist text-base text-[#2A254D]">
              <a href="#">Pages</a>
            </li>
            <li className="font-semibold font-urbanist text-base text-[#2A254D]">
              <a href="#">Blog</a>
            </li>
            <li className="font-semibold font-urbanist text-base text-[#2A254D]">
              <a href="#">Shop</a>
            </li>
            <li className="flex items-center gap-x-3">
              <span className="text-xl text-[#2A254D] cursor-pointer">
                <IoIosSearch />
              </span>

              <span className="text-lg text-[#2A254D] cursor-pointer">
                <Link to={"/login"}>
                  <FaRegUser />
                </Link>
              </span>
            </li>
          </ul>
          <button className="bg-[#4F5DE4] text-white p-4 rounded-l-[60px] flex items-center gap-x-[10px] cursor-pointer">
            <span className="inline-block text-xl p-3 bg-white rounded-full text-[#4F5DE4]">
              <FiPhoneCall />
            </span>
            <span className="flex flex-col  ">
              <span className="font-semibold font-urbanist text-lg/[30px]  inline-block text-white">
                (303) 555-0105
              </span>
              <span className="font-semibold font-urbanist text-[]14/[23px]  inline-block text-white">
                Call to Questions
              </span>
            </span>
          </button>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
