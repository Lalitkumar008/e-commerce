import React, { useEffect, useState } from "react";
import { getUserInfo } from "../api/auth";
import { useFetcher, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const authContext = React.createContext();
const AuthProvider = ({ children }) => {
  const [token,setToken]=useState()
  const [userId,setUserId]=useState()
  const [userData,setUserData]=useState()
  // const [isLoggedIn,setIsLoggedIn]=useState()
  useEffect(()=>{
      console.log(token,userId)
  },[userData])
  useEffect(()=>{
    getUserInfo(onFetchUserSuccess,onFetchUserFailure)
  },[])
    const onFetchUserSuccess=(e)=>{
console.log(e)
setUserData(e.data.userInfo)
toast()
  }
  const onFetchUserFailure=(e)=>{
    console.log(e)
      const msg= e.response.data.msg
  }


  const storeTokenInLS = (serverToken) => {
    console.log("fn called",serverToken)
    setToken(serverToken)
    return localStorage.setItem("token", serverToken);
  };
  const storeUserIdInLS = (userId) => {
    setUserId(userId)
    return localStorage.setItem("userId", userId);
  };

  
  const isLoggedIn=()=>{
    if(localStorage.getItem("token"))
return true
    else return false
  }
  console.log(userData)
  return <authContext.Provider value={{storeTokenInLS,storeUserIdInLS,isLoggedIn,token,userId,setToken,userData,setUserData}}>{children}</authContext.Provider>;
};
export { authContext, AuthProvider };
