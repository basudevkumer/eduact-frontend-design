import React from 'react'
import Container from './Container'
import Im1 from '../../assets/images/imk.png'
import Im2 from '../../assets/images/imk2.png'
import pm from '../../assets/images/01.png'
import { Link } from 'react-router'
import { FaArrowRight } from 'react-icons/fa'
import { IoIosCheckmarkCircle } from 'react-icons/io'

const Misson = () => {
  return (
    <section className='py-20 px-4'>
        <Container>
            <div className='grid grid-cols-2'>
                <div className='pr-15'>
                    <img src={Im1} alt="" />
                </div>
                <div className='pt-20'>
                    <div className='flex items-center'>
                        <h4 className='pr-2 text-[#4F5DE4] text-xl font-bold'>About Us</h4>
                        <img src={Im2} alt="" />
                    </div>
                    <h2 className='w-150 text-4xl py-5'>Establishing a community that encourages lifelong learning</h2>
                    <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks </p>
                   
                   {/*  */}
                   <div className='pt-5'>
                    <img src={pm} alt="" />
                   </div>
                   
                   
                    {/*  */}


                     <div className="grid grid-cols-2 gap-y-4 gap-x-2 mt-10">
              <div className="flex items-center gap-x-2">
                <IoIosCheckmarkCircle className="text-[#4F5DE4] text-xl lg:text-[20px] font-bold shrink-0" />
                <h4 className="text-[13px] lg:text-base font-bold">Free Incoming method</h4>
              </div>
              <div className="flex items-center gap-x-2">
                <IoIosCheckmarkCircle className="text-[#F57005] text-xl lg:text-[20px] font-bold shrink-0" />
                <h4 className="text-[13px] lg:text-base font-bold">Provide Best Support</h4>
              </div>
              <div className="flex items-center gap-x-2">
                <IoIosCheckmarkCircle className="text-[#F57005] text-xl lg:text-[20px] font-bold shrink-0" />
                <h4 className="text-[13px] lg:text-base font-bold">Expert Many Teacher</h4>
              </div>
              <div className="flex items-center gap-x-2">
                <IoIosCheckmarkCircle className="text-[#4F5DE4] text-xl lg:text-[20px] font-bold shrink-0" />
                <h4 className="text-[13px] lg:text-base font-bold">Lifetime access</h4>
              </div>
            </div>
                    
                    {/* button */}

                     <div className="mt-10 pb-12.5 flex justify-center lg:justify-start">
              <Link to={"/"}>
                <button className="text-white bg-[#4F5DE4] font-bold text-[18px] flex items-center gap-x-3 py-2 sm:py-4 px-5 sm:px-8 rounded-md bg-none bg-primarys  duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-10  after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer hover:after:h-[500%] hover:after:rotate-0 hover:after:w-full after:duration-300 hover:after:-top-10  gap-2">
                  Try for free
                  <FaArrowRight />
                </button>
              </Link>
            </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Misson