import React from 'react'

const Image = () => {
    return (
        <div className='grid grid-cols-2 gap-2'>
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27].map((d, i) => <div className='w-full h-[90px] rounded-md overflow-hidden cursor-pointer'>
                    <img className='w-full h-full object-fill' src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" />
                </div>)
            }
        </div>
    )
}

export default Image