import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addToCartProduct, getSingleProductById } from '../api/product';
import { toast } from 'react-toastify';

const SingleProduct = ({}) => {
  const {productId}=useParams();
  const [singleProductData,setSingleProductData]=useState([])
  useEffect(()=>{
getSingleProductById(onSuccess,onFailure,productId)
  },[])
  const onSuccess=(e)=>{console.log(e)
    setSingleProductData(e.data.data[0])
  }
  console.log(singleProductData)
  const onFailure=(e)=>{console.log(e)}
  const handleAddToCart=(id)=>{
addToCartProduct(onAddCartSuccess,onAddCartFailure,id)
    }
     const onAddCartSuccess=(e)=>{console.log(e)
    toast.success(e.data.msg)

    }
    const onAddCartFailure=(e)=>{console.log(e)
toast.error(e.response.data.msg)

    }
    return (
  <div className=''>
    <p className='text-3xl text-center capitalize my-4'>product details</p>
    <div className='flex justify-center p-2 h-[60vh]'>
      <div className='  w-1/3'>
      <img className='  w-[90%] h-full rounded'
          src={`data:image/jpeg;base64,${singleProductData?.productImage}`} 
          alt={singleProductData?.productName} 
        />
    </div>
    <div className='relative capitalize w-1/4 space-y-2'>
    <div className='flex justify-between text-xl font-semibold'>
        <p>{singleProductData?.productName}</p>
<p>{singleProductData?.productPrice} ₹</p>
    </div>
    <p className='text-green-400 text-sm'>{singleProductData.stockLevel>0 ?
    "in stock"
    :"out of stock"}</p>
<p className='text-sm text-gray-600'>eligible for free shipping</p>
<p>{singleProductData?.productDescription}</p>
<div className='mb-4'>
  <button onClick={()=>handleAddToCart(singleProductData._id)}  className="p-2 absolute bottom-2 text-white bg-blue-400 mt-4 w-full flex justify-center rounded hover:bg-blue-500">add to cart</button>
 </div>
</div>
    </div>
 
  </div>
  )
}

export default SingleProduct