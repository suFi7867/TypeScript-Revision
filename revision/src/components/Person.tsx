import React from 'react'
import { personProps } from './types/person.type'


const Person = ({name, Number} : personProps) => {
  return (
    <div>
      Hey My Name is {name.first} {name.last} === {Number}
    </div>
  )
}

export default Person
