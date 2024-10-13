import React, { useContext, useState } from "react";
import { createUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/authContext";
import { toast } from "react-toastify";
import Loader from "./Loader";
const SignUp = () => {
  const navigate=useNavigate();
  const {storeTokenInLS}=useContext(authContext)
  const [userData,setUserData]=useState({
    fullName:"",
    email:"",
    phone:"",
    password:"",
    deliveryAddress:""
  })

  const handleInputChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
setUserData({...userData,[name]:value})
  }
  const handleSubmit=(e)=>{
    if(!userData.fullName || !userData.email || !userData.phone || !userData.password)
      toast.error("please fill form properply")
    e.preventDefault()
    createUser(onSuccess,onFailure,userData)
    console.log(e.target)
  }
  console.log(document.cookie)
  const onSuccess=(e)=>{
    const {token}=e.data.user;
    const msg=e.data.msg;
    
    console.log(e)
storeTokenInLS(token)
toast.success(msg)
// navigate("/")
  }
  const onFailure=(e)=>{
    console.log(e)
    const msg=e.response.data.msg;
    toast.error(msg)
  }
  
  return <div className="text-black  w-[100vw] h-[calc(100vh-64px)] flex justify-center">
   <div className="flex-col py-4   justify-center items-center">
     <p className="flex justify-center w-[40vw] text-2xl font-sans font-semibold tracking-wide py-4 text-gray-800 capitalize">sign up</p>
   <div className="w-[40vw]  bg-geen-400 pb-8 flex justify-center font-semibold">
     <form action="#" onSubmit={handleSubmit} className="space-y-4 shadow-md py-8 px-6 rounded-lg">
<div className=" ">
  <p>Username</p>
<input value={userData.fullName} onChange={handleInputChange} type="text" id="fullName" name="fullName" className="text-black  h-9 w-72  p-2 rounded outline-none border-b-[1px] border-b-black"/>
</div>

<div>
  <p>Email</p>
<input value={userData.email} onChange={handleInputChange} name="email" type="email" id="email" className=" rounded outline-none border-b-[1px] border-b-black h-9 w-72  p-2"/>
</div>
<div>
  <p>Phone</p>
<input value={userData.phone} onChange={handleInputChange} name="phone" type="tel" id="phone" className=" rounded outline-none border-b-[1px] border-b-black h-9 w-72  text-black p-2 "/>
</div>
<div className="">
  <p>Password</p>
<input value={userData.password} onChange={handleInputChange} name="password" type="password" id="password" className="rounded outline-none border-b-[1px]  h-9 w-72  text-black p-2  border-b-black "/>
</div>
<div className="">
  <p className="mb-2">Delivery Address</p>
<textarea value={userData.deliveryAddress} onChange={handleInputChange} name="deliveryAddress" type="" id="password" className="rounded outline-none border-[1px]  h-9 w-72  text-black p-2  font-extralight " rows={3} >
  Delivery address
</textarea>
</div>
<div className=" flex justify-center">

  <button className="bg-blue-400 text-white py-2 px-4 mt-6 tracking-wide rounded hover:bg-blue-500" type="submit">Register</button>
</div>
    </form>
   </div>
   </div>
  </div>;
};

export default SignUp;
