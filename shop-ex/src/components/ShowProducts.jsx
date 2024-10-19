import React, { useEffect, useState } from 'react'
import { addToCartProduct, getAllProducts } from '../api/product'
import SingleProduct from './SingleProduct'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'

const ShowProducts = () => {
    const navigate=useNavigate()
    const [allProducts,setAllProducts]=useState()
    const [categoryWiseData,setCategoryWiseData]=useState()
    const [isLoading,setIsLoading]=useState(false)
    const [categoryValue,setCategoryValue]=useState("")
      useEffect(()=>{
getAllProducts(onFetchAllProductsSuccess,onFetchAllProductsFailure)
setIsLoading(true)
    },[])
        const onFetchAllProductsSuccess=(e)=>{
        console.log(e)
        setAllProducts(e.data.data)
        setCategoryWiseData(e.data.data)
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

    const handleCategoryWiseData=(e)=>{
      const getCatgoryValue=e.target.value;
setCategoryValue(getCatgoryValue)
let filterredByCategoryData= categoryWiseData?.filter((product)=>product.productCategory===getCatgoryValue)
if(filterredByCategoryData.length!==0)
setAllProducts(filterredByCategoryData)
else {
  setAllProducts(categoryWiseData)
  toast.error("no such category found")
}
console.log(filterredByCategoryData)
    }
  return isLoading?
  <div>
     
    <Loader />
   
  </div>
  : (
    <div className='w-[100vw] px-4 '>
        <div className=' p-4 text-3xl capitalize text-center mb-10 text-zinc-800 tracking-wide'>
            <p>explore a wide range of products</p>
        </div>
       <div className='mb-2 flex gap-x-4 p-2'>
       <select name='productCategory'  
       className='border-[1px] w-80 border-gray-300 outline-none px-2 py-[2px] rounded-md text-sm'
       onChange={handleCategoryWiseData}
       value={categoryValue}
       >
         <option value="" disabled selected hidden>
    Select product category wise
  </option>
        <option className=' ' value="clothing">Clothing</option>
        <option className=' ' value="footware">Footeware</option>
        <option className=' ' value="bags">Bags</option>
        <option className=' ' value="clocks">Clocks</option>
       </select>
       <div><button onClick={()=>{
        setAllProducts(categoryWiseData)
        setCategoryValue("")
       }} className='bg-blue-400 px-1 rounded-md'>clear all</button></div>
       </div>
        <div className='flex justify-center  '>
            <div className='w-[80%]  flex justify-start flex-wrap gap-x-10  '>{allProducts?.map((product)=>{
        return <div key={product.id}><div className='w-[260px] h-[320px] hover:bg-slate-100 shadow-md p-2 cursor-pointer '
        onClick={()=>handleProductNaviagte(product._id)}
        
        >
 <img className='  w-full h-[170px] rounded'
          src={`data:image/jpeg;base64,${product.productImage}`} 
          alt={product.productName} 
        />
      <div className='flex justify-between mt-2'>
          <p className='font-semibold capitalize'>{product.productName}</p>
        <p className='font-bold'>{product.productPrice} <span>₹</span></p>
      </div>
     <div className='mt-2'>
      <p className='capitalize text-sm'>{product.productDescription}</p>
     </div>
     <div className='mt-2'>
      <p className='capitalize text-sm'>⭐⭐⭐</p>
     </div>
        </div>
         <div>
        <button onClick={()=>handleAddToCart(product._id)}  className="p-2 text-white bg-blue-400 mt-4 w-full flex justify-center rounded hover:bg-blue-500">Add to cart</button>
      </div>
      </div>
    })}</div>
        </div>
    </div>
  )
}

export default ShowProducts