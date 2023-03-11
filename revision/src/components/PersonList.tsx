import React from 'react'

interface element {
    first : string,
    last : string
}


interface PersonListProps  {
    data : Array<element>,
    // data : element[]
    personName : element
}


const PersonList = ({data, personName} : PersonListProps) => {
  return (
    <div>
     {
        data?.map((el)=> (
            <h5>{el.first} , {el.last}</h5>
        ))
     }


     <h1>{personName.first}</h1>
    </div>
  )
}

export default PersonList
