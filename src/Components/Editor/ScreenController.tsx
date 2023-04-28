import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { setWidth } from '@/Redux/width/screenwidth';
import { useDispatch, useSelector } from 'react-redux'

function ScreenController() {
  const dispatch = useDispatch()

  const width = useSelector(state => state.width.width)


  const handleXSClick = () => {
    if(width === 575   )
    dispatch(setWidth(320));
    else if (width === 320)
    dispatch(setWidth(575));
  };
  console.log(width)

  return (
    <div className="w-full h-4 bg-zinc-300 my-2 flex items-center justify-center">
      <div className="w-72 flex justify-left text-zinc-800 bg-green-500">
        <button className='w-full text-right'  onClick={handleXSClick}>XS</button>
      </div>
      <div className="bg-zinc-700 w-72 flex items-center justify-center text-white">
        <a>
          <FiSettings />
        </a>
        <a>hey</a>
      </div>
      <div className="w-72 flex items-left justify-left text-zinc-800 bg-green-500">
      <button className='w-full text-left'  onClick={handleXSClick}>320</button>
      </div>
    </div>
  );
}

export default ScreenController;
