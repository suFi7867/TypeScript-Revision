import { useState } from "react"



const LoggedIn = () => {

    const [isLoggedIn, setisLoggedIn ] = useState(false)

    const handleLogin = ()=>{
        setisLoggedIn(true)
    }
    const handleLogout = ()=>{
        setisLoggedIn(false)
    }


  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        User is {isLoggedIn ? "Logged In" : "Logged Out"}
      </div>
    </div>
  )
}

export default LoggedIn
