import React from 'react'
import Container from './Container'
import po from '../../assets/images/imk2.png'
import Base from '../../assets/images/base3.png'
import ServiceCard from './ServiceCard'

const OurService = () => {
  return (
    <section className='px-5 py-20 bg-[#F6F6F6]' style={{backgroundImage:`url(${Base})`}} >
        <Container>
            <div>
                <div className='flex items-center justify-center '>
                <h5 className='pr-4 text-2xl text-[#4F5DE4]'>Our Service</h5>
                <img src={po} alt="" />
            </div>
            <h3 className=' text-3xl font-bold w-210 text-center pl-110 pb-50 pt-5'>Creating a Lifelong Learning Best Community </h3>
            </div>

            <div className='grid grid-cols-4 gap-x-5'>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
            </div>
        </Container>
    </section>
  )
}

export default OurService
