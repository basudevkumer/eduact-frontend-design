import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";


const ProductCard = ({productImage,productName,productPrice}) => {
  return (
    <div className=''>
        <div className='relative'>
           <div className=' flex flex-col gap-y-3 absolute top-4 right-4'>
            <span className='text-xl p-2 cursor-pointer w-fit inline-block bg-[#F6F6F6] rounded-full text-[#697585]'><FaRegHeart/></span>
            <span className='text-xl p-2 cursor-pointer w-fit inline-block bg-[#F6F6F6] rounded-full text-[#697585]'><FaRegEye/></span>
           </div>
           <img src={productImage} alt="product-image"  className='w-full h-[180px] object-cover'/>
        </div>
        <div className='flex flex-col items-center gap-y-6 mt-4'>
            <div className='flex flex-col items-center'>
                <p className='text-xl/[26px] font-semibold text-[#2A254D] font-urbanist '>{productName}</p>
                <p className='text-lg/[26px] font-semibold text-[#697585] font-urbanist py-1'>{productPrice}</p>
                <ul className='flex gap-x-2'>
                    <li className='text-lg text-[#F57005]'><FaStar/></li>
                    <li className='text-lg text-[#F57005]'><FaStar/></li>
                    <li className='text-lg text-[#F57005]'><FaStar/></li>
                    <li className='text-lg text-[#F57005]'><FaStar/></li>
                    <li className='text-lg text-[#F57005]'><FaStar/></li>
                </ul>
            </div>
            <button className='font-urbanist text-base font-bold py-[14px] px-[32px] rounded-[6px] bg-[#F57005] text-white cursor-pointer'>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard