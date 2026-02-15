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
                        <h2>Come along as we begin our learning journey</h2>
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