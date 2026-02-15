import React from 'react'
import MG from '../../assets/images/img.png'
import Container from '../commonComponent/Container'

const Banner = () => {
    return (
        <section className='px-4 py-10 bg-[#F6F6F6]'>
            <Container>
                <div className='grid grid-cols-2'>
                    {/* Left Side */}
                    <div>
                        <h2 className='w-150 font-bold text-7xl'>Come along as we begin our learning journey</h2>
                        <p className='pt-10 w-110 pb-10 text-[#697585]'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>
                        <button><a href="#" className='bg-[#F57005] px-8 py-5 rounded-xl text-white text-lg'>Try for fee</a></button>
                    </div>
                    {/* Right Side */}
                    <div>
                        <img src={MG} alt="" />
                    </div>
                    <div>
                        
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner