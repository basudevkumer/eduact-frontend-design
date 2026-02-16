import React from 'react'
import Bredcrumb from './commonComponent/Bredcrumb'
import Container from './commonComponent/Container'

const LoginPart = () => {
  return (
    <div>
        <div className='bg-black text-center pt-[174px] pb-[154px]'>
        <h2 className='text-[50px] font-bold font-urbanist text-white capitalize'>login</h2>
        <p className='text-white text-[20px] font-normal font-urbanist pt-5'>Home  /  Course</p>
    </div>
    <Container>
       <div className='py-[120px]'>
         <div className='bg-[#F6F6F6] py-10 px-[50px] flex rounded-[10px]'>
            <span className='font-urbanist font-normal text-[#2A254D]'>We have a demo account setup</span>
           <p className='font-urbanist font-semibold text-[#2A254D]'> Username: demo and Password: </p>
           <span className='font-urbanist font-semibold text-[#F57005]'>demo</span>
        </div>
           
        <div className='grid grid-cols-2'>
          <div className='my-15 border-r'>
            <h3 className='font-urbanist font-bold text-[32px] text-[#2A254D] mb-[40px]'>Login</h3>
          <input type="text"
          placeholder='User Name or  Email Address*'
          className='py-6 ps-6 outline-none bg-[#F6F6F6] font-semibold text-[16px] w-124 rounded-[4px] text-[#697585] ' />

           <input type="Password"
          placeholder='Password*'
          className='py-6 ps-6 outline-none w-124 rounded-[4px] bg-[#F6F6F6] font-semibold text-[16px] text-[#697585] mt-5' />
           <div>
            <div className='flex mt-[30px]'>
              <div className='flex items-center'>
                <div className='w-5 h-5 bg-[#D9D9D9]'></div>
                <p className='ml-[10px]'>Remember Me?</p>
              </div>
              <p className=' ml-[225px]'>Forget Password?</p>
            </div>
           </div>
           <button className='py-5 px-8 hover:bg-amber-600 duration-300 text-white bg-[#F57005] rounded-[10px] mt-10'>Login</button>
          </div>

          <div className='pl-[104px]'>
             <div className='py-15'>
            
            <h3 className='font-urbanist font-bold text-[32px] text-[#2A254D] mb-10'>Register</h3>
          <input type="text"
          placeholder='User Name'
          className='py-6 ps-6 outline-none bg-[#F6F6F6] font-semibold text-[16px] w-124 rounded-[4px] text-[#697585] ' />

           <input type="Password"
          placeholder='Password*'
          className='py-6 ps-6 outline-none w-124 rounded-[4px] bg-[#F6F6F6] font-semibold text-[16px] text-[#697585] mt-5' />
           <div>
            <div className='flex mt-[30px]'>
              <div className='flex items-center'>
                <div className='w-5 h-5 bg-[#D9D9D9]'></div>
                <p className='ml-[10px]'>I Accept Company Privacy Policy</p>
              </div>
              {/* <p className=' ml-[225px]'>Forget Password?</p> */}
            </div>
           </div>
           <button className='py-5 ps-6 w-32.5 hover:bg-amber-600 duration-300 text-white bg-[#F57005] rounded-[10px] mt-10'>Register</button>
          </div>
          </div>
        </div>
       </div>
    </Container>
    </div>
  )
}

export default LoginPart