import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../context/authContext'
import { useToast } from 'react-toastify'

const Navbar = () => {
  const {userData}=useContext(authContext)
  const [name,setName]=useState()
  const [showMenu,setShowMenu]=useState(false)
  useEffect(()=>{
setName(userData?.fullName[0])
  },[])
  console.log(name)
  return (
 <div className=" bg-blue-400 flex items-center justify-around capitalize ">
    <Link to='/' className="lowercase text-3xl  font-bold">shopEx</Link>
    <div className="flex items-center justify-end  space-x-8 mr-32 h-16 font-semibold">

      {!userData ? <div className='flex gap-x-4'>
         <Link className='cursor-pointer' to={'/login'}>Login</Link>
         <Link className='cursor-pointer' to={'/signup'}>Sign Up</Link>
        </div>
        :
        <div className='relative flex items-center gap-x-4'>
          <Link className='cursor-pointer'  to={'/admin/createproduct'}>admin</Link>
          <Link className='cursor-pointer' to={'/logout'}>logout</Link>
          <Link className='hover:bg-gray-200 px-2  cursor-pointer block' to={'/mycart'}>cart</Link>    
          <p className='cursor-pointer bg-white w-9 h-9 rounded-full  flex justify-center text-lg items-center'
          onClick={()=>setShowMenu(!showMenu)}
          >{userData?.fullName[0]}</p>
       {showMenu && <div className='absolute z-10 bg-gray-300 block top-[50px] -right-8   p-2 space-y-2'>
           <Link className='hover:bg-gray-200 px-2 font-extralight cursor-pointer block' to={'/profile'}>profile</Link>      
           <Link className='hover:bg-gray-200 px-2 font-extralight cursor-pointer block' to={'/orders'}>my orders</Link>      
           
        </div>}
          </div>}
          

    </div>
  </div>
  )
}

export default Navbar