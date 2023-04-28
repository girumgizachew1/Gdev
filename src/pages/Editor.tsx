import React from 'react'
import ControlSecond from '../Components/Editor/ControlSecond'
import View from '../Components/Editor/View'
import Control from '../Components/Editor/Control'
import ScreenController from '../Components/Editor/ScreenController'

function Editor() {
    return (
        <div className='flex flex-col w-full h-screen justify-between ' >
            <div className='h-8 w-full bg-zinc-700 px-2' >
                <ScreenController />
            </div>
            <div className='flex justify-between px-2'>
                <div ><Control /></div>
                <div><View /></div>
                <div><ControlSecond /></div>
            </div>
            <div className='h-8 w-full bg-zinc-700 px-2' >

            </div>

        </div>
    )
}

export default Editor