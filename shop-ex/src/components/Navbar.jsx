import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { authContext } from '../context/authContext'
import { useToast } from 'react-toastify'

const Navbar = () => {
  const {userData,isLoggedIn}=useContext(authContext)
  const [name,setName]=useState()
  const [showMenu,setShowMenu]=useState(false)
  const dropdownRef = useRef(null);
  const [searchedProduct,setSearchedProduct]=useState()
  const [countCartProducts,setCountCartProducts]=useState(0)

  useEffect(()=>{
let cartlength=new Set(userData?.cart)
setCountCartProducts(cartlength)
  },[userData])
  console.log(countCartProducts)
    // Close dropdown when clicking outside of it
       
        console.log(countCartProducts)
  useEffect(() => {

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMenu(false); // Close dropdown if clicked outside
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [])
  useEffect(()=>{
setName(userData?.fullName[0])
  },[])

  return (
 <div className="px-8 py-4 w-[1oovw] bg-black text-white flex items-center justify-between capitalize ">
<div className='flex  items-center w-1/2 justify-between '>
      <Link to='/' className="normal-case text-3xl px-6 font-bold">shopEx</Link>
     <input type='text' value={searchedProduct} onChange={(e)=>setSearchedProduct(e.target.value)} className='text-black px-3 text-xs h-7 outline-none rounded-md bg-gray-200 w-1/2 ' placeholder='search products'/>
</div>
    <div className="flex items-center   font-">
        
      {!isLoggedIn() ? <div className='font-mono flex gap-x-4'>
         <Link className='cursor-pointer' to={'/login'}>Login</Link>
         <Link className='cursor-pointer' to={'/signup'}>Sign Up</Link>
        </div>
        :
        <div className='relative flex items-center gap-x-4'>
          <Link className='cursor-pointer'  to={'/admin/createproduct'}>admin</Link>
          <Link className='cursor-pointer' to={'/logout'}>logout</Link>
          <Link className=' px-2  cursor-pointer block' to={'/mycart'}>cart ({userData && countCartProducts.size })</Link>    
          <p className='cursor-pointer bg-white text-black w-9 h-9 rounded-full  flex justify-center text-lg items-center'
          onClick={()=>setShowMenu(true)}
          >{userData?.fullName[0]}</p>
       {showMenu && <div ref={dropdownRef} className='absolute z-10 bg-zinc-900 block top-[52px] -right-6   p-2 space-y-2'>
           <Link className='hover:bg-gray-800 px-2 font-extralight cursor-pointer block' to={'/profile'}>profile</Link>      
           <Link className='hover:bg-gray-800 px-2 font-extralight cursor-pointer block' to={'/orders'}>my orders</Link>      
           
        </div>}
          </div>}
          

    </div>
  </div>
  )
}

export default Navbar