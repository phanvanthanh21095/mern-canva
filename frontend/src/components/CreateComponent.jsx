import React from 'react';
import { BsTrash } from 'react-icons/bs';
import Element from './Element';

const CreateComponent = ({ info, current_component, removeComponent }) => {
  const randValue = Math.floor(Math.random() * 100);
  let html = '';
  if (info.name === 'main_frame') {
    html = <div onClick={() => info.setCurrentComponent(info)} className={`hover:border-[2px] hover:border-indigo-500 shadow-md`} style={{
      width: `${info.width}px`,
      height: `${info.height}px`,
      backgroundColor: `${info.color}`,
      zIndex: `${info.z_index}`,
    }}>{
        info.image && <img className='w-full h-full' src={info.image} alt={info.image} />
      }</div>;
  }

  if (info.name === 'shape' && info.type === 'rect') {
    html = <div id={randValue} onClick={() => info.setCurrentComponent(info)} className='absolute group hover:border-[2px] hover:border-indigo-500' style={{
      width: `${info.width}px`,
      height: `${info.height}px`,
      backgroundColor: `${info.color}`,
      zIndex: `${info.z_index}`,
      opacity: `${info.opacity}`,
      left: `${info.left}px`,
      top: `${info.top}px`,
      transform: info.rotate ? `rotate(${info.rotate}deg)` : 'rotate(0deg)',
    }}>
      <Element id={randValue} info={info} exId="" />
      {
        current_component.id === info.id && <div onClick={() => removeComponent(info.id)} className='p-2 bg-white absolute top-0 right-0 hidden group-hover:block cursor-pointer rounded-md'>
          <BsTrash />
        </div>
      }

    </div>;
  }

  if (info.name === 'shape' && info.type === 'circle') {
    html = <div id={randValue} onClick={() => info.setCurrentComponent(info)} className='absolute group hover:border-[2px] hover:border-indigo-500' style={{
      zIndex: `${info.z_index}`,
      left: `${info.left}px`,
      top: `${info.top}px`,
      transform: info.rotate ? `rotate(${info.rotate}deg)` : 'rotate(0deg)',
    }}>
      <Element id={randValue} info={info} exId={`${randValue}c`} />

      <div id={`${randValue}c`} className='rounded-full' style={{
        width: `${info.width}px`,
        height: `${info.height}px`,
        backgroundColor: `${info.color}`,
        opacity: `${info.opacity}`,
      }}>
        {
          current_component.id === info.id && <div onClick={() => removeComponent(info.id)} className='p-2 bg-white absolute top-0 right-0 hidden group-hover:block cursor-pointer rounded-md'>
            <BsTrash />
          </div>
        }
      </div>

    </div>;
  }

  if (info.name === 'shape' && info.type === 'trangle') {
    html = <div id={randValue} onClick={() => info.setCurrentComponent(info)} className='absolute group hover:border-[2px] hover:border-indigo-500' style={{
      zIndex: `${info.z_index}`,
      left: `${info.left}px`,
      top: `${info.top}px`,
      transform: info.rotate ? `rotate(${info.rotate}deg)` : 'rotate(0deg)',
    }}>
      <Element id={randValue} info={info} exId={`${randValue}t`} />

      <div id={`${randValue}t`} style={{
        width: `${info.width}px`,
        height: `${info.height}px`,
        backgroundColor: `${info.color}`,
        opacity: `${info.opacity}`,
        clipPath: 'polygon(50% 0,100% 100%,0 100%)'
      }}>
      </div>
      {
        current_component.id === info.id && <div onClick={() => removeComponent(info.id)} className='p-2 bg-white absolute top-0 right-0 hidden group-hover:block cursor-pointer rounded-md'>
          <BsTrash />
        </div>
      }

    </div>;
  }
  return html;
}

export default CreateComponent 