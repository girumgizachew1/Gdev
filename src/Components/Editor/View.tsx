import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { selectWidth, setWidth } from '@/Redux/width/screenLayout';
import MainView from './View/MainView';

function View() {

  const widthx = useSelector(selectWidth);
  const [width, setWidthhere] = useState(widthx);
  const [size, setSize] = useState({ width: width, height: 880 });
  const [isResizing, setIsResizing] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const dispatch = useDispatch()

  useEffect(() => {
    setWidthhere(widthx);
  }, [widthx]);

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      if (isResizing) {
        const delta = e.clientX - startPosition.x;
        setWidthhere(Math.min(Math.max(size.width + delta, 320), 1960));
        dispatch(setWidth(Math.min(Math.max(size.width + delta, 320), 1960)));
      }
    };
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isResizing, startPosition, size.width]);

  useEffect(() => {
    const handleMouseUp = () => {
      setIsResizing(false);
      setSize((prevSize) => ({ ...prevSize, width: width }));
    };
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };

  }, [width]);
  return (
      <div
        style={{
          width: width,
          height: size.height,
          resize: 'horizontal',
          overflow: 'auto',
          position: 'relative',
          minWidth: '320px',
          maxWidth: '1960px',
          minHeight: '320px',
          maxHeight: '870px',
          
        }}
        onMouseDown={(e) => {
          setIsResizing(true);
          setStartPosition({ x: e.clientX, y: e.clientY });
        }}
        className='bg-white border border-cyan-500 p-2'
      >
        {/* main content here */}
        <div className='h-full w-full' >
            <MainView/>
        </div>

      </div>
    
  );
}

export default View;
