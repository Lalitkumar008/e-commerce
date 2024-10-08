import React, { useContext, useEffect } from 'react'
import { authContext } from '../context/authContext'
import { useFetcher, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Profile = () => {
    const {userInfo}=useContext(authContext)
    const navigate=useNavigate()
   useEffect(()=>{
 if(!userInfo){
        toast("login first")
navigate('/login')
    }
   },[])
  return (
    <div className=' flex justify-center  capitalize w-100vw h-[calc(100vh-64px)]'>
        <div className='shadow- mt-4'>
            <p className="shadow-md rounded-md flex justify-center w-[40vw] text-2xl font-sans font-semibold tracking-wide py-4 text-gray-800">User Profile

            </p>
     <div className='space-y-3 p-4'>
           <div className='flex gap-x-4 '>
            <p className='font-semibold'>username : </p>
            <p>{userInfo?.username}</p>
        </div>
        <div className='flex gap-x-4 '>
            <p className='font-semibold'>email : </p>
            <p>{userInfo?.email}</p>
        </div>
     </div>
        </div>
    </div>
  )
}

export default Profile