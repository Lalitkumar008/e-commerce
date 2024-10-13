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
      const categoryValue=e.target.value;
console.log(categoryValue)
let filterredByCategoryData= categoryWiseData?.filter((product)=>product.productCategory===categoryValue)
if(filterredByCategoryData.length!==0)
setAllProducts(filterredByCategoryData)
else toast.error("no such category found")
console.log(filterredByCategoryData)
    }
  return isLoading?
  <div>
     
    <Loader />
   
  </div>
  : (
    <div className='   m-4 p-4'>
        <div className=' w-full p-4 text-3xl capitalize text-center mb-10 text-zinc-800 tracking-wide'>
            <p>explore a wide range of products</p>
        </div>
       <div>
       <select name='productCategory'  
       className='border-[1px] w-80 border-gray-300 outline-none px-2 py-[2px] rounded-md text-sm'
       onChange={handleCategoryWiseData}
       >
         <option value="" disabled selected hidden>
    Select product category wise
  </option>
        <option className=' ' value="clothing">Clothing</option>
        <option className=' ' value="footware">Footeware</option>
        <option className=' ' value="bags">Bags</option>
        <option className=' ' value="clocks">Clocks</option>
       </select>
       </div>
          <div className='flex justify-start flex-wrap gap-4 '>{allProducts?.map((product)=>{
        return <div><div className='w-[260px] h-[280px] hover:bg-slate-100 shadow-md p-2 cursor-pointer'
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
        <button onClick={()=>handleAddToCart(product._id)}  className="p-2 text-white bg-blue-400 mt-4 w-full flex justify-center rounded hover:bg-blue-500">Add to cart</button>
      </div>
      </div>
    })}</div>
    </div>
  )
}

export default ShowProducts