import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { useSelector ,useDispatch } from 'react-redux';
import { setHtmlTab } from '@/Redux/width/screenLayout';
import { selectHtmlTab } from '@/Redux/width/screenLayout'
function Control() {
  const dispatch = useDispatch()
  const handleClose = () =>{
    dispatch(setHtmlTab(false))
  }
  const htmltabcontrol = useSelector(selectHtmlTab)

  return (
    <div className={` w-72 h-full fixed left-0 z-10 ` }>
        <div className={` bg-zinc-800 border-4 border-zinc-700 text-white w-full h-full ${htmltabcontrol ? "":"hidden"}   `} >
            <div className='bg-zinc-700 h-8 w-full px-4 flex justify-between'>
              <h1 className='text-base py-1 ' >HTML</h1>
              <a onClick={handleClose} className='py-2' ><AiOutlineClose/></a>
            </div>

        </div>
    </div>
  )
}

export default Control