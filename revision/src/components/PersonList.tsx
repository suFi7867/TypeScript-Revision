import React from 'react'

interface element {
    first : String,
    last : string
}


type PersonListProps = {
    data : element[]
}


const PersonList = ({data} : PersonListProps) => {
  return (
    <div>
     {
        data?.map((el)=> (
            <h5>{el.first} , {el.last}</h5>
        ))
     }
    </div>
  )
}

export default PersonList
