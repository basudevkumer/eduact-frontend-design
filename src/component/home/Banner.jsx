import React from 'react'

import Container from '../commonComponent/Container'
import { Link } from 'react-router'
import { FaArrowRight } from 'react-icons/fa'
import Banner2 from '../../assets/images/banner2.png'

const Banner = () => {
  return (
    <div className="lg:py-56 py-20 bg-center px-5 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${Banner2})` }}>
      <Container>
        <h1 className="lg:text-6xl text-[35px] text-primaryTwo font-bold lg:leading-[70px] leading-10 lg:w-[600px] w-65">
          Come along <br /> as we begin our learning journey
        </h1>
        <p className="text-base text-[#697585] leading-8 lg:py-10 py-5 lg:w-[440px] w-60">
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary,
        </p>
        <Link to={"/"}>

          <button className="text-white bg-[#F57005] font-bold text-[18px] flex items-center gap-x-3 py-2 sm:py-4 px-5 sm:px-8 rounded-md bg-none bg-secondarys  duration-300 relative after:w-1/5 after:h-[200%] after:bg-[#F6F5F521] z-0 after:-z-10  after:absolute after:top-0 after:right-0 overflow-hidden after:rotate-30 hover:cursor-pointer hover:after:h-[500%] hover:after:rotate-0 hover:after:w-full after:duration-300 hover:after:-top-10
}">
            Try for fee
            <FaArrowRight />
          </button>
        </Link>
      </Container>
    </div>
  )
}

export default Banner