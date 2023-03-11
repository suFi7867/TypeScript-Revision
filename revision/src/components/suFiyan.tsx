import React from 'react'

type FirstComponentProps = {
  name : string,
  data : number,
  isLoggedIn : boolean
}



const FirstComponent = (props : FirstComponentProps) => {
  return (
    <div>
      Hi {props.name}, my number is {props.data}
    </div>
  )
}

export default FirstComponent
