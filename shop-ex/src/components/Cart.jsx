import React, { useEffect, useState } from 'react'
import { getCartItems } from '../api/product'
import Loader from './Loader'
import { loadStripe } from '@stripe/stripe-js'
import CartEmpty from "../assets/cart-empty.jpg"
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const navigate=useNavigate()
    const [cartItems,setCartItems]=useState()
    const [totalAmount,setTotalAmount]=useState()
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
getCartItems(onSuccess,onFailure)
setIsLoading(true)
    },[])
    useEffect(()=>{
        let sum=0;
        for(let i=0;i<cartItems?.length;i++){
    sum=sum+parseFloat(cartItems[i].productPrice)
}
setTotalAmount(sum)
    },cartItems)
    const onSuccess=(e)=>{
        
setCartItems(e.data.cartItems)
setIsLoading(false)


    }
 
    const onFailure=(e)=>{}
    // payment method
    const handleMakePayment=async ()=>{
const stripe=await loadStripe(import.meta.env.VITE_STRIPE_KEY)
const body={
  products:{...cartItems}
}

const headers={
  "Content-Type":"application/json"
}
const baseUrl = "http://localhost:3000/products";
// const baseUrl = "https://e-com-backend-feal.onrender.com/products/addtocart";
const response =await fetch(`${baseUrl}/create-checkout-session`,{
  method:"POST",
  headers:headers,
  body:JSON.stringify(body)
})
const session=await response.json()
const result= stripe.redirectToCheckout({
  sessionId:session
})
    }
  return isLoading?
  <Loader />
  : (
  cartItems?.length!==0?<div className=''>
    <p className='text-center p-4 text-3xl'><span className='text-red-400'>({cartItems?.length || 0})</span> items in your cart</p>
    <p className='text-center p-4 text-2xl'>Total Amount : <span className='text-red-400'>{totalAmount} ₹</span> </p>
      <div className='flex justify-center p-'>
     <div className='w-1/2 shadow-md bg-white  '>
           {
            cartItems?.map((item)=>{
                return <div key={item._id} className=' border-2  flex items-start'>
                     <img className='w-[200px]  shadow h-[170px] rounded'
          src={`data:image/jpeg;base64,${item.productImage}`} 
          alt={item.productName} 
        />
      <div className=' bg-gray-400 p-3 w-full'>
          <p>{item.productName}</p>
        <p>{item.productPrice} <span>₹</span></p>
      </div>
                </div>
            })
        }
     </div>
     
    </div>
    <div className='capitalize flex justify-center '>
     <button onClick={handleMakePayment}  className="p-2 w-1/2 text-white bg-blue-400   flex justify-center rounded mb-4 hover:bg-blue-500">proceed to payment</button>
     </div>
  </div>:
  <div   className=' w-full h-[calc(100vh-64px)]   gap-x-4 shadow-md flex  justify-center items-center'>
<div className='flex-col'>
   <div className='flex p-4 border-t-2 rounded-md gap-x-4  justify-center items-center shadow-md w-[44vw] h-[40vh]'>
    <p  className=' text-3xl text-gray-600'>Your cart is empty : </p>
   <img src={CartEmpty} className='w-[20vw] h-[20vh] rounded-lg' alt="" />
 </div>
 <div className='flex justify-center mt-4'>
   <button  className="p-2 text-white hover:bg-gray-800  bg-black m-2  flex justify-center rounded"
   onClick={()=>navigate("/")}
   >Go to home</button>
 </div>
</div>
 
  </div>
  )
}

export default Cart