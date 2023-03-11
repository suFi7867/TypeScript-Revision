import React from 'react'


// to pass CSS as Props 
type ContainerCSSProps  = {
   myCSS : React.CSSProperties
}


const Container = ({myCSS} : ContainerCSSProps) => {
  return (
    <div style={myCSS} >
      Text Content goes here
    </div>
  )
}

export default Container
