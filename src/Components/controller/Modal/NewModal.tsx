import { selectProjectId, setProjectId } from '@/Redux/ProjectStructure/Project'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
function NewModal() {
  const dispatch = useDispatch()
  const projectid = useSelector(selectProjectId)
  const [projectname, setProjectName]= useState('')
  const [projectdesc, setProjectDesc]= useState('')
  const userID = '6458bf76ecbd1e5de8caa9ec'
  const handleNewProject = async (event:any) => {
    event.preventDefault();
    const response = await fetch('/api/Projects/projects', {
      method: 'POST',
      body: JSON.stringify({ projectname, projectdesc, userID }),
      headers: { 'Content-Type': 'application/json' },
    })
  
    if (response.ok) {
      const newProject = await response.json()
      dispatch(setProjectId(newProject.insertedId))
    } else {    
        console.log('hey2')

      // Handle error case
    }
  }
  return (
    <div className="fixed top-10 left-10 w-fit h-fit bg-zinc-900 bg-opacity-95 flex z-50 text-xs p-6">
      <form onSubmit={handleNewProject} >
        <div className='mb-4'>
          <label className='block font-medium mb-1'>
            Project name
          </label>
          <input type='text' value={projectname} onChange={(e)=>{ setProjectName(e.target.value) } }  name='ProjectName' className='bg-zinc-700 rounded py-2 px-3 w-full' />
        </div>
        <div className='mb-4'>
          <label className='block font-medium mb-1'>
            Project Description
          </label>
          <input type='text' name='ProjectDesc' value={projectdesc} onChange={(e)=>{ setProjectDesc(e.target.value) } } className='bg-zinc-700 rounded py-2 px-3 w-full' />
        </div>
        <div className='flex justify-end space-x-2'>
          <button type='submit' className="px-4 py-1 rounded-sm text-sm font-semibold text-center text-white transition duration-200 ease-in bg-orange-400 shadow-md hover:text-whtie hover:bg-black focus:outline-none focus:ring-2">Create</button>
        </div>
      </form>
    </div>
  )
}

export default NewModal