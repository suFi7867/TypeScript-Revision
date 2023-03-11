import React from 'react'

interface HeadingProps {
    children : string
}

//// Children text
const Heading = ({children} : HeadingProps) => {
  return (
    <div>
      <h1>{children}</h1>
    </div>
  )
}


export default Heading
