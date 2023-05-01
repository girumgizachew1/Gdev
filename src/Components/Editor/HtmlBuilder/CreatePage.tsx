import React from 'react'

function CreatePage() {
  return (
    <div className='w-full h-64' >
      <div className='flex justify-between px-3 py-1 h-8 ' >
        <h1 className='text-sm font-semibold' >Pages:</h1>
        <button className='text-blue-500' >New Page +</button>
      </div>
      <div className='w-full h-56 bg-zinc-700 mt-2 ' >
        {/*file and folder structure*/}
      </div>
    </div>

  )
}

export default CreatePage