import React, { useContext, useState } from "react";
import { loginUser } from "../api/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";
import {  toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate=useNavigate();
  const {storeTokenInLS,storeUserIdInLS,userId}=useContext(authContext)
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
    toast.success(e?.data?.msg)
    storeTokenInLS(e.data.token)
    storeUserIdInLS(e.data.userId)
    // localStorage.setItem("token", e.data.token);
    // localStorage.setItem("userId",e.data.userId );
    navigate('/')
  }
  console.log(userData)
  const onFailure=(e)=>{
    console.log(e)
    const msg= e.response.data.msg
    console.log(msg)
    toast.error(msg)
  }
  const handleInputChange=(e)=>{
e.preventDefault()
let name=e.target.name
let value=e.target.value
setUserData({...userData,[name]:value})
  }
  
  return <div className="text-black  w-[calc(100vw)] h-[calc(100vh-64px)]  ">
<div className="!h-3/4  flex justify-center items-center ">

  <form action="#" className="shadow-md p-4 rounded-md " onSubmit={handleSubmit}
  
  >
         <p className="flex justify-center  text-2xl font-sans font-semibold tracking-wide py-4 text-gray-800">Login!</p>

    <div className="my-4 space-y-2">
      <p className="font-semibold tracking-wide text-black">Email</p>
      <input type="email" placeholder="email" className="text-black font-extralight p-2 !w-72 rounded outline-none border-b-[1px] border-b-black" name="email" value={userData.email}
      onChange={handleInputChange} />
    </div>
  <div className="my-4 space-y-2">
    <p className="font-semibold tracking-wide text-black">Password</p>
    <input onChange={handleInputChange} type="password" placeholder="password" className="text-black font-extralight p-2 !w-72 rounded outline-none border-b-[1px] border-b-black" name="password" value={userData.password} />
  </div>
  <div className="flex justify-center mt-2">
    <button  className="p-2 text-white bg-blue-400 m-2 w-20 flex justify-center rounded">Sign In</button>
  </div>
  </form>

</div>
  </div>;
};

export default Login;
