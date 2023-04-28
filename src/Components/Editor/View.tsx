import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function View() {

  const widthx = useSelector(state => state.width.width)
  console.log(widthx)
  const [size, setSize] = useState({ width: 991, height: 859 });
  const [isResizing, setIsResizing] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });


  return (
      <div
        style={{
          width: size.width,
          height: size.height,
          resize: 'horizontal',
          overflow: 'auto',
          position: 'relative',
          minWidth: '320px',
          maxWidth: '1600px',
          minHeight: '320px',
          maxHeight: '870px',

        }}
        className='bg-zinc-800 border-4 border-zinc-500'
      >
        {/* main content here */}

      </div>
    
  );
}

export default View;
