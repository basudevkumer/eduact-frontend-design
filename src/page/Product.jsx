import React, { useState }  from 'react'
import Bredcrumb from './../component/commonComponent/Bredcrumb';
import Container from '../component/commonComponent/Container';
import { CiSearch } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";
import { FaStar } from "react-icons/fa";

const Product = () => {
  const [price, setPrice] = useState(100);
  return (
    <div  >
   <div ><Bredcrumb slug={"Shop"} slugHeading={"Products"}/></div>
<Container>
  <div className='flex mt-30 mb-30' >
    <div>
   <div className='w-75 h-20 bg-[#F57005] rounded-lg'>
  <h1 className='flex items-center gap-x-1 pt-7 ml-7.5 text-[#FFFFFF]'> <CiSearch />Type Here</h1>
   </div>
   <div>
    <div className="w-80 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
      
      <h3 className="text-xl font-bold text-black mb-4">Price</h3>
  
      <div className="mb-6">
        <input
          type="range"
          min="10"
          max="100"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full h-2 bg-gray-200 rounded-lg  accent-orange-500"
        />
      </div>
      <div className="flex items-center justify-between"> 
        <p className="text-gray-500 font-medium text-lg">
          $10 - ${price}
        </p>
        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-6 rounded-lg transition duration-200">
          Apply
        </button>
        
      </div>
    </div>
   </div>


 

<div >
  <h2 className='border-b-2 border-dashed border-orange-500 w-76 pb-7.5 pt-7.5 text-[24px] font-semibold '>Categories</h2>
  <p className='flex items-center gap-x-2 text-[20px] mt-7.5 font-semibold font-Urbanist text-[#697585] shadow-md pb-7.5 w-[263px] '> <span className='text-[#F57005]'><MdKeyboardDoubleArrowRight /></span> Web Development</p>

  <p className='flex items-center gap-x-2 text-[20px] font-semibold font-Urbanist text-[#697585] shadow-md pb-7.5 w-[263px] '> <span className='text-[#F57005]'><MdKeyboardDoubleArrowRight /></span> Social Marketing</p>

  <p className='flex items-center gap-x-2 text-[20px] font-semibold font-Urbanist text-[#697585] shadow-md pb-7.5 w-[263px]'> <span className='text-[#F57005]'><MdKeyboardDoubleArrowRight /></span> Technology</p>

  <p className='flex items-center gap-x-2 text-[20px] font-semibold font-Urbanist text-[#697585] shadow-md pb-7.5 w-[263px] '> <span className='text-[#F57005]'><MdKeyboardDoubleArrowRight /></span> Business & Finance</p>
</div>
</div>

<div >
<div className=' flex items-center justify-between w-[981px] h-18 hover:shadow-lg hover:shadow-gray-300 rounded-lg  '>
  <h1 className='text-[#697585]'>Showing 1-9 of 12 Results</h1>
  <p className='flex items-center gap-x-29 bg-[#F6F6F6]'>Short By Popular <HiChevronDown /></p>
</div>

<div className=' w-[981px] mt-9 grid grid-cols-3 gap-9'>

<div className='w-76  bg-[#FFFFFF] px-19.5 hover:shadow-lg hover:shadow-gray-400 rounded-lg   '>
  <div className='space-y-3 pt-60 '>
  <h1 className='text-center font-semibold'>Sofa Chair</h1>
  <p className='text-[20px] text-center text-[#697585]'>$25.00 <span className='text-[18px]'>$30.00</span></p>
  <p className='flex text-[#F57005] justify-center'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
  </div>
  <button className='bg-orange-500 hover:bg-orange-600 mt-6 mb-8 text-white font-medium py-2 px-6 rounded-lg transition duration-200'>Add to Cart</button>
</div>

<div className='w-76  bg-[#FFFFFF] px-19.5 hover:shadow-lg hover:shadow-gray-400 rounded-lg   '>
  <div className='space-y-3 pt-60 '>
  <h1 className='text-center font-semibold'>Relax Chair</h1>
  <p className='text-[20px] text-center text-[#697585]'>$25.00 <span className='text-[18px]'>$30.00</span></p>
  <p className='flex text-[#F57005] justify-center'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
  </div>
  <button className='bg-orange-500 hover:bg-orange-600 mt-6 mb-8 text-white font-medium py-2 px-6 rounded-lg transition duration-200'>Add to Cart</button>
</div>

<div className='w-76  bg-[#FFFFFF] px-19.5 hover:shadow-lg hover:shadow-gray-400 rounded-lg   '>
  <div className='space-y-3 pt-60 '>
  <h1 className='text-center font-semibold'>Office Chair</h1>
  <p className='text-[20px] text-center text-[#697585]'>$25.00 <span className='text-[18px]'>$30.00</span></p>
  <p className='flex text-[#F57005] justify-center'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
  </div>
  <button className='bg-orange-500 hover:bg-orange-600 mt-6 mb-8 text-white font-medium py-2 px-6 rounded-lg transition duration-200'>Add to Cart</button>
</div>

<div className='w-76  bg-[#FFFFFF] px-19.5 hover:shadow-lg hover:shadow-gray-400 rounded-lg   '>
  <div className='space-y-3 pt-60 '>
  <h1 className='text-center font-semibold'>Relax Chair</h1>
  <p className='text-[20px] text-center text-[#697585]'>$25.00 <span className='text-[18px]'>$30.00</span></p>
  <p className='flex text-[#F57005] justify-center'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
  </div>
  <button className='bg-orange-500 hover:bg-orange-600 mt-6 mb-8 text-white font-medium py-2 px-6 rounded-lg transition duration-200'>Add to Cart</button>
</div>

<div className='w-76  bg-[#FFFFFF] px-19.5 hover:shadow-lg hover:shadow-gray-400 rounded-lg   '>
  <div className='space-y-3 pt-60 '>
  <h1 className='text-center font-semibold'>Long Stool</h1>
  <p className='text-[20px] text-center text-[#697585]'>$25.00 <span className='text-[18px]'>$30.00</span></p>
  <p className='flex text-[#F57005] justify-center'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
  </div>
  <button className='bg-orange-500 hover:bg-orange-600 mt-6 mb-8 text-white font-medium py-2 px-6 rounded-lg transition duration-200'>Add to Cart</button>
</div>

<div className='w-76  bg-[#FFFFFF] px-19.5 hover:shadow-lg hover:shadow-gray-400 rounded-lg   '>
  <div className='space-y-3 pt-60 '>
  <h1 className='text-center font-semibold'>Round Chair</h1>
  <p className='text-[20px] text-center text-[#697585]'>$25.00 <span className='text-[18px]'>$30.00</span></p>
  <p className='flex text-[#F57005] justify-center'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
  </div>
  <button className='bg-orange-500 hover:bg-orange-600 mt-6 mb-8 text-white font-medium py-2 px-6 rounded-lg transition duration-200'>Add to Cart</button>
</div>

<div className='w-76  bg-[#FFFFFF] px-19.5 hover:shadow-lg hover:shadow-gray-400 rounded-lg  '>
  <div className='space-y-3 pt-60 '>
  <h1 className='text-center font-semibold'>Relax Chair</h1>
  <p className='text-[20px] text-center text-[#697585]'>$25.00 <span className='text-[18px]'>$30.00</span></p>
  <p className='flex text-[#F57005] justify-center'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
  </div>
  <button className='bg-orange-500 hover:bg-orange-600 mt-6 mb-8 text-white font-medium py-2 px-6 rounded-lg transition duration-200'>Add to Cart</button>
</div>

<div className='w-76  bg-[#FFFFFF] px-19.5 hover:shadow-lg hover:shadow-gray-400 rounded-lg  '>
  <div className='space-y-3 pt-60 '>
  <h1 className='text-center font-semibold'>Boss Sofa</h1>
  <p className='text-[20px] text-center text-[#697585]'>$25.00 <span className='text-[18px]'>$30.00</span></p>
  <p className='flex text-[#F57005] justify-center'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
  </div>
  <button className='bg-orange-500 hover:bg-orange-600 mt-6 mb-8 text-white font-medium py-2 px-6 rounded-lg transition duration-200'>Add to Cart</button>
</div>

<div className='w-76  bg-[#FFFFFF] px-19.5 hover:shadow-lg hover:shadow-gray-400 rounded-lg  '>
  <div className='space-y-3 pt-60 '>
  <h1 className='text-center font-semibold'>Office Chair</h1>
  <p className='text-[20px] text-center text-[#697585]'>$25.00 <span className='text-[18px]'>$30.00</span></p>
  <p className='flex text-[#F57005] justify-center'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></p>
  </div>
  <button className='bg-orange-500 hover:bg-orange-600 mt-6 mb-8 text-white font-medium py-2 px-6 rounded-lg transition duration-200'>Add to Cart</button>
</div>

</div>
 </div>
 </div>
</Container>
    </div>

  )
}

export default Product