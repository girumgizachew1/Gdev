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
  
    const formData = new FormData(event.target);
    const pageName = formData.get('pageName');
    const template = formData.get('template');
    const fileName = formData.get('fileName');
  
    // Create the HTML and CSS files
    const htmlContent = generateHtml(fileName);
    const cssContent = generateCss();
  
    // Save the files
    const htmlFile = new File([htmlContent], `${fileName}.html`, { type: 'text/html' });
    const cssFile = new File([cssContent], `${fileName}.css`, { type: 'text/css' });
    await saveFilesToDisk(htmlFile, cssFile);
  
    closeModal();
  }
  
  function generateHtml(fileName: string): string {
    // Generate the HTML content based on the selected template
    return `<!DOCTYPE html>
  <html>
    <head>
      <title>My New Page</title>
      <link rel="stylesheet" type="text/css" href="${fileName}.css">
    </head>
    <body>
      <h1>Welcome to my new page!</h1>
    </body>
  </html>`;
  }
  
  function generateCss(): string {
    // Generate the CSS content based on the selected template
    return `body {
    background-color: white;
    color: black;
  }
  
  h1 {
    font-size: 2rem;
    text-align: center;
  }`;
  }
  
  async function saveFilesToDisk(htmlFile: File, cssFile: File): Promise<void> {
    try {
      // Save the HTML file
      saveAs(htmlFile, htmlFile.name);
  
      // Save the CSS file
      saveAs(cssFile, cssFile.name);
    } catch (error) {
      console.error(error);
      alert('Failed to save files');
    }
  }
    
  
  return (
    <div className='w-full h-64'>
      <div className='flex justify-between px-3 py-1 h-8'>
        <h1 className='text-sm font-semibold'>Pages:</h1>
        <button className='text-blue-500' onClick={openModal}>New Page +</button>
      </div>
      <div className='w-full h-56 bg-zinc-700 mt-2'>
        {/*file and folder structure*/}
      </div>
      {showModal &&
        <div className='fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center'>
          <div className='absolute top-0 left-0 w-full h-full bg-gray-900 opacity-90  ' onClick={closeModal}></div>

          <div className='z-10 bg-zinc-200 p-6 w-96  rounded shadow-md opacity-100 text-black  space-y-4 px-3'>
            <div className='flex justify-between  py-2 ' >
              <h2 className='text-lg font-semibold  '>Create a new page</h2>
              <button type='button' className="px-2 text-base rounded-full font-semibold text-center text-black transition duration-200 ease-in hover:bg-black hover:text-white focus:outline-none focus:ring-2" onClick={closeModal}>X</button>
          
            </div>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label className='block font-medium mb-1'>Template</label>
                <select name='template' className='border rounded py-2 px-3 w-full'>
                  <option value='template1'>Landing Page 1</option>
                  <option value='template2'>Landing Page 2</option>
                  <option value='template3'>Landing Page 3</option>
                </select>
              </div>
              <div className='mb-4'>
                <label className='block font-medium mb-1'>
                  Page name
                </label>
                <input type='text' name='pageName' className='border rounded py-2 px-3 w-full' />
              </div>
              <div className='mb-4'>
                <label className='block font-medium mb-1'>
                  File Name
                </label>
                <input type='text' name='fileName' className='border rounded py-2 px-3 w-full' />
              </div>
              <div className='mb-4'>
                <label className='block font-medium mb-1'>
                  Save To Project
                </label>
                <input type='text' name='SavetoProject' className='border rounded py-2 px-3 w-full' />
              </div>

              <div className='flex justify-end space-x-2'>
                <button type='button' className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-orange-400 shadow-md hover:text-whtie hover:bg-black focus:outline-none focus:ring-2" onClick={closeModal}>Cancel</button>
                <button type='submit' className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-orange-400 shadow-md hover:text-whtie hover:bg-black focus:outline-none focus:ring-2">Create</button>
              </div>
            </form>
          </div>
        </div>

      }
    </div>
  );
}

export default CreatePage;