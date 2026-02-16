
import Container from '../commonComponent/Container'
import PopularCourse from '../commonComponent/PopularCourse'
import { FaChevronRight } from "react-icons/fa";


const Courses = () => {
    return (
        <>
            <section>
                <div className="bg-[url('/src/assets/images/commonPage.png')] pt-43.5 pb-38.5">
                    <Container>
                        <div className="text-center">
                            <h3 className="text-[35px] font-bold text-white uppercase">
                                Course
                            </h3>
                            <p className="text-[20px] text-white">Home / Course</p>
                        </div>
                    </Container>
                </div>
                <div className="py-30">
                    <Container>
                        <div className="pt-20 flex justify-between items-center">
                            <PopularCourse />
                            <PopularCourse />
                            <PopularCourse />
                        </div>
                        <div className="pt-20 flex justify-between">
                            <PopularCourse />
                            <PopularCourse />
                            <PopularCourse />
                        </div>
                        <div className="flex mt-15 gap-x-4 justify-center">
                            <div className="text-[#2A254D]  h-10 w-10 rounded-[10px] text-sm font-semibold hover:bg-[#F57005] hover:border-[#F57005] hover:text-white duration-300 cursor-pointer border-2 border-[#E4E4E4] relative">
                                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">1</p>
                            </div>
                            <div className="text-[#2A254D]  h-10 w-10 rounded-[10px] text-sm font-semibold hover:bg-[#F57005] hover:border-[#F57005] hover:text-white duration-300 cursor-pointer border-2 border-[#E4E4E4] relative">
                                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">2</p>
                            </div>
                            <div className="text-[#2A254D] h-10 w-10 rounded-[10px] text-sm font-semibold hover:bg-[#F57005] hover:border-[#F57005] hover:text-white duration-300 cursor-pointer border-2 border-[#E4E4E4] relative">
                                <FaChevronRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </Container>
                </div>
            </section>


        </>
    )
}

export default Courses