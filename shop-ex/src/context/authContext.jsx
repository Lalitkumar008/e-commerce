import React, { useEffect, useState } from "react";

const authContext = React.createContext();
const AuthProvider = ({ children }) => {
  const [token,setToken]=useState()
  const [userInfo,setUserInfo]=useState()
  
  useEffect(()=>{
    localStorage.setItem("userId",userInfo?.userId)
  },[userInfo])
    const onFetchServiceSuccess=(e)=>{
setServiceData(e.data)
  }
  const onFetchServiceFailure=(e)=>{
  }
const onSuccess=(e)=>{console.log(e)
setUserData(e.data.userData)
}
const onFailure=(e)=>{}
  const storeTokenInLS = (serverToken) => {
    console.log("fn called",serverToken)
    setToken(serverToken)
    return localStorage.setItem("token", serverToken);
  };

  
  const isLoggedIn=()=>{
    if(localStorage.getItem("token"))
return true
    else return false

  }
  console.log(userInfo)
  return <authContext.Provider value={{storeTokenInLS,isLoggedIn,token,setToken,userInfo,setUserInfo}}>{children}</authContext.Provider>;
};
export { authContext, AuthProvider };
