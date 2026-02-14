import React from "react";
import Bredcrumb from "../../commonComponent/Bredcrumb";
import { FaRegComments, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaSearch } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { LuCalendarDays } from "react-icons/lu";

const BlogDetails = () => {
  const sidebarWidgets = [
    {
      title: "Latest Post",
      type: "posts",
      items: [1, 2, 3].map(() => ({
        date: "26 Mar, 2023",
        title: "The Complete Web Developer Guideline 2023",
      })),
    },
    {
      title: "Categories",
      type: "list",
      items: ["Web Development", "Social Marketing", "Technology", "Business & Finance", "Digital Solution"],
    },
    {
      title: "Tags",
      type: "tags",
      items: ["Marketing", "Development", "Design", "Digital"],
    },
    {
      title: "Comments",
      type: "sidebar-comments",
      items: [
        { text: "There are many variations of Lorem available Here", active: false },
        { text: "There are many variations of Lorem available Here", active: true },
        { text: "Template: variations of Lorem available. but", active: false, author: "Watson Doe on " },
        { text: "There are many variations of Lorem available Here", active: false },
      ],
    },
  ];

  return (
    <div className="bg-white font-urbanist pb-20">
      {/* Breadcrumb Section */}
      <Bredcrumb slug="Blog" slugHeading="BLOG DETAILS" />

      <div className="max-w-[1200px] mx-auto py-20 px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Content Area */}
        <div className="lg:col-span-2">
          {/* Main Blog Image Placeholder */}
          <div className="w-full h-[450px] bg-[#1A2B43] rounded-xl mb-8"></div>

          {/* Meta Info */}
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-[#5C6BFF] text-white text-[12px] font-semibold px-4 py-1 rounded">Development</span>
            <span className="text-[#687693] text-sm flex items-center gap-2">
              <LuCalendarDays className="text-orange-500" /> 26 Mar, 2023
            </span>
          </div>

          <h1 className="text-[36px] leading-[46px] font-bold text-[#1A2B43] mb-6">
            The Complete Web Developer Guideline 2023
          </h1>

          <div className="text-[#687693] text-[16px] leading-[28px] space-y-6">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable...</p>
            <p>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus. ac dapibus dolor</p>
            <p>Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus. ac dapibus dolor. Aenean dictum eget nulla in pharetra. Vestibulum vulputate vehicula mattis. Vivamus dictum nec dui porta rutrum. Nam erat felis, mattis ac massa</p>
          </div>

          {/* Tags & Social Share */}
          <div className="flex flex-wrap justify-between items-center border-y border-[#EAEAEA] py-6 my-10">
            <div className="flex gap-2 items-center">
              <span className="font-bold text-[#1A2B43] mr-2">Tags</span>
              {["Marketing", "Development", "Design"].map((tag) => (
                <span key={tag} className="bg-[#F3F4F6] px-4 py-2 text-sm text-[#687693] rounded cursor-pointer hover:bg-orange-500 hover:text-white transition-all">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 items-center">
              <FaFacebookF className="cursor-pointer text-[#687693] hover:text-orange-500" />
              <FaLinkedinIn className="cursor-pointer text-[#687693] hover:text-orange-500" />
              <FaTwitter className="cursor-pointer text-[#687693] hover:text-orange-500" />
              <FaYoutube className="cursor-pointer text-[#687693] hover:text-orange-500" />
            </div>
          </div>

          {/* User Comments */}
          <div className="mt-12">
            <h3 className="text-[26px] font-bold text-[#1A2B43] mb-8">2 Comments</h3>
            {[
              { name: "David Shon", text: "Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus. ac dapibus dolor." },
              { name: "Jhon Watchson", text: "Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget auctor metus. ac dapibus dolor." }
            ].map((comment, i) => (
              <div key={i} className="flex gap-6 mb-10 items-start">
                <div className="w-[100px] h-[100px] bg-[#1A2B43] rounded-full shrink-0"></div>
                <div>
                  <h4 className="font-bold text-[20px] text-[#1A2B43]">{comment.name}</h4>
                  <p className="text-[#687693] text-[16px] leading-[26px] mt-2">{comment.text}</p>
                  <button className="text-sm font-bold mt-4 border border-[#EAEAEA] px-6 py-2 rounded-md hover:bg-orange-500 hover:text-white transition-all text-[#1A2B43]">Reply</button>
                </div>
              </div>
            ))}
          </div>

          {/* Form Section */}
          <div className="mt-16 bg-white">
            <h3 className="text-[26px] font-bold text-[#1A2B43] mb-8">Leave a Comment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <input type="text" placeholder="Your Name" className="bg-[#F8F9FA] border-none p-5 rounded-md outline-none focus:ring-1 ring-orange-500" />
              <input type="email" placeholder="Email Address" className="bg-[#F8F9FA] border-none p-5 rounded-md outline-none focus:ring-1 ring-orange-500" />
            </div>
            <textarea placeholder="Write a Message" rows="6" className="w-full bg-[#F8F9FA] border-none p-5 rounded-md mb-8 outline-none focus:ring-1 ring-orange-500"></textarea>
            <button className="bg-orange-500 text-white px-10 py-4 rounded-md font-bold hover:bg-[#1A2B43] transition-all flex items-center gap-2">
              Submit Comment <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-orange-500 p-5 rounded-lg flex items-center shadow-lg">
             <input type="text" placeholder="Type Here" className="bg-transparent placeholder-white text-white outline-none w-full px-2" />
             <FaSearch className="text-white cursor-pointer" />
          </div>

          {sidebarWidgets.map((widget, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#F1F1F1]">
              <h4 className="text-[22px] font-bold text-[#1A2B43] mb-6 relative pb-4">
                {widget.title}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#EAEAEA]"></div>
                <div className="absolute bottom-0 left-0 w-12 h-[2px] bg-orange-500"></div>
              </h4>
              
              {widget.type === "posts" && widget.items.map((post, i) => (
                <div key={i} className="flex gap-4 mb-6 last:mb-0">
                  <div className="w-20 h-16 bg-[#1A2B43] rounded-md shrink-0"></div>
                  <div>
                    <span className="text-[12px] text-[#687693] flex items-center gap-1 mb-1">
                      <LuCalendarDays className="text-orange-500" /> {post.date}
                    </span>
                    <h5 className="text-[15px] font-bold text-[#1A2B43] leading-snug hover:text-orange-500 cursor-pointer transition-all">{post.title}</h5>
                  </div>
                </div>
              ))}

              {widget.type === "list" && widget.items.map((item, i) => (
                <div key={i} className="group py-3 border-b border-[#F1F1F1] last:border-0 flex items-center gap-3 text-[#687693] hover:text-orange-500 cursor-pointer transition-all">
                  <MdKeyboardDoubleArrowRight className="text-orange-500" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}

              {widget.type === "tags" && (
                <div className="flex flex-wrap gap-3">
                  {widget.items.map((tag) => (
                    <span key={tag} className="bg-[#F8F9FA] px-4 py-2 text-sm text-[#687693] rounded hover:bg-orange-500 hover:text-white transition-all cursor-pointer">{tag}</span>
                  ))}
                </div>
              )}

              {widget.type === "sidebar-comments" && (
                <div className="space-y-6">
                  {widget.items.map((comment, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`mt-1 p-2.5 rounded-full shrink-0 flex items-center justify-center ${comment.active ? 'bg-orange-500 text-white shadow-orange-200 shadow-lg' : 'bg-[#F3F4F6] text-[#687693]'}`}>
                        <FaRegComments size={18} />
                      </div>
                      <p className="text-[15px] text-[#687693] leading-relaxed">
                        {comment.author && <span className="font-bold text-[#1A2B43]">{comment.author}</span>}
                        {comment.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default BlogDetails;