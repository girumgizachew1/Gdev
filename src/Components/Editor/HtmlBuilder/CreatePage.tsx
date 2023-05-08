import React, { useState } from 'react';
import { saveAs } from 'file-saver';
function CreatePage() {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    closeModal();
  }
  
 
  
  return (
    <div className='w-full h-10'>
      <div className='flex justify-between px-3 py-1 h-8'>
        <h1 className='text-sm font-semibold'>Pages:</h1>
        <button className='text-blue-500' onClick={openModal}>New Page +</button>
      </div>
      <div className='w-full h-56 bg-zinc-700 mt-2'>
        {/*file and folder structure*/}
      </div>
      {showModal &&

          <div className='z-10 fixed top-20 left-80 bg-zinc-800 text-xs text-white p-6 w-fit  rounded shadow-md opacity-100 text-black  space-y-4 px-3'>
            <div className='flex justify-between  py-2 ' >
              <h2 className='text-lg font-semibold  '>Create a new page</h2>
              <button type='button' className="px-2 text-base rounded-full font-semibold text-center text-black transition duration-200 ease-in hover:bg-black hover:text-white focus:outline-none focus:ring-2" onClick={closeModal}>X</button>
          
            </div>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label className='block font-medium mb-1'>Template</label>
                <select name='template' className='bg-zinc-700  rounded py-2 px-3 w-full'>
                  <option value='template1'>Empty</option>
                  <option value='template2'>Landing Page 1</option>
                  <option value='template3'>Landing Page 2</option>
                </select>
              </div>
              <div className='mb-4'>
                <label className='block font-medium mb-1'>
                  Page name
                </label>
                <input type='text' name='pageName' className='bg-zinc-700 rounded py-2 px-3 w-full' />
              </div>


              <div className='flex justify-end space-x-2'>
                <button type='submit' className="px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-orange-400 shadow-md hover:text-whtie hover:bg-black focus:outline-none focus:ring-2">Create</button>
              </div>
            </form>
          </div>
       

      }
    </div>
  );
}

export default CreatePage;