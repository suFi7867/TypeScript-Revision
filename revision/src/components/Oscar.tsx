import React from 'react'


/// To trigger Child Component
interface OscarProps {
    children : React.ReactNode
}


const Oscar = ({children} : OscarProps) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default Oscar
