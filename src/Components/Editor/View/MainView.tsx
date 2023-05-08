import { selectCssCode } from '@/Redux/Csscontent/csscode';
import { selectHtmlCode } from '@/Redux/Htmlcontent/htmlcode';
import React from 'react';
import { useSelector } from 'react-redux';

function MainView() {
  const html = useSelector(selectHtmlCode)
  const css = useSelector(selectCssCode)
  const content = `
    <style>
      .my-container ${css}
    </style>
    <div class="my-container">
      ${html}
    </div>
  `;

  return (
    <div className='my-container' >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export default MainView;
