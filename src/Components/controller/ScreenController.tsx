import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { setWidth } from '@/Redux/width/screenwidth';
import { useDispatch, useSelector } from 'react-redux'

function ScreenController() {
  const dispatch = useDispatch()
  const width = useSelector(state => state.width.width)



  const handleXSClick = () => {
    if (width === 320)
    dispatch(setWidth(575));
    else    
    dispatch(setWidth(320));

  };

  const handleSMClick = () => {
    if (width === 576)
    dispatch(setWidth(767));
    else
    dispatch(setWidth(576));

  };
  const handleMDClick = () => {
    if (width === 768)
    dispatch(setWidth(991));
    else
    dispatch(setWidth(768));
  };
  const handleLGClick = () => {
    if (width === 992)
    dispatch(setWidth(1260));
    else
    dispatch(setWidth(992));

  };
  console.log(width)

  return (
    <div className="w-full h-4 bg-zinc-300 my-2 flex items-center justify-center font-normal">
      <div className={`w-full flex items-left justify-left  border-l-2 border-white ${width < 1260 && width >= 992   ? " bg-green-400 text-zinc-800": width < 992 ? "text-zinc-800 bg-zinc-300" :"bg-zinc-600 text-white"} `}>
        <button className='w-full text-right pr-1'  onClick={handleLGClick}>LG</button>
      </div>
      <div className={`w-40 flex items-left justify-left  border-l-2 border-white ${width < 991 && width >= 768   ? " bg-green-400 text-zinc-800": width < 768 ? "text-zinc-800 bg-zinc-300" :"bg-zinc-600 text-white"} `}>
        <button className='w-full text-right pr-1'  onClick={handleMDClick}>MD</button>
      </div>
      <div className={`w-40 flex items-left justify-left  border-l-2 border-white ${width < 768 && width >= 576   ? " bg-green-400 text-zinc-800": width < 576 ? "text-zinc-800 bg-zinc-300" :"bg-zinc-600 text-white"} `}>
        <button className='w-full text-right pr-1'  onClick={handleSMClick}>SM</button>
      </div>
      
      <div className={`w-40 flex justify-left   border-l-2 border-white ${width < 576 ? " bg-green-400 text-zinc-800": "bg-zinc-600 text-white"} `}>
        <button className='w-full text-right pr-1'  onClick={handleXSClick}>XS</button>
      </div>
      
      <div className="bg-zinc-700 w-72 flex items-center justify-center text-white">
        <a>
          <FiSettings />
        </a>
        <a>hey</a>
      </div>
      
      <div className={`w-40 flex items-left justify-left bg-zinc-300 border-r-2 border-white ${width < 576 ? " bg-green-400 text-zinc-800": "bg-zinc-600 text-white"} `}>
      <button className='w-full text-left pl-1'  onClick={handleXSClick}>320</button>
      </div>

      <div className={`w-40 flex items-left justify-left  border-r-2 border-white ${width < 768 && width >= 576   ? " bg-green-400 text-zinc-800": width < 576 ? "text-zinc-800 bg-zinc-300" :"bg-zinc-600 text-white"} `}>
      <button className='w-full text-left pl-1'  onClick={handleSMClick}>576</button>
      </div>

      <div className={`w-40 flex items-left justify-left  border-r-2 border-white ${width < 991 && width >= 768   ? " bg-green-400 text-zinc-800": width < 768 ? "text-zinc-800 bg-zinc-300" :"bg-zinc-600 text-white"} `}>
      <button className='w-full text-left pl-1'  onClick={handleMDClick}>768</button>
      </div>
      <div className={`w-full flex items-left justify-left  border-r-2 border-white ${width < 1260 && width >= 992   ? " bg-green-400 text-zinc-800": width < 992 ? "text-zinc-800 bg-zinc-300" :"bg-zinc-600 text-white"} `}>
      <button className='w-full text-left pl-1'  onClick={handleLGClick}>992</button>
      </div>
    </div>
  );
}

export default ScreenController;
