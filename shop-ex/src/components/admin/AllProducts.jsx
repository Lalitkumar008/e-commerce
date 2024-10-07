import React, { useEffect, useState } from 'react'
import { deleteProductById, getAllProducts } from '../../api/product'
import { toast } from 'react-toastify'

const AllProducts = () => {
    const [allProducts,setAllProducts]=useState()
    useEffect(()=>{
getAllProducts(onFetchAllProductsSuccess,onFetchAllProductsFailure)
    },[])
    const onFetchAllProductsSuccess=(e)=>{
        console.log(e)
        setAllProducts(e.data.data)
        toast.success(e.data.message)
    }
    const onFetchAllProductsFailure=(e)=>{console.log(e)}
    console.log(allProducts)
    const handleDeleteProduct=(id)=>{
deleteProductById(onDeleteProductSuccess,onDeleteProductFailure,id)
    }
    const onDeleteProductSuccess=(e)=>{console.log(e)}
    const onDeleteProductFailure=(e)=>{console.log(e)}
  return (
    <div className='capitalize'>
<div className='flex justify-center capitalize text-2xl  p-4 mb-8'>
    <p>all products <span className='text-red-400'>({allProducts?.length})</span></p>
</div>
{/* <div className='flex justify-center capitalize gap-x-[220px] my-6 bg-gray-100 p-2'>
    <p>name</p>
    <p>price</p>
    <p>img</p>
    <p>action</p>
</div> */}

{/* <div>{allProducts?.map((product)=>{
    console.log("img type",typeof product.productImage)
    return <div className='capitalize border-b-[1px] flex justify-center gap-x-[100px] p-2 items-center border-gray-400 m-2' key={product._id}>
<p>{product.productName}</p>
<p>{product.productPrice} ₹</p>
<p>{product.description}</p>
<p>{product.stockPrice}</p>
{product.productImage && (
        <img className=' w-[70px] h-[70px]'
          src={`data:image/jpeg;base64,${product.productImage}`} 
          alt={product.productName} 
        />
      )}

<button>*</button>
    </div>
})}</div> */}
<div className='flex justify-center '>
    <table className=' p-8 w-1/2'>
     <tr className='flex justify-between p-2 border-b- shadow 2'>
            <th>name</th>
            <th>price</th>
            <th>image</th>
            <th>action</th>
            </tr>
{allProducts?.map((product)=>{
        return <tr className='text-center flex justify-between  mt-4 px-3 border-b-2'>
                <td>{product.productName}</td>
                <td>{product.productPrice} <span>(₹)</span></td>
                <td>{product.productImage && (
        <img className='bg-green-400 p-2 w-[70px] h-[70px]'
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