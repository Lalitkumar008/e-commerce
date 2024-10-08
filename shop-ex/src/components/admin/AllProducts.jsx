import React, { useEffect, useState } from 'react'
import { deleteProductById, getAllProducts } from '../../api/product'
import { toast } from 'react-toastify'
import Loader from '../Loader'

const AllProducts = () => {
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
    const onFetchAllProductsFailure=(e)=>{console.log(e)}
    console.log(allProducts)
    const handleDeleteProduct=(id)=>{
deleteProductById(onDeleteProductSuccess,onDeleteProductFailure,id)
    }
    const onDeleteProductSuccess=(e)=>{console.log(e)}
    const onDeleteProductFailure=(e)=>{console.log(e)}
  return isLoading?
  <Loader />
  : (
    <div className='capitalize'>
<div className='flex justify-center capitalize text-2xl  p-4 mb-8'>
    <p>all products <span className='text-red-400'>({allProducts?.length})</span></p>
</div>


<div className='flex justify-center '>
    <table className=' p-8 w-1/2'>
     <tr className='flex justify-between p-2 border-b- shadow 2'>
            <th>name</th>
            <th>price</th>
            <th>image</th>
            <th>action</th>
            </tr>
{allProducts?.map((product)=>{
        return <tr className='text-center flex justify-between items-center mt-4 px-3 border-b-2'>
                <td>{product.productName}</td>
                <td>{product.productPrice} <span>(₹)</span></td>
                <td>{product.productImage && (
        <img className=' p-2 w-[70px] h-[70px]'
          src={`data:image/jpeg;base64,${product.productImage}`} 
          alt={product.productName} 
        />
      )}</td>
      <td><span className='cursor-pointer text-2xl ' onClick={()=>handleDeleteProduct(product._id)}>*</span></td>
            </tr>
        
    })}
</table>
</div>
    

    </div>
  )
}

export default AllProducts