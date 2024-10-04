import React from 'react'

const TemplateDesign = () => {
  return (
    <>
        {
            [1, 2, 3, 4, 5, 6].map((d, i) => <div className='group w-full rounded-md overflow-hidden cursor-pointer bg-[#ffffff12]'>
                <img className='w-full h-full rounded-md overflow-hidden' src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" />
            </div>)
        }
    </>
  )
}

export default TemplateDesign