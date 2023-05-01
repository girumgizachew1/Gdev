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
import { setWidth , selectWidth } from '@/Redux/width/screenLayout';
import { useDispatch, useSelector } from 'react-redux'
import { selectHtmlTab,selectCssTab, setCssTab ,setHtmlTab} from '@/Redux/width/screenLayout'
function Navbar() {
    const dispatch = useDispatch()
    const width = useSelector(selectWidth)
    const htmltab = useSelector(selectHtmlTab)
    const csstab = useSelector(selectCssTab)
    const handlePhoneClick = () =>{
        dispatch(setWidth(576))
    }
    
    const handleTabletClick = () =>{
        dispatch(setWidth(991))
    }
    
    const handlePcScreen1Click = () =>{
        dispatch(setWidth(1259))
    }
    
    const handlePcScreen2Click = () =>{
        dispatch(setWidth(1960))
    }
    const handlehtmltab = () =>{
        dispatch(setHtmlTab(!htmltab))
      }
    
      const handleCsstab = () =>{
        dispatch(setCssTab(!csstab))
      }
    


    return (
        <div className='flex items-center justify-between text-zinc-300 text-sm px-6' >
            <div className='flex space-x-10' >
                <div className='flex space-x-4 text-base' >
                    <h1 className='my-3 text-zinc-300 text-sm rounded-sm' >Project:</h1>
                    <button className='bg-zinc-700 px-3 my-2 rounded-sm text-xs' >New</button>
                    <button className='bg-zinc-700 px-3 my-2 rounded-sm text-xs' >Edit</button>


                    <a className='bg-zinc-700 px-3 my-3 pt-1 rounded-sm' ><BsFillCloudArrowUpFill /></a>
                    <a className='bg-zinc-700 px-3 my-3 pt-1 rounded-sm' ><FiCodepen /></a>
                    <a className='bg-zinc-700 px-3 my-3 pt-1 rounded-sm' ><MdDelete /></a>
                </div>
                <div className='flex space-x-4 text-base' >
                    <h1 className='my-3 text-zinc-300 text-sm' >Display:</h1>
                    <button onClick={handlehtmltab} className={`${htmltab ?"bg-orange-400 text-zinc-100":"bg-zinc-700"} px-3 my-2 rounded-sm text-xs`} >Html</button>
                    <button onClick={handleCsstab} className={`${csstab ?"bg-orange-400 text-zinc-100":"bg-zinc-700"} px-3 my-2 rounded-sm text-xs`} >Css</button>
                    <button className='bg-zinc-700 px-3 my-2 rounded-sm text-xs' >Code</button>
                    <a className='bg-zinc-700 px-3 my-3 pyb-1 rounded-sm ' ><MdLightMode /></a>
                    <a className='bg-zinc-700 px-3 my-3 py-1 rounded-sm ' ><BsFillPlayFill /></a>
                </div>
            </div>
            <div className='flex space-x-2' >
            <h1 className='my-3 text-zinc-300 text-sm' >Screen:</h1>
                <a onClick={handlePhoneClick} className={`px-3 my-3 pt-1 rounded-sm ${width < 768 && width >= 320 ? " bg-orange-400 text-zinc-100" :"bg-zinc-700"} `} ><SlScreenSmartphone/></a>
                <a onClick={handleTabletClick}  className={`px-3 my-3 pt-1 rounded-sm ${width < 992 && width >= 768 ? " bg-orange-400 text-zinc-100" :"bg-zinc-700"}`} ><SlScreenTablet /></a>
                <a onClick={handlePcScreen1Click} className={`px-3 my-3 pt-1 rounded-sm  ${width < 1260 && width >= 992 ? " bg-orange-400 text-zinc-100" :"bg-zinc-700"}`} ><CgScreen /></a>
                <a onClick={handlePcScreen2Click} className={`px-3 my-3 pt-1 rounded-sm  ${width < 1961 && width >= 1260 ? " bg-orange-400 text-zinc-100" :"bg-zinc-700"} `} ><CgScreenWide /></a>
                <h1 className='my-3 text-zinc-300 text-sm' >control:</h1>
                <a className='bg-zinc-700 px-3 my-3 pt-1 rounded-sm' ><BiRefresh/></a>
                <a className='bg-zinc-700 px-3 my-3 pt-1 rounded-sm' ><IoArrowUndoOutline /></a>
                <a className='bg-zinc-700 px-3 my-3 pt-1 rounded-sm ' ><IoArrowRedoOutline /></a>
                <h1 className='p-2 text-zinc-300' >user:</h1>
                <button className='bg-zinc-700 px-3 my-2 rounded-sm' >Logout</button>

            </div>


        </div>
    )
}

export default Navbar