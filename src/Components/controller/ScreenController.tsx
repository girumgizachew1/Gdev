import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { setWidth, selectWidth } from '@/Redux/width/screenLayout';
import { useDispatch, useSelector } from 'react-redux'

function ScreenController() {
 
  const dispatch = useDispatch()
  const width = useSelector(selectWidth)



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
      dispatch(setWidth(1259));
    else
      dispatch(setWidth(992));

  };
  const handleXLClick = () => {
    if (width === 1260)
      dispatch(setWidth(1599));
    else
      dispatch(setWidth(1260));

  };
  return (
    <div className="w-full h-4 bg-zinc-300 my-2 flex items-center justify-center font-normal text-xs">
      <div className={`w-72 flex items-left justify-left  border-l-2 border-white ${width < 1961 && width >= 1260 ? " bg-orange-400 text-zinc-100" : width < 1260 ? "text-zinc-800 bg-zinc-300" : "bg-zinc-600 text-white"} `}>
        <button className='w-full text-right pr-1' onClick={handleXLClick}>XL</button>
      </div>
      <div className={`w-36 flex items-left justify-left  border-l-2 border-white ${width < 1260 && width >= 992 ? " bg-orange-400 text-zinc-100" : width < 992 ? "text-zinc-800 bg-zinc-300" : "bg-zinc-600 text-white"} `}>
        <button className='w-full text-right pr-1' onClick={handleLGClick}>LG</button>
      </div>
      <div className={`w-28 flex items-left justify-left  border-l-2 border-white ${width < 992 && width >= 768 ? " bg-orange-400 text-zinc-100" : width < 768 ? "text-zinc-800 bg-zinc-300" : "bg-zinc-600 text-white"} `}>
        <button className='w-full text-right pr-1' onClick={handleMDClick}>MD</button>
      </div>
      <div className={`w-24 flex items-left justify-left  border-l-2 border-white ${width < 768 && width >= 576 ? " bg-orange-400 text-zinc-100" : width < 576 ? "text-zinc-800 bg-zinc-300" : "bg-zinc-600 text-white"} `}>
        <button className='w-full text-right pr-1' onClick={handleSMClick}>SM</button>
      </div>

      <div className={`w-32 flex justify-left   border-l-2 border-white ${width < 576 ? " bg-orange-400 text-zinc-100" : "bg-zinc-600 text-white"} `}>
        <button className='w-full text-right pr-1' onClick={handleXSClick}>XS</button>
      </div>

      <div className="bg-zinc-800 w-80 p-4 my-2 flex items-center justify-between text-white space-x-10">
        <a>
          <FiSettings />
        </a>
        <h1 className='flex my-2 text-sm' >X:{width}px  Y:880px</h1>
        <p></p>
      </div>

      <div className={`w-32 flex justify-left   border-r-2 border-white ${width < 576 ? " bg-orange-400 text-zinc-100" : "bg-zinc-600 text-white"} `}>
        <button className='w-full text-left pl-1' onClick={handleXSClick}>320</button>
      </div>

      <div className={`w-24 flex items-left justify-left  border-r-2 border-white ${width < 768 && width >= 576 ? " bg-orange-400 text-zinc-100" : width < 576 ? "text-zinc-800 bg-zinc-300" : "bg-zinc-600 text-white"} `}>
        <button className='w-full text-left pl-1' onClick={handleSMClick}>576</button>
      </div>

      <div className={`w-28 flex items-left justify-left  border-r-2 border-white ${width < 992 && width >= 768 ? " bg-orange-400 text-zinc-100" : width < 768 ? "text-zinc-800 bg-zinc-300" : "bg-zinc-600 text-white"} `}>
        <button className='w-full text-left pl-1' onClick={handleMDClick}>768</button>
      </div>
      <div className={`w-36 flex items-left justify-left  border-r-2 border-white ${width < 1260 && width >= 992 ? " bg-orange-400 text-zinc-100" : width < 992 ? "text-zinc-800 bg-zinc-300" : "bg-zinc-600 text-white"} `}>
        <button className='w-full text-left pl-1' onClick={handleLGClick}>992</button>
      </div>
      <div className={`w-72 flex items-left justify-left  border-l-2 border-white ${width < 1961 && width >= 1260 ? " bg-orange-400 text-zinc-100" : width < 1260 ? "text-zinc-800 bg-zinc-300" : "bg-zinc-600 text-white"} `}>
        <button className='w-full text-right pr-1' onClick={handleXLClick}>XL</button>
      </div>
    </div>
  );
}

export default ScreenController;
