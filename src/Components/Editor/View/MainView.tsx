import { selectCssCode } from '@/Redux/Csscontent/csscode';
import { selectHtmlCode } from '@/Redux/Htmlcontent/htmlcode';
import { selectJsCode } from '@/Redux/Jscontent/jscontent';
import React from 'react';
import { useSelector } from 'react-redux';

function MainView() {
  const html = useSelector(selectHtmlCode)
  const css = useSelector(selectCssCode)
  const js = useSelector(selectJsCode)
 
  const iframeContent = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
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
