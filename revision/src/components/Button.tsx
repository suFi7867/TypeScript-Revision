import { type } from 'os'
import React from 'react'


interface ButtonProps  {
  handleClick : (event : React.MouseEvent<HTMLButtonElement>)=> void
}

const Button = ({handleClick} : ButtonProps) => {
  return (
    <button  onClick={handleClick} >
      Click
    </button>
  )
}

export default Button
