import React from 'react'
import ControlSecond from '../Components/Editor/ControlSecond'
import View from '../Components/Editor/View'
import Control from '../Components/Editor/Control'
import ScreenController from '../Components/controller/ScreenController'
import Navbar from '@/Components/controller/Navbar'

function Editor() {
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
                    <div ><Control /></div>
                    <div><View /></div>
                    <div><ControlSecond /></div>
                </div>

            </div>
        </div>
    )
}

export default Editor