import React, { useEffect } from 'react'
import ControlSecond from '../Components/Editor/ControlSecond'
import View from '../Components/Editor/View'
import Control from '../Components/Editor/Control'
import ScreenController from '../Components/controller/ScreenController'
import Navbar from '@/Components/controller/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { selectHtmlTab } from '@/Redux/width/screenLayout'
import dynamic from 'next/dynamic'
const CodeEditor = dynamic(() => import('@/Components/Editor/View/CodeEditor'), { ssr: false })

function Editor() {
    const htmltabcontrol = useSelector(selectHtmlTab)
  
    

    return (
        <div className='flex flex-col w-full h-screen ' >
            <div className='h-10 w-full bg-zinc-800 px-2 z-10' >
                <Navbar/>
            </div>
            <div className='h-8 w-full bg-zinc-800 px-2' >
                <ScreenController />
            </div>
            <div>
                <div className='flex justify-between px-2'>
                    <div  ><Control /></div>
                    <div><View /></div>
                    <div><ControlSecond /></div>
                </div>
            </div>
            <div>
                <CodeEditor/>
            </div>
        </div>
    )
}

export default Editor