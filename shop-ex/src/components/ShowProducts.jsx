import React, { useEffect, useState } from 'react'
import { addToCartProduct, getAllProducts } from '../api/product'
import SingleProduct from './SingleProduct'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'

const ShowProducts = () => {
    const navigate=useNavigate()
    const [allProducts,setAllProducts]=useState()
    const [isLoading,setIsLoading]=useState(false)
      useEffect(()=>{
getAllProducts(onFetchAllProductsSuccess,onFetchAllProductsFailure)
setIsLoading(true)
    },[])
        const onFetchAllProductsSuccess=(e)=>{
        console.log(e)
        setAllProducts(e.data.data)
        toast.success(e.data.message)
        setIsLoading(false)
    }
    console.log(allProducts)
    const onFetchAllProductsFailure=(e)=>{console.log(e)}

    const handleProductNaviagte=(id)=>{
navigate(`/product/${id}`)
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
  <div>
     
    <Loader />
   
  </div>
  : (
    <div className='flex flex-wrap m-4'>
        <div className=' w-full p-4 text-3xl capitalize text-center mb-10 text-zinc-800 tracking-wide'>
            <p>explore a wide range of products</p>
        </div>
       
          <div className='flex flex-wrap gap-4'>{allProducts?.map((product)=>{
        return <div><div className='w-[260px] h-[280px] shadow-md p-2 cursor-pointer'
        onClick={()=>handleProductNaviagte(product._id)}
        
        >
 <img className='  w-full h-[170px] rounded'
          src={`data:image/jpeg;base64,${product.productImage}`} 
          alt={product.productName} 
        />
      <div className='flex justify-between mt-2'>
          <p>{product.productName}</p>
        <p>{product.productPrice} <span>₹</span></p>
      </div>
     
        </div>
         <div>
        <button onClick={()=>handleAddToCart(product._id)}  className="p-2 text-white bg-blue-400 mt-4 w-full flex justify-center rounded hover:bg-blue-500">add to cart</button>
      </div>
      </div>
    })}</div>
    </div>
  )
}

export default ShowProducts