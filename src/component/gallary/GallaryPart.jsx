import React from 'react'


import { FaPlus } from 'react-icons/fa'
import Bredcrumb from '../commonComponent/Bredcrumb'
import Container from '../commonComponent/Container'

const GallaryPart = () => {
  return (
    <div>
        <Bredcrumb slug={"Course"} slugHeading={"Gallery"} />
        <Container>
        <div className='py-30 '>
        <div className='one flex gap-9'>
          <div className="one relative overflow-hidden group w-104 h-133.25 rounded-[233px] bg-[#152B4A]">
          <div className=' flex justify-center items-center bg-[rgba(79,94,228,0.62)]  rounded-[233px] top-full absolute h-full  duration-300 ease-in-out w-full group-hover:top-0'>
            <FaPlus className=' text-white' /></div>
          </div>
           <div className="one relative overflow-hidden group w-104 h-133.25 rounded-[233px] bg-[#152B4A]">
          <div className=' flex justify-center items-center bg-[rgba(79,94,228,0.62)]  rounded-[233px] top-full absolute h-full  duration-300 ease-in-out w-full group-hover:top-0'>
            <FaPlus className=' text-white' /></div>
          </div>
            <div className="one relative overflow-hidden group w-104 h-133.25 rounded-[233px] bg-[#152B4A]">
          <div className=' flex justify-center items-center bg-[rgba(79,94,228,0.62)]  rounded-[233px] top-full absolute h-full  duration-300 ease-in-out w-full group-hover:top-0'>
            <FaPlus className=' text-white' /></div>
          </div>
        </div>
        <div className='one flex gap-9 pt-10'>
          <div className="one relative overflow-hidden group w-104 h-133.25 rounded-[233px] bg-[#152B4A]">
          <div className=' flex justify-center items-center bg-[rgba(79,94,228,0.62)]  rounded-[233px] top-full absolute h-full  duration-300 ease-in-out w-full group-hover:top-0'>
            <FaPlus className=' text-white' /></div>
          </div>
           <div className="one relative overflow-hidden group w-104 h-133.25 rounded-[233px] bg-[#152B4A]">
          <div className=' flex justify-center items-center bg-[rgba(79,94,228,0.62)]  rounded-[233px] top-full absolute h-full  duration-300 ease-in-out w-full group-hover:top-0'>
            <FaPlus className=' text-white' /></div>
          </div>
            <div className="one relative overflow-hidden group w-104 h-133.25 rounded-[233px] bg-[#152B4A]">
          <div className=' flex justify-center items-center bg-[rgba(79,94,228,0.62)]  rounded-[233px] top-full absolute h-full  duration-300 ease-in-out w-full group-hover:top-0'>
            <FaPlus className=' text-white' /></div>
          </div>
        </div>
            </div>
        </Container>
    </div>
  )
}

export default GallaryPart

