import React from 'react'

interface statusProps{
    status : "loading" | "success" |  "error" 
}


const Status = ({status} : statusProps) => {

    let message ;

    if(status == "loading"){
        message = "Loading......"
    }

    if(status == "success"){
        message = "Data Fetched Successfully"
    }
    
    if(status == "error"){
        message = "Something Went Wrong"
    }
    
    

  return (
    <div>
   <h3>Status = {message}</h3>
    </div>
  )
}

export default Status
