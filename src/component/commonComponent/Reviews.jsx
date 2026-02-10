import React from "react";
import { FaStar } from "react-icons/fa";

const Reviews = ({ reviewerImage, reviewerName, comment }) => {
  return (
    <div className="py-[60px] flex gap-x-[30px] bg-red-500">
      <div>
        <figure>
          <img
            src={reviewerImage}
            alt="review-images"
            className="w-[165px] h-[165px] object-cover"
          />
        </figure>
      </div>
      <div className="w-full space-y-5">
        <div className="flex  items-center justify-between ">
          <h6 className="text-2xl/[26px] text-[#2A254D] font-bold font-urbanist">
            {reviewerName}
          </h6>
          <ul className="flex gap-x-2">
            <li className="text-lg text-[#F57005]">
              <FaStar />
            </li>
            <li className="text-lg text-[#F57005]">
              <FaStar />
            </li>
            <li className="text-lg text-[#F57005]">
              <FaStar />
            </li>
            <li className="text-lg text-[#F57005]">
              <FaStar />
            </li>
            <li className="text-lg text-[#F57005]">
              <FaStar />
            </li>
          </ul>
        </div>
        <p className="text-base/[32px] text-[#697585] font-semibold font-urbanist">
          {" "}
          {comment}
        </p>
      </div>
    </div>
  );
};

export default Reviews;
