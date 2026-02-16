import React from 'react'
import Container from './commonComponent/Container'
import Capsule from './commonComponent/Capsule'
import Bredcrumb from './commonComponent/Bredcrumb'

const TeacherPart = () => {
  return (
    <div>
        <div className='bg-black'>
              <Bredcrumb slug={"Teacher"} slugHeading={"Home  /  Teacher"} />
            </div>
        <Container>
            
            <div className='main py-[120px]'>

                <div className="one flex gap-9 ">
                    <Capsule teacherName={"Devon Lane"} department={"UI/UX Designer"} />
                    <Capsule teacherName={"Devon Lane"} department={"UI/UX Designer"} />
                    <Capsule teacherName={"Devon Lane"} department={"UI/UX Designer"} />
                </div>
                <div className="two flex gap-9 pt-[50px]">
                    <Capsule teacherName={"Devon Lane"} department={"UI/UX Designer"} />
                    <Capsule teacherName={"Devon Lane"} department={"UI/UX Designer"} />
                    <Capsule teacherName={"Devon Lane"} department={"UI/UX Designer"} />
                </div>

            </div>
        </Container>

    </div>
  )
}

export default TeacherPart