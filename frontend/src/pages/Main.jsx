import React, { useState } from 'react';
import Header from '../components/Header';
import { BsGrid1X2, BsFillImageFill, BsFolder } from 'react-icons/bs';
import { FaShapes, FaCloudUploadAlt } from 'react-icons/fa';
import { TfiText } from "react-icons/tfi";
import { RxTransparencyGrid } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Main = () => {
    const [state, setState] = useState('');
    const [show, setShow] = useState({
        status: true,
        name: ''
    });

    const setElements = (type, name) => {
        setState(type)
        setShow({
            state: false,
            name
        });
    }
    return (
        <div className='min-w-full h-screen bg-black'>
            <Header />
            <div className='flex h-[calc(100%-60px)] w-screen'>
                <div className='w-[80px] bg-[#18191B] z-50 h-full text-gray-400 overflow-y-auto'>
                    <div onClick={()=>setElements('design', 'design')} className={`${show.name === 'design' ? 'bg-[#252627] text-gray-100' : '' } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><BsGrid1X2 /></span>
                        <span className='text-xs font-medium'>Design</span>
                    </div>
                    <div onClick={()=>setElements('shape', 'shape')} className={`${show.name === 'shape' ? 'bg-[#252627] text-gray-100' : '' } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><FaShapes /></span>
                        <span className='text-xs font-medium'>Shapes</span>
                    </div>
                    <div onClick={()=>setElements('image', 'UploadImage')} className={`${show.name === 'UploadImage' ? 'bg-[#252627] text-gray-100' : '' } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><FaCloudUploadAlt /></span>
                        <span className='text-xs font-medium'>Upload</span>
                    </div>
                    <div onClick={()=>setElements('text', 'text')} className={`${show.name === 'text' ? 'bg-[#252627] text-gray-100' : '' } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><TfiText /></span>
                        <span className='text-xs font-medium'>Text</span>
                    </div>
                    <div onClick={()=>setElements('project', 'projects')} className={`${show.name === 'projects' ? 'bg-[#252627] text-gray-100' : '' } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><BsFolder /></span>
                        <span className='text-xs font-medium'>Project</span>
                    </div>
                    <div onClick={()=>setElements('initImage', 'images')} className={`${show.name === 'images' ? 'bg-[#252627] text-gray-100' : '' } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><BsFillImageFill /></span>
                        <span className='text-xs font-medium'>Images</span>
                    </div>
                    <div onClick={()=>setElements('background', 'background')} className={`${show.name === 'background' ? 'bg-[#252627] text-gray-100' : '' } w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><RxTransparencyGrid /></span>
                        <span className='text-xs font-medium'>BackGround</span>
                    </div>
                </div>
                <div className='w-[calc(100%-75px)] h-full'>
                    <div className={`${show.status ? 'p-0 -left-[350px]' : 'px-8 left-[75px] py-5'} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}>
                        <div onClick={()=>setShow({ name: '', status: true})} className='flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full'><MdKeyboardArrowLeft></MdKeyboardArrowLeft></div>
                        <div>abc</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main