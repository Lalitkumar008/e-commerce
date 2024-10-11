import React, { useDebugValue, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'

const Logout = () => {
    const navigate=useNavigate()
    useEffect(()=>{
  localStorage.removeItem("token")
localStorage.removeItem("userId")
window.location.reload()
navigate('/')
    },[])
  return (
    <div>
        <Loader />
    </div>
  )
}

export default Logout