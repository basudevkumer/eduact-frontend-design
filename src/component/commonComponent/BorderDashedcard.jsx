import React from 'react'

function BorderDashedcard() {

    const borderDashed = [
        { id: 1, rating: "30.3k", title: "student enrolled" },
        { id: 2, rating: "40.3k", title: "student enrolled" },
        { id: 3, rating: "50.3k", title: "student enrolled" },
        { id: 4, rating: "60.3k", title: "student enrolled" },
    ]

    return (
        <div className='grid grid-cols-4 gap-6'>
            {borderDashed.map((item) => (
                <div
                    key={item.id}
                    className='border-2 border-dashed border-[#4F5DE4] rounded-[14px] bg-white px-6 py-4 w-[303px] h-[180px] flex flex-col justify-center items-center text-center mb-10'
                >
                    <h2 className='text-[50px] font-bold leading-[60px] text-[#F57005]'>
                        {item.rating}
                    </h2>
                    <p className='capitalize'>{item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default BorderDashedcard
