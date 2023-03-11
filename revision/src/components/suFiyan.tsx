import React from 'react'

type FirstComponentProps = {
  name : string
}



const FirstComponent = (props : FirstComponentProps) => {
  return (
    <div>
      Hi {props.name}
    </div>
  )
}

export default FirstComponent
