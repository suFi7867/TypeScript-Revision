import React from 'react'
import { Name } from './types/person.type'




interface PersonListProps  {
    data : Array<Name>,
    // data : Name[]
    personName : Name
}


const PersonList = ({data, personName} : PersonListProps) => {
  return (
    <div>
     {
        data?.map((el : Name)=> (
            <h5 key={el.first}  >{el.first} , {el.last}</h5>
        ))
     }


     <h1>{personName.first}</h1>
    </div>
  )
}

export default PersonList
