import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
 <div className=" bg-blue-400 flex items-center justify-around uppercase ">
    <Link to='/' className="text-3xl  font-bold">MERN</Link>
    <div className="flex items-center justify-end  space-x-8 mr-32 h-16 font-semibold">

      <Link to={'/login'}>Login</Link>
      <Link to={'/signup'}>Sign Up</Link>
      <Link to={'/admin/createproduct'}>admin</Link>
    </div>
  </div>
  )
}

export default Navbar