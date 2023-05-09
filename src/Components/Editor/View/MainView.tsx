import { selectCssCode } from '@/Redux/Csscontent/csscode';
import { selectHtmlCode, sethtmlcode } from '@/Redux/Htmlcontent/htmlcode';
import { selectJsCode } from '@/Redux/Jscontent/jscontent';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function MainView() {
  const dispatch = useDispatch()
  const html = useSelector(selectHtmlCode)
  const css = useSelector(selectCssCode);
  const js = useSelector(selectJsCode);

  const handleHtmlChange = (event:any) => {
    
    dispatch(sethtmlcode(event.target.innerHTML))
    console.log(html)
  };

  const iframeContent = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        <div contentEditable onChange={handleHtmlChange}>${html}</div>
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <div className='w-full' >
      <iframe className='w-full h-screen' srcDoc={iframeContent}></iframe>
    </div>
  );
}

export default MainView;
