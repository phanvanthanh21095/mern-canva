import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { BsGrid1X2, BsFillImageFill, BsFolder } from 'react-icons/bs';
import { FaShapes, FaCloudUploadAlt } from 'react-icons/fa';
import { TfiText } from "react-icons/tfi";
import { RxTransparencyGrid } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import TemplateDesign from '../components/main/TemplateDesign';
import MyImages from '../components/MyImages';
import Projects from '../components/Projects';
import Image from '../components/Image';
import CreateComponent from '../components/CreateComponent';

const Main = () => {
    const [state, setState] = useState('');
    const [current_component, setCurrentComponent] = useState('');
    const [color, setColor] = useState('');
    const [image, setImage] = useState('');
    const [rotate, setRotate] = useState('');

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

    const moveElement = () => {
        console.log('moveElement')
    }

    const resizeElement = () => {
        console.log('resizeElement')
    }

    const rotateElement = () => {
        console.log('rotateElement')
    }

    const createShape = (name, type) => {
        const style = {
            id: components.length + 1,
            name: name,
            type,
            left: 10,
            top: 10,
            opacity: 1,
            width: 200,
            height: 150,
            rotate,
            z_index: 2,
            color: '#3c3c3d',
            setCurrentComponent: (a) => setCurrentComponent(a),
            remove_background: () => setImage(''),
            moveElement,
            resizeElement,
            rotateElement
        }
        setComponents([...components, style]);
    }

    const [components, setComponents] = useState([
        {
            name: 'main_frame',
            type: 'rect',
            id: Math.floor(Math.random() * 100 + 1),
            height: 400,
            width: 500,
            z_index: 1,
            color: '#fff',
            image: '',
            setCurrentComponent: (a) => setCurrentComponent(a)
        }
    ]);

    const removeComponent = () => {
        const temp = components.filter(c => c.id !== current_component.id);
        setComponents(temp);
        setCurrentComponent('');
    }

    const remove_background = () => {
        const com = components.find(c => c.id === current_component.id);
        const temp = components.filter(c => c.id !== current_component.id);
        com.image = '';
        setImage('');
        setComponents([...temp, com]);
    }

    useEffect(() => {
        if (current_component) {
            const index = components.findIndex(c => c.id === current_component.id);
            const temp = components.filter(c => c.id !== current_component.id);

            if (current_component.name === 'main_frame' && image) {
                components[index].image = image || current_component.image;
            }
            components[index].color = color || current_component.color;

            setComponents([...temp, components[index]]);
        }
    }, [color, image]);

    return (
        <div className='min-w-full h-screen bg-black'>
            <Header />
            <div className='flex h-[calc(100%-60px)] w-screen'>
                <div className='w-[80px] bg-[#18191B] z-50 h-full text-gray-400 overflow-y-auto'>
                    <div onClick={() => setElements('design', 'design')} className={`${show.name === 'design' ? 'bg-[#252627] text-gray-100' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><BsGrid1X2 /></span>
                        <span className='text-xs font-medium'>Design</span>
                    </div>
                    <div onClick={() => setElements('shape', 'shape')} className={`${show.name === 'shape' ? 'bg-[#252627] text-gray-100' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><FaShapes /></span>
                        <span className='text-xs font-medium'>Shapes</span>
                    </div>
                    <div onClick={() => setElements('image', 'UploadImage')} className={`${show.name === 'UploadImage' ? 'bg-[#252627] text-gray-100' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><FaCloudUploadAlt /></span>
                        <span className='text-xs font-medium'>Upload</span>
                    </div>
                    <div onClick={() => setElements('text', 'text')} className={`${show.name === 'text' ? 'bg-[#252627] text-gray-100' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><TfiText /></span>
                        <span className='text-xs font-medium'>Text</span>
                    </div>
                    <div onClick={() => setElements('project', 'projects')} className={`${show.name === 'projects' ? 'bg-[#252627] text-gray-100' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><BsFolder /></span>
                        <span className='text-xs font-medium'>Project</span>
                    </div>
                    <div onClick={() => setElements('initImage', 'images')} className={`${show.name === 'images' ? 'bg-[#252627] text-gray-100' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><BsFillImageFill /></span>
                        <span className='text-xs font-medium'>Images</span>
                    </div>
                    <div onClick={() => setElements('background', 'background')} className={`${show.name === 'background' ? 'bg-[#252627] text-gray-100' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
                        <span className='text-2xl'><RxTransparencyGrid /></span>
                        <span className='text-xs font-medium'>BackGround</span>
                    </div>
                </div>
                <div className='w-[calc(100%-75px)] h-full'>
                    <div className={`${show.status ? 'p-0 -left-[350px]' : 'px-8 left-[75px] py-5'} bg-[#252627] h-full fixed transition-all w-[350px] z-30 duration-700`}>
                        <div onClick={() => setShow({ name: '', status: true })} className='flex absolute justify-center items-center bg-[#252627] w-[20px] -right-2 text-slate-300 top-[40%] cursor-pointer h-[100px] rounded-full'>
                            <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
                        </div>
                        {
                            state === 'design' &&
                            <div className='grid grid-cols-2 gap-2'>
                                <TemplateDesign />
                            </div>
                        }
                        {
                            state === 'shape' &&
                            <div className='grid grid-cols-3 gap-2'>
                                <div onClick={() => createShape('shape', 'rect')} className='h-[90px] bg-[#3c3c3d] cursor-pointer'></div>
                                <div onClick={() => createShape('shape', 'circle')} className='h-[90px] bg-[#3c3c3d] cursor-pointer rounded-full'></div>
                                <div onClick={() => createShape('shape', 'trangle')} style={{ clipPath: 'polygon(50% 0,100% 100%,0 100%)' }} className='h-[90px] bg-[#3c3c3d] cursor-pointer'></div>
                            </div>
                        }
                        {
                            state === 'image' &&
                            <div>
                                <MyImages />
                            </div>
                        }
                        {
                            state === 'text' &&
                            <div className='grid grid-cols-1 gap-2'>
                                <div className='bg-[#3c3c3d] cursor-pointer font-bold p-3 text-white text-xl rounded-sm'>
                                    <h2>Add a text</h2>
                                </div>
                            </div>
                        }
                        {
                            state === 'project' &&
                            <div>
                                <Projects />
                            </div>
                        }
                        {
                            state === 'initImage' &&
                            <div className='h-[80vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
                                <Image />
                            </div>
                        }
                        {
                            state === 'background' &&
                            <div className='h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
                                <div className='grid grid-cols-2 gap-2'>
                                    {
                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27].map((img, i) => <div onClick={() => setImage('https://files.fullstack.edu.vn/f8-prod/courses/7.png')} className='w-full h-[90px] rounded-md overflow-hidden cursor-pointer'>
                                            <img className='w-full h-full object-fill' src="https://files.fullstack.edu.vn/f8-prod/courses/7.png" alt="" />
                                        </div>)
                                    }
                                </div>
                            </div>
                        }
                    </div>

                    <div className='w-full h-full flex'>
                        <div className={`flex justify-center relative items-center h-full ${!current_component ? 'w-full' : 'w-[calc(100%-250px)] overflow-hidden'}`}>
                            <div className='m-w-[650px] m-h-[480px] flex justify-center items-center'>
                                <div className='w-auto relative h-auto overflow-hidden' id='main_design'>
                                    {
                                        components.map((c, i) => <CreateComponent key={i} info={c} current_component={current_component} removeComponent={removeComponent} />)
                                    }
                                </div>
                            </div>
                        </div>
                        {
                            current_component && <div className='h-full w-[250px] text-gray-300 bg-[#252627] px-3 py-2'>
                                <div className='flex gap-3 flex-col items-start h-full px-3 justify-start'>
                                    <div className='flex gap-4 justify-start items-start'>
                                        <span>Color:</span>
                                        <label htmlFor="color" className='w-[30px] h-[30px] cursor-pointer rounded-sm' style={{ background: `${current_component.color && current_component.color !== '#fff' ? current_component.color : 'gray'}` }}></label>
                                        <input type="color" onChange={(e) => setColor(e.target.value)} className='invisible' id='color' />
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main