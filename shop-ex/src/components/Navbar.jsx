import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../context/authContext'

const Navbar = () => {
  const {userInfo}=useContext(authContext)
  console.log(userInfo)
  return (
 <div className=" bg-blue-400 flex items-center justify-around uppercase ">
    <Link to='/' className="lowercase text-3xl  font-bold">shopEx</Link>
    <div className="flex items-center justify-end  space-x-8 mr-32 h-16 font-semibold">

      {!userInfo ? <div className='flex gap-x-4'>
         <Link className='cursor-pointer' to={'/login'}>Login</Link>
         <Link className='cursor-pointer' to={'/signup'}>Sign Up</Link>
        </div>:<div className='flex gap-x-4'>
          <Link className='cursor-pointer'  to={'/admin/createproduct'}>admin</Link>
          <Link className='cursor-pointer' to={'/logout'}>logout</Link>
          <Link className='cursor-pointer' to={'/profile'}>profile</Link>          
          </div>}
          <Link className='cursor-pointer' to={'/mycart'}>cart</Link>

    </div>
  </div>
  )
}

export default Navbar