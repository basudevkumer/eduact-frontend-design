import React from 'react'
import Container from '../commonComponent/Container'
import { FaChevronRight } from "react-icons/fa";

function AboutSection() {
    return (
        <div>
            <Container>
                <div className='grid grid-cols-2 py-25'>
                    <div>Grid 1</div>
                    <div>
                        <div className='flex items-center gap-4'>
                            <p className='tet-[24px] font-bold text-[#4F5DE4] leading-6.5'>About us </p>
                            <div className='flex items-center text-[10px]'>
                                <FaChevronRight className='text-[#F57005]' />
                                <FaChevronRight className='text-[#F57005]' />
                                <FaChevronRight className='text-[#F57005]' />
                                <FaChevronRight className='text-[#F57005]' />
                            </div>
                        </div>

                        <div>
                            <h1 >Establishing a community that encourages lifelong learning</h1>
                        </div>

                        <div>
                            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks  The generated Lorem Ipsum is therefore always free from repetition</p>
                        </div>

                        <div>
                            <h1>Our Mission</h1>
                            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks  The generated Lorem Ipsum is therefore always free from repetition</p>
                        </div>

                        <div>
                            <h1>Our vision</h1>
                            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks  The generated Lorem Ipsum is therefore always free from repetition</p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default AboutSection
