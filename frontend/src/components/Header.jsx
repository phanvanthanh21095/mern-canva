import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    const saveImage = () => {

    }
    
    const downloadImage = () => {
        
    }
  return (
    <div className='h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full'>
        <div className='flex justify-between px-10 items-center text-gray-300 h-full'>
            <Link to=''>
                <img className='w-full h-full' src="https://static.canva.com/web/images/8439b51bb7a19f6e65ce1064bc37c197.svg" alt="" />
            </Link>
            <span className='text-xl font-medium'>Mini Canva</span>
            <div className='flex justify-center items-center gap-2 text-gray-300'>
                <button onClick={ saveImage } className='px-3 py-[6px] outline-none rounded-sm bg-[#212122] hover:bg-black font-medium'>Save</button>
                <button onClick={ downloadImage } className='px-3 py-[6px] outline-none rounded-sm bg-[#151516] hover:bg-black font-medium'>Dowload</button>
            </div>
        </div>
    </div>
  )
}

export default Header