import './resultPanel.css'

import React from 'react'

const Input = ({input, output, setInput}) => {
  return (
    <div className='input-body'>

        {/* result section */}
        <div className='result'>
        <input type="text" className='result2' value={output} placeholder="Result"
        readOnly/>
        </div>

        {/* input section */}
        <div>
            <input type="text" className='result2' value={input} placeholder="Input"
            onChange={(e)=>setInput(e.target.value)}/>
        </div>
        <div className='text'></div>
    </div>
  )
}

export default Input