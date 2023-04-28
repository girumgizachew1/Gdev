import React from 'react'
import ControlSecond from './Components/Editor/ControlSecond'
import View from './Components/Editor/View'
import Control from './Components/Editor/Control'
import ScreenController from './Components/Editor/ScreenController'

function Editor() {
    return (
        <div className='flex flex-col w-full' >
            <div className='h-8 w-full bg-zinc-700 px-2' >
                    <ScreenController/>
              
            </div>
            <div className='flex' >
                <Control />
                <View />
                <ControlSecond />
            </div>
        </div>
    )
}

export default Editor