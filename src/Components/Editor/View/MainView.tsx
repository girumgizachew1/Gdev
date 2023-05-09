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
  const [htmlContent, setHtmlContent] = useState(html);
  const handleHtmlChange = (event:any) => {
    setHtmlContent(event.target.innerHTML);
    dispatch(sethtmlcode(event.target.innerHTML))
  };

  const iframeContent = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        <div contentEditable onInput={handleHtmlChange}>${htmlContent || 'Type something here'}</div>
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
