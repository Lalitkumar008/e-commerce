import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addToCartProduct, getSingleProductById } from '../api/product';
import { toast } from 'react-toastify';
import Loader from './Loader';

const SingleProduct = ({}) => {
  const {productId}=useParams();
     const [isLoading,setIsLoading]=useState(false)
  const [singleProductData,setSingleProductData]=useState([])
  useEffect(()=>{
    setIsLoading(true)
getSingleProductById(onSuccess,onFailure,productId)
  },[])
  const onSuccess=(e)=>{
    setIsLoading(false)
    console.log(e)
    setSingleProductData(e.data.data[0])
  }
  console.log(singleProductData)
  const onFailure=(e)=>{console.log(e)
setIsLoading(isLoading)

  }
  const handleAddToCart=(id)=>{
addToCartProduct(onAddCartSuccess,onAddCartFailure,id)
    }
     const onAddCartSuccess=(e)=>{console.log(e)
    toast.success(e.data.msg)

    }
    const onAddCartFailure=(e)=>{console.log(e)
toast.error(e.response.data.msg)

    }
    return isLoading?
    <Loader />
    : (
  <div className=' p-4'>
    <p className='text-3xl text-center capitalize my-4'>product details</p>
    <div className='flex  justify-center p-2 h-[60vh]'>
      <div className='  w-1/3'>
      <img style={{backgroundColor:` #${singleProductData.panelColor} `,}} className='p-8 w-[90%] h-full rounded '
          src={`data:image/jpeg;base64,${singleProductData?.productImage}`} 
          alt={singleProductData?.productName} 
        />
    </div>
    <div className='relative capitalize w-1/4 space-y-2 shadow-md p-4'>
    <div className='flex justify-between text-xl font-semibold border-b-[1px] pb-2'>
        <p className='tracking-wide'>{singleProductData?.productName}</p>

    </div>
    <div className='flex items-center gap-x-2 p-[2px] '>
  <p className='text-gray-400 line-through text-sm'>{singleProductData.productMrp}₹</p>
  <p>{singleProductData?.productPrice} ₹</p>
</div>
    <p className='text-green-400 text-sm'>{singleProductData.stockLevel>0 ?
    "in stock"
    :"out of stock"}</p>
<p className='text-xs text-gray-600'>eligible for free shipping</p>
<p className=''>Choose a color</p>
<div className={`w-7 h-6   rounded-full`} style={{backgroundColor:`#${singleProductData.productColor}`}}></div>
<p className='text-sm text-gray-500'>{singleProductData?.productDescription}</p>

<div className='mb-4 w-full '>
  <button onClick={()=>handleAddToCart(singleProductData._id)}  className="p-2 text-white bg-blue-400 mt-4 w-full flex justify-center rounded hover:bg-blue-500">Add to cart</button>
 </div>
</div>
    </div>
 
  </div>
  )
}

export default SingleProduct