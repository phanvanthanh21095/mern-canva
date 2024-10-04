import React from 'react';
import Image from './Image';

const MyImages = () => {
    return (
        <div>
            <div className='w-full h-[40px] flex justify-center items-center bg-purple-500 rounded-sm text-white mb-3'>
                <label htmlFor="image" className='text-center cursor-pointer'>Upload Image</label>
                <input type="file" id='image' className='hidden' />
            </div>
            <div className='h-[77vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
                <Image />
            </div>
        </div>
    )
}

export default MyImages