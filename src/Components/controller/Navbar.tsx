import React, { useEffect, useState } from 'react'
import { BsFillCloudArrowUpFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { MdLightMode, MdDarkMode } from 'react-icons/md';
import { BsFillPlayFill } from 'react-icons/bs';
import { BiRefresh } from 'react-icons/bi';
import { IoArrowRedoOutline } from 'react-icons/io5';
import { IoArrowUndoOutline } from 'react-icons/io5';
import { FiCodepen } from 'react-icons/fi';
import { FaCaretDown } from 'react-icons/fa';
import { CgScreenWide } from 'react-icons/cg';
import { CgScreen } from 'react-icons/cg';
import { SlScreenTablet } from 'react-icons/sl';
import { SlScreenSmartphone } from 'react-icons/sl';
import { setWidth, selectWidth, selectCodeTab, setCodeTab } from '@/Redux/width/screenLayout';
import { useDispatch, useSelector } from 'react-redux'
import { selectHtmlTab, selectCssTab, setCssTab, setHtmlTab } from '@/Redux/width/screenLayout'
import NewModal from './Modal/NewModal';
import EditModal from './Modal/EditModal';
import { selectProjectId, setProjectId } from '@/Redux/ProjectStructure/Project';
function Navbar() {
    const dispatch = useDispatch()
    const width = useSelector(selectWidth)
    const htmltab = useSelector(selectHtmlTab)
    const csstab = useSelector(selectCssTab)
    const codetab = useSelector(selectCodeTab)

    const [newModal, setNewModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const projectid = useSelector(selectProjectId)
    const handlePhoneClick = () => {
        dispatch(setWidth(576))
    }

    const handleTabletClick = () => {
        dispatch(setWidth(991))
    }

    const handlePcScreen1Click = () => {
        dispatch(setWidth(1259))
    }

    const handlePcScreen2Click = () => {
        dispatch(setWidth(1960))
    }
    const handlehtmltab = () => {
        dispatch(setHtmlTab(!htmltab))
    }

    const handleCsstab = () => {
        dispatch(setCssTab(!csstab))
    }
    const handleCodetab = () => {
        dispatch(setCodeTab(!codetab))
    }

    const newModalHandler = () => {
        setNewModal(!newModal)
    }
    //this is the list of projects
    const [selectedProject, setSelectedProject] = useState('');
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('/api/Projects/projects', { method: 'GET', });
            const data = await response.json();
            setProjects(data);
        };

        fetchProjects();
    }, []);

    const handleProjectClick = (project: any) => {

        dispatch(setProjectId(project._id))
        setSelectedProject(project.projectname)
        setEditModal(!editModal)

        // perform any action on project selection
    };
    return (
        <div className='flex items-center justify-between text-zinc-300 text-sm px-6' >
            <div className='flex space-x-10' >
                <div className='flex space-x-4 text-base' >
                    <a className="">
                        <img
                            className="brand-logo__icon"
                            src="/logo2.png" width={40} height={30}
                            alt="Girum gizachew logo"
                        />
                    </a>
                    <button onClick={newModalHandler} className='bg-zinc-700 px-3 my-2 rounded-sm text-xs ' >New</button>

                    {newModal && <NewModal />}
                    <div className='flex'>
                        <div className='bg-zinc-700 px-3 pt-2  my-2 text-xs'>
                            {selectedProject || 'Select Project'}
                        </div>
                        <button onClick={() => { setEditModal(!editModal) }} className='bg-orange-400 px-3 my-2 ' ><FaCaretDown /></button>
                    </div>
                    {projects.length > 0 && editModal && (
                        <div className="fixed top-10 left-40 w-fit h-fit bg-zinc-900 bg-opacity-95 flex z-50 text-xs p-6">
                            {projects.map((project: any) => (
                                <button
                                    key={project._id}
                                    onClick={() => handleProjectClick(project)}
                                    className='block w-full px-4 py-2 text-left hover:bg-zinc-600'
                                >
                                    {project.projectname}
                                </button>
                            ))}
                        </div>
                    )}



                    <a className='bg-zinc-700 px-3 my-3 pt-1 rounded-sm' ><BsFillCloudArrowUpFill /></a>
                    <a className='bg-zinc-700 px-3 my-3 pt-1 rounded-sm' ><FiCodepen /></a>
                    <a className='bg-zinc-700 px-3 my-3 pt-1 rounded-sm' ><MdDelete /></a>
                </div>
                <div className='flex space-x-4 text-base' >
                    <h1 className='my-3 text-zinc-300 text-sm' >Display:</h1>
                    <button onClick={handlehtmltab} className={`${htmltab ? "bg-orange-400 text-zinc-100" : "bg-zinc-700"} px-3 my-2 rounded-sm text-xs`} >Html</button>
                    <button onClick={handleCsstab} className={`${csstab ? "bg-orange-400 text-zinc-100" : "bg-zinc-700"} px-3 my-2 rounded-sm text-xs`} >Css</button>
                    <button  onClick={handleCodetab} className={`${codetab ? "bg-orange-400 text-zinc-100" : "bg-zinc-700"} px-3 my-2 rounded-sm text-xs`} >Code</button>
                    <a className='bg-zinc-700 px-3 my-3 pyb-1 rounded-sm ' ><MdLightMode /></a>
                    <a className='bg-zinc-700 px-3 my-3 py-1 rounded-sm ' ><BsFillPlayFill /></a>
                </div>
            </div>
            <div className='flex space-x-2' >
                <h1 className='my-3 text-zinc-300 text-sm' >Screen:</h1>
                <a onClick={handlePhoneClick} className={`px-3 my-3 pt-1 rounded-sm ${width < 768 && width >= 320 ? " bg-orange-400 text-zinc-100" : "bg-zinc-700"} `} ><SlScreenSmartphone /></a>
                <a onClick={handleTabletClick} className={`px-3 my-3 pt-1 rounded-sm ${width < 992 && width >= 768 ? " bg-orange-400 text-zinc-100" : "bg-zinc-700"}`} ><SlScreenTablet /></a>
                <a onClick={handlePcScreen1Click} className={`px-3 my-3 pt-1 rounded-sm  ${width < 1260 && width >= 992 ? " bg-orange-400 text-zinc-100" : "bg-zinc-700"}`} ><CgScreen /></a>
                <a onClick={handlePcScreen2Click} className={`px-3 my-3 pt-1 rounded-sm  ${width < 1961 && width >= 1260 ? " bg-orange-400 text-zinc-100" : "bg-zinc-700"} `} ><CgScreenWide /></a>
                <h1 className='my-3 text-zinc-300 text-sm' >control:</h1>
                <a className='bg-zinc-700 px-3 my-3 pt-1 rounded-sm' ><BiRefresh /></a>
                <a className='bg-zinc-700 px-3 my-3 pt-1 rounded-sm' ><IoArrowUndoOutline /></a>
                <a className='bg-zinc-700 px-3 my-3 pt-1 rounded-sm ' ><IoArrowRedoOutline /></a>
                <h1 className='p-2 text-sm text-zinc-300' >user:</h1>
                <button className='bg-zinc-700 px-3 my-2 rounded-sm' >Logout</button>

            </div>


        </div>
    )
}

export default Navbar