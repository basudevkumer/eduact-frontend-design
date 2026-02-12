import React from 'react'
import Container from '../commonComponent/Container'
import { FaChevronRight } from "react-icons/fa";

function AboutSection() {
    return (
        <div>
            <Container>
                <div className='grid grid-cols-2 py-25'>
                    <div className='pr-[64px]'>
                        <div className='relative'>
                            <div className='absolute top-0 right-0'>
                                <img src="/B Img 02.png" alt="B Img 02.png" className='w-[451px] h-[651px]' />
                            </div>
                            <div className='absolute top-[211px] right-[346px]'>
                                <img src="/S Img 01.png" alt="S Img 01.png" />
                            </div>
                            <div className='absolute top-[115px] -left-15'>
                                <img src="/Group.png" alt="Group.png" />
                            </div>

                            <div className='absolute left-42 top-[520px] z-10'>
                                <img src="/01.png" alt="01.png" />
                            </div>

                            <div className='absolute right-50 top-[585px] rotate-y-30 -z-10'>
                                <img src="/Vector.png" alt="Vector.png" className='w-[237p] h-[114px]' />
                            </div>

                            <div className='absolute right-28 top-[625px]'>
                                <img src="/plane.png" alt="plane.png" />
                            </div>

                            <div className='absolute top-0 left-[150px] -z-10'>
                                <img src="/Frame.png" alt="Frame.png" />
                            </div>

                            <div className=' bg-white rounded text-center px-12 pb-4 pt-6 absolute top-[50px] left-0'>
                                <h2 className='text-[40px] text-[#F57005] leading-[61.7px] font-bold'>+230</h2>
                                <p>Awesome</p>
                            </div>

                            <div className='absolute top-0 left-4'>
                                <img src="/cup.png" alt="cup.png" />
                            </div>

                            <div className='absolute left-0 top-[500px] -z-10'>
                                <img src="/06.png" alt="06.png" />
                            </div>
                        </div>
                    </div>
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
                            <div className='flex justify-left items-center gap-6'>
                                <img src="/target 2.png" alt="target 2.png" className='w-[50px] h-[50px]' />
                                <h1>Our Mission</h1>
                            </div>
                            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks  The generated Lorem Ipsum is therefore always free from repetition</p>
                        </div>

                        <div>
                            <div className='flex justify-left items-center gap-6'>
                                <img src="/vision 1.png" alt="vision 1.png" />
                                <h1>Our vision</h1>
                            </div>
                            <p>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks  The generated Lorem Ipsum is therefore always free from repetition</p>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default AboutSection
