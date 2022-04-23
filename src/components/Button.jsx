import './Button.css'
import React from 'react'

const Button = ({view,color,handleClick,id}) => {
  return (
    <div className='button-body' id={id} onClick={()=>{handleClick(view)}} style={{backgroundColor:color}}>
        <h3>{view}</h3>
    </div>
  )
}

export default Button