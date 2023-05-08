import React, { useState } from 'react';
import { saveAs } from 'file-saver';
function CreatePage() {

  const empty = {
    html: `<!DOCTYPE html>
      <html>
        <head>
          <title>My New Page</title>
          <link rel="stylesheet" type="text/css" href="index.css">
        </head>
        <body>
          <h1>Welcome to my new page!</h1>
        </body>
      </html>`,
    css: `body {
        background-color: white;
        color: black;
      }
      
      h1 {
        font-size: 2rem;
        text-align: center;
      }`
  };
  const landing1 = {
    html: `<!DOCTYPE html>
      <html>
        <head>
          <title>Landing Page 1</title>
          <link rel="stylesheet" type="text/css" href="styles.css">
        </head>
        <body>
          <div class="hero">
            <h1>Welcome to Landing Page 1</h1>
            <p>Our product is the best product out there! Click the button below to learn more.</p>
            <button class="cta">Learn More</button>
          </div>
          <div class="features">
            <h2>Features</h2>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
              <li>Feature 4</li>
            </ul>
          </div>
          <div class="testimonials">
            <h2>Testimonials</h2>
            <div class="testimonial">
              <p>"I can't believe how great this product is. It has completely changed my life!"</p>
              <p>- John Doe</p>
            </div>
            <div class="testimonial">
              <p>"This product is amazing. I would recommend it to anyone!"</p>
              <p>- Jane Smith</p>
            </div>
          </div>
        </body>
      </html>`,
    css: `* {
        box-sizing: border-box;
      }
      
      body {
        margin: 0;
        font-family: Arial, sans-serif;
        background-color: #f7f7f7;
      }
      
      .hero {
        background-image: url("https://images.unsplash.com/photo-1522209228453-a724f08e9f31");
        background-size: cover;
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        text-align: center;
      }
      
      h1 {
        font-size: 4rem;
        margin: 0;
        padding: 0;
      }
      
      p {
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        margin-top: 1rem;
      }
      
      .cta {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 1rem 2rem;
        font-size: 1.5rem;
        border-radius: 10px;
        margin-top: 2rem;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;
      }
      
      .cta:hover {
        background-color: #3e8e41;
      }
      
      .features {
        background-color: #ffffff;
        padding: 4rem;
        text-align: center;
      }
      
      h2 {
        font-size: 3rem;
        margin: 0;
        padding: 0;
        margin-bottom: 2rem;
      }
      
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      
      li {
        font-size: 1.5rem;
        margin: 0;
        padding: 0;
        margin-top: 1rem;
        display: inline-block;
        margin-right: 2rem;
        vertical-align: top;
        width: 25%;
        text-align: center;
     
      `}  

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
              <h2 className='text-sm font-semibold  '>Create a new page</h2>
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