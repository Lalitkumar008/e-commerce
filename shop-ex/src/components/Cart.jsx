import React, { useEffect, useState } from 'react'
import { getCartItems } from '../api/product'
import Loader from './Loader'

const Cart = () => {
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
        console.log(e)
setCartItems(e.data.cartItems)
setIsLoading(false)

console.log(totalAmount)
    }
    console.log(cartItems)
    const onFailure=(e)=>{console.log(e)}
  return isLoading?
  <Loader />
  : (
  <div>
    <p className='text-center p-4 text-3xl'><span className='text-red-400'>({cartItems?.length})</span> items in your cart</p>
    <p className='text-center p-4 text-2xl'>Total Amount : <span className='text-red-400'>{totalAmount} ₹</span> </p>
      <div className='flex justify-center p-'>
     <div className='w-1/2   '>
           {
            cartItems?.map((item)=>{
                return <div key={item._id} className=' border-2  flex items-start'>
                     <img className='   h-[170px] rounded'
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
     <button onClick={()=>handleAddToCart(product._id)}  className="p-2 w-1/2 text-white bg-blue-400   flex justify-center rounded mb-4 hover:bg-blue-500">proceed to checkout</button>
     </div>
  </div>
  )
}

export default Cart