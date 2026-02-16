import React from "react";
import Bredcrumb from "../commonComponent/Bredcrumb.jsx";
import Container from "../commonComponent/Container.jsx";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const Product_detailes = () => {
  return (
    <div>
      <div>
        <Bredcrumb slug={"Shop"} slugHeading={"PRODUCT DETAILES"} />{" "}
      </div>
      <Container>
        <div className="flex justify-between mt-30">
          <div className="w-[660px] h-[600px] border bg-[#152B4A] rounded-xl"></div>
          <div>
            <div>
              <h1 className="text-[32px] font-bold">
                Boss Sofa{" "}
                <span className="font-bold text-[20px] ml-8 text-[#F57005]">
                  $10.33{" "}
                </span>
              </h1>
              <p className="flex items-center text-[#F57005] gap-1 mt-8">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="ml-4">2 Customer Review</span>
              </p>
              <p className="w-[529px] mt-20 font-semibold text-[#697585]">
                Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam
                nec eros id magna hendrerit sagittis. Nullam sed mi non odio
                feugiat volutpat sit amet nec elit. Maecenas id hendrerit
                ipsum.{" "}
              </p>
              <p className="text-[#697585] mt-10">REF. 305/639</p>
              <p className="text-[#F57005] mt-7">In stock</p>
              <div className="flex items-center justify-between w-64 border mt-10 p-2 rounded">
                <span className="font-bold text-gray-700">Quantity</span>
                <div className="flex items-center border rounded">
                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                    -
                  </button>
                  <span className="px-3 py-1 border-x text-gray-800">2</span>
                  <button className="px-3 py-1 text-gray-600 hover:bg-gray-100">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <button className="border flex items-center p-4 bg-gradient-to-r from-[#24223E] to-[#3C385E] text-white gap-x-2 rounded-xl">
                Add to Wishlist <FaArrowRight />
              </button>
              <Link to={"/cart"}>
                <button className="border rounded-xl flex items-center p-4 bg-gradient-to-r from-[#F26522] to-[#FF8C22] text-white gap-x-2">
                  Add to Cart <FaArrowRight />
                </button>
              </Link>
            </div>
            <div className="flex gap-9 mt-5">
              <h1>Share with friend</h1>
              <p className="flex gap-4">
                <FaFacebookF /> <FaLinkedinIn /> <FaTwitter /> <FaYoutube />
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-[#2A254D] font-bold text-[32px] mt-10">
            Description
          </h1>
          <p className="w-[1320px] mt-10 font-semibold text-[#697585] text-[16px]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Vestibulum sollicitudin varius mauris non
            dignissim. Sed quis iaculis est. Nulla quam neque, interdum vitae
            fermentum lacinia, interdum eu magna. Mauris non posuere tellus.
            Donec quis euismod tellus. Nam vel lacus eu nisl bibendum accumsan
            vitae vitae nibh. Nam nec eros id magna hendrerit sagittis. Nullam
            sed mi non odio feugiat volutpat sit amet nec elit. Maecenas id
            hendrerit ipsum. Sed eget auctor metus, ac dapibus dolor
          </p>
          <div className="space-y-3">
            <p className="flex items-center gap-2 mt-10">
              <FaCircleCheck className="text-[#F57005]" /> Nibh. Nam nec eros id
              magna hendrerit s
            </p>
            <p className="flex items-center gap-2">
              <FaCircleCheck className="text-[#F57005]" /> Vitae nibh. Nam nec
              eros id magna hendrerit s
            </p>
            <p className="flex items-center gap-2">
              <FaCircleCheck className="text-[#F57005]" /> Nam nec eros id magna
              hendrerit s
            </p>
          </div>
        </div>
        <h2 className="text-[24px] text-[#2A254D] mt-30">2 Reviews</h2>
        <div className=" flex justify-between mt-15 hover:shadow-lg hover:shadow-gray-400">
          <div className="border w-35 h-35 rounded-full bg-[#152B4A] mt-auto"></div>
          <div>
            <h1 className="flex justify-between mt-5 font-bold text-[24px] text-[#2A254D]">
              David Shon{" "}
              <span className="flex items-center text-[#F57005] gap-2">
                <FaStar /> <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </h1>
            <p className="w-[1142px] mt-5 font-semibold text-[#697585]">
              Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec
              eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat
              volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget
              auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum
              accumsan vitae vitae nibh. Nam nec eros id magna hendrerit
              sagittis. Nullam sed mi non odio feugiat volutpat sit
            </p>
          </div>
        </div>

        <div className=" flex justify-between mt-15 hover:shadow-lg hover:shadow-gray-400">
          <div className="border w-35 h-35 rounded-full bg-[#152B4A] mt-auto"></div>
          <div>
            <h1 className="flex justify-between mt-5 font-bold text-[24px] text-[#2A254D]">
              David Shon{" "}
              <span className="flex items-center text-[#F57005] gap-2">
                <FaStar /> <FaStar />
                <FaStar />
                <FaStar />
              </span>
            </h1>
            <p className="w-[1142px] mt-5 font-semibold text-[#697585]">
              Nam vel lacus eu nisl bibendum accumsan vitae vitae nibh. Nam nec
              eros id magna hendrerit sagittis. Nullam sed mi non odio feugiat
              volutpat sit amet nec elit. Maecenas id hendrerit ipsum. Sed eget
              auctor metus, ac dapibus dolor. Nam vel lacus eu nisl bibendum
              accumsan vitae vitae nibh. Nam nec eros id magna hendrerit
              sagittis. Nullam sed mi non odio feugiat volutpat sit
            </p>
          </div>
        </div>
        <h1 className=" font-bold text-[24px] text-[#2A254D] mt-20">
          Add a Review
        </h1>
        <p className="flex items-center  text-[20px] font-semibold text-[#697585] mt-10">
          Rate this Product{" "}
          <span className="flex text-[#F57005] ml-4">
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
            <CiStar />
          </span>
        </p>
        <div className="max-w-[1320px]  p-4 mt-10">
          <form className="space-y-4">
            <div className="grid grid-cols-2  gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-gray-100 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-100 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <textarea
              rows="6"
              placeholder="Write a Message"
              className="w-full bg-gray-100 text-gray-700 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
            ></textarea>
          </form>
        </div>
        <button className="p-5 border flex items-center gap-x-2 rounded-md bg-gradient-to-r from-[#F26522] to-[#FF8C22] text-white">
          Leave a Review <FaArrowRight />
        </button>
      </Container>
    </div>
  );
};

export default Product_detailes;
