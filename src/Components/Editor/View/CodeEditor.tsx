import { selectCodeTab } from '@/Redux/width/screenLayout'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import dynamic from 'next/dynamic'
import 'ace-builds/src-noconflict/ace';
const AceEditor = dynamic(() => import('react-ace'), { ssr: false })
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/theme-twilight';
import { useDispatch } from 'react-redux';
import { sethtmlcode } from '@/Redux/Htmlcontent/htmlcode';
import { setcsscode } from '@/Redux/Csscontent/csscode';
function CodeEditor() {
    const dispatch = useDispatch()
    const [htmlCode, setHtmlCode] = useState('');
    const [cssCode, setCssCode] = useState('');
    const codeTabContol = useSelector(selectCodeTab)
    function handleHtmlChange(value: string) {
        dispatch(sethtmlcode(value))
        setHtmlCode(value);
    }
    function handleCssChange(value: string) {
        dispatch(setcsscode(value))
        setCssCode(value);
    }
    return (
        <div className='bottom-0 left-80 right-80 fixed h-[40vh] w-[105vh]' >
            <div className={`ml-4 bg-zinc-900 w-full border-6 border-zinc-500 h-full rounded-sm ${codeTabContol ? "" : "hidden"}  `} >
                <div className='flex flex-col w-full h-full' >
                    <div className='h-8 w-full flex justify-between ' >
                        <h1 className='text-zinc-400 text-sm ml-2 mt-2' > Code</h1>
                        <button className='bg-zinc-900 text-zinc-600 my-1 px-2 mr-2' >x</button>
                    </div>
                    <div className='h-full w-full flex ' >
                        <div className='h-full w-full bg-zinc-900' >
                            <AceEditor
                                mode="html"
                                className='w-full'
                                fontSize={14}
                                theme="twilight"
                                value={htmlCode}
                                onChange={handleHtmlChange}
                                name="html-editor"
                                editorProps={{ $blockScrolling: true }}
                            />
                        </div>
                        <div className='h-full w-full bg-zinc-900' >
                        <AceEditor
                                mode="css"
                                className='w-full'
                                fontSize={14}
                                theme="twilight"
                                value={cssCode}
                                onChange={handleCssChange}
                                name="html-editor"
                                editorProps={{ $blockScrolling: true }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodeEditor
