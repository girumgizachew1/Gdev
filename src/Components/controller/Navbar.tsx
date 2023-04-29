import React from 'react'
import { BsFillCloudArrowUpFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiRefresh } from 'react-icons/bi';
import { IoArrowRedoOutline } from 'react-icons/io5';
import { IoArrowUndoOutline } from 'react-icons/io5';

import { FiCodepen } from 'react-icons/fi';
import { CgScreenWide } from 'react-icons/cg';
import { CgScreen } from 'react-icons/cg';
import { SlScreenTablet } from 'react-icons/sl';
import { SlScreenSmartphone } from 'react-icons/sl';


FiCodepen
function Navbar() {
    return (
        <div className='flex items-center justify-between text-zinc-300 text-sm px-6' >
            <div className='flex space-x-10' >
                <div className='flex space-x-4 text-base' >
                    <h1 className='my-3 text-zinc-300 text-sm rounded-sm' >Project:</h1>
                    <a className='bg-zinc-700 px-3 my-2 rounded-sm' ><BsFillCloudArrowUpFill /></a>
                    <a className='bg-zinc-700 px-3 my-2 rounded-sm' ><FiCodepen /></a>
                    <a className='bg-zinc-700 px-3 my-2 rounded-sm' ><MdDelete /></a>
                </div>
                <div className='flex space-x-4 text-base' >
                    <h1 className='my-3 text-zinc-300 text-sm' >Display:</h1>
                    <button className='bg-zinc-700 px-3 my-2 rounded-sm text-xs' >Html</button>
                    <button className='bg-zinc-700 px-3 my-2 rounded-sm text-xs' >Css</button>
                    <button className='bg-zinc-700 px-3 my-2 rounded-sm text-xs' >Code</button>
                    <a className='bg-zinc-700 px-3 my-2 rounded-sm ' ><MdLightMode /></a>
                    <a className='bg-zinc-700 px-3 my-2 rounded-sm ' ><BsFillPlayFill /></a>
                </div>
            </div>
            <div className='flex space-x-2' >
            <h1 className='my-3 text-zinc-300 text-sm' >Screen:</h1>
                <a className='bg-zinc-700 px-3 my-2 rounded-sm' ><SlScreenSmartphone/></a>
                <a className='bg-zinc-700 px-3 my-2 rounded-sm' ><SlScreenTablet /></a>
                <a className='bg-zinc-700 px-3 my-2 rounded-sm ' ><CgScreen /></a>
                <a className='bg-zinc-700 px-3 my-2 rounded-sm ' ><CgScreenWide /></a>
                <h1 className='my-3 text-zinc-300 text-sm' >control:</h1>
                <a className='bg-zinc-700 px-3 my-2 rounded-sm' ><BiRefresh/></a>
                <a className='bg-zinc-700 px-3 my-2 rounded-sm' ><IoArrowUndoOutline /></a>
                <a className='bg-zinc-700 px-3 my-2 rounded-sm ' ><IoArrowRedoOutline /></a>
                <h1 className='p-2 text-zinc-300' >user:</h1>
                <button className='bg-zinc-700 px-3 my-2 rounded-sm' >Login</button>
                <button className='bg-zinc-700 px-3 my-2 rounded-sm' >Register</button>
            </div>


        </div>
    )
}

export default Navbar