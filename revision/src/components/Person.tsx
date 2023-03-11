import React from 'react'

type personProps = {
  name : { 
    first : string,
    last : string
  },
  Number? : number
}

const Person = ({name, Number} : personProps) => {
  return (
    <div>
      HJey My Name is {name.first} {name.last} === {Number}
    </div>
  )
}

export default Person
