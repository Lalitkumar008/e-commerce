import React, { useContext, useState } from "react";
import { loginUser } from "../api/auth";
import { Navigate, useNavigate } from "react-router-dom";
// import { authContext } from "../context/authContext";
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate=useNavigate();
//   const {storeTokenInLS,isLoggedIn}=useContext(authContext)
  // console.log(isLoggedIn())
  const [userData,setUserData]=useState({
    email:"",
    password:""
  })
  const handleSubmit=(e)=>{
    console.log(e)
e.preventDefault();
loginUser(onSuccess,onFailure,userData)
  }
  const onSuccess=(e)=>{
    console.log("sucesss>>>>>",e)
    //   storeTokenInLS(e.data.token)
    toast.success(e?.data?.msg)
    navigate('/')
    
  }
  const onFailure=(e)=>{
    // let msg=e.response.data.msg
    //  toast.success("working",{
    //   })
    // toast.error(msg)
  }
  const handleInputChange=(e)=>{
e.preventDefault()
let name=e.target.name
let value=e.target.value
setUserData({...userData,[name]:value})
  }
  
  return <div className="w-[calc(100vw)] h-[calc(100vh-64px)] bg-gray-900 text-white">
<div className="!h-3/4  flex justify-center items-center ">

  <form action="#" className="" onSubmit={handleSubmit}
  
  >
    <div className="my-4 space-y-2">
      <p className="font-semibold tracking-wide">Email</p>
      <input type="email" placeholder="email" className="text-black font-semibold p-2 !w-72 rounded outline-none" name="email" value={userData.email}
      onChange={handleInputChange} />
    </div>
  <div className="my-4 space-y-2">
    <p className="font-semibold tracking-wide">Password</p>
    <input onChange={handleInputChange} type="password" placeholder="password" className="text-black font-semibold p-2 !w-72 rounded outline-none" name="password" value={userData.password} />
  </div>
  <div className="flex justify-center mt-2">
    <button  className="p-2 bg-green-400 m-2 w-20 flex justify-center rounded">Sign In</button>
  </div>
  </form>

</div>
  </div>;
};

export default Login;
