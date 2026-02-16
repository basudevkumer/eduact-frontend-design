import React from "react";
import { FaChevronRight } from "react-icons/fa6";

// image import 
import blogImg from "../../../assets/images/blog1.png";
import userImg from "../../../assets/images/blog1.png";
import BlogCard from "../../commonComponent/BlogCard";
import Bredcrumb from "../../commonComponent/Bredcrumb";

const BlogMain = () => {
  return (
    <section className="">
      <Bredcrumb slug={"Blog"} slugHeading={"Blog"}/>
      <div className="bg-[#F8F9FA] py-20">
        <div className="container mx-auto px-4 ">

        {/* Grid Layout - gap-y-24 provides room for the floating card content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-32">

          <BlogCard
            cardImages={blogImg}
            time="26 Mar, 2023"
            heading="The Complete Web Developer Guideline 2023"
            userImages={userImg}
            userName="Darrell Steward"
            userDepartment="FRONTEND DEVELOPER"
          />

          <BlogCard
            cardImages={blogImg}
            time="26 Mar, 2023"
            heading="The Complete Web Developer Guideline 2023"
            userImages={userImg}
            userName="Darrell Steward"
            userDepartment="FRONTEND DEVELOPER"
          />

          <BlogCard
            cardImages={blogImg}
            time="26 Mar, 2023"
            heading="The Complete Web Developer Guideline 2023"
            userImages={userImg}
            userName="Darrell Steward"
            userDepartment="FRONTEND DEVELOPER"
          />

          <BlogCard
            cardImages={blogImg}
            time="26 Mar, 2023"
            heading="The Complete Web Developer Guideline 2023"
            userImages={userImg}
            userName="Darrell Steward"
            userDepartment="FRONTEND DEVELOPER"
          />

          <BlogCard
            cardImages={blogImg}
            time="26 Mar, 2023"
            heading="The Complete Web Developer Guideline 2023"
            userImages={userImg}
            userName="Darrell Steward"
            userDepartment="FRONTEND DEVELOPER"
          />

          <BlogCard
            cardImages={blogImg}
            time="26 Mar, 2023"
            heading="The Complete Web Developer Guideline 2023"
            userImages={userImg}
            userName="Darrell Steward"
            userDepartment="FRONTEND DEVELOPER"
          />

        </div>

        {/* --- Pagination Section --- */}
        <div className="flex justify-center items-center gap-3 mt-20">
          {/* Active Page */}
          <button className="w-12 h-10 flex items-center justify-center rounded-[5px] bg-[#F57005] text-white font-bold font-urbanist transition-all">
            1
          </button>
          
          {/* Inactive Page */}
          <button className="w-12 h-10 flex items-center justify-center rounded-[5px] border border-[#E9E9E9] bg-white text-[#2A254D] font-medium font-urbanist hover:bg-[#F57005] hover:text-white transition-all">
            2
          </button>
          
          {/* Next Button */}
          <button className="w-12 h-10 flex items-center justify-center rounded-[5px] border border-[#E9E9E9] bg-white text-[#697585] hover:bg-[#F57005] hover:text-white transition-all">
            <FaChevronRight size={14} />
          </button>
        </div>

      </div>
      </div>
    </section>
  );
};

export default BlogMain;