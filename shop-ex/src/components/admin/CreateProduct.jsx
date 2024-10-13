import React, { useState } from 'react'
import { createProduct } from '../../api/product'
import { toast } from 'react-toastify'
import Loader from '../Loader'
import { Link } from 'react-router-dom'

const CreateProducts = () => {
const [productDetail,setProductDetail]=useState({
  productName:"",
  productPrice:"",
  stockLevel:"",
  productCategory:"",
  productDescription:"",
  productMrp:"",
    bgColor:"",
      panelColor:"",
      productColor:"",
})
const [productImage,setProductImage]=useState(null)
const [isLoading,setIsLoading]=useState(false)
console.log(productDetail)

const handleInputChange=(e)=>{
  const name =e.target.name
  const value=e.target.value
  console.log(value)
  setProductDetail({...productDetail,[name]:value})
}
  const handleFileChange = (e) => {
    setProductImage(e.target.files[0]); // Store file separately
  };
  const handleSubmit = (e) => {

  e.preventDefault();
if(!productDetail.productName || !productDetail.productPrice || !productDetail.productDescription|| !productDetail.stockLevel)
{
  toast.error("please fill form properly")
}
else{
 
  createProduct(onSuccess, onFailure, {...productDetail,productImage});
       setIsLoading(true)
}
};

  console.log(productImage)
  const onSuccess=(e)=>{console.log(e)
    setProductDetail({
      productName:"",
      productPrice:"",
      stockLevel:"",
      productDescription:"",
      productColor:"",
      panelColor:"",
      bgColor:"",
      productMrp:"",
      productCategory:""
    })
toast.success(e.data.msg)
setIsLoading(false)
  }
  const onFailure=(e)=>{console.log(e)}
  return isLoading?
  <Loader />
  : (
    <div className='w-full bg-slate-100  overflow-auto flex justify-center'>
      
     <div className='w-3/4 ' >
<div className='p-4'>
  <p className='capitalize text-2xl text-center'>create your product</p>
  
</div>

<div className='flex justify-center mb-8'>
   <form action="#" onSubmit={handleSubmit} className="bg-white rounded-md space-y-6  mt-4 p-6 capitalize
shadow-md
   " encType="multipart/form-data"
    >
     
        <div className="">
          <input 
          className="border-b-[1px] focus:border-b-2 border-gray-300 block outline-none text-black text-sm w-80 mb-4 m-1 rounded p-1 gap-2" 
          type="text" 
          name="productName" 
          value={productDetail.productName}
          onChange={handleInputChange}
          placeholder="Product Name" />

          <input 
          className="border-b-[1px] focus:border-b-2 border-gray-300 block outline-none text-black text-sm w-80 mb-4 m-1 rounded p-1 gap-2" 
          type="text" 
          name="productPrice"
          placeholder="Product Price" value={productDetail.productPrice}
          onChange={handleInputChange}
          />
          <input 
          className="border-b-[1px]
           focus:border-b-2
          border-gray-300 block outline-none text-black text-sm w-80 mb-4 m-1 rounded p-1 gap-2" 
          type="text" 
          name="productMrp"
          placeholder="Prdocut MRP" value={productDetail.productMrp}
          onChange={handleInputChange}
          />
        </div>

        <input 
        className="border-b-[1px] focus:border-b-2 border-gray-300 block outline-none text-black text-sm w-80 m-1 rounded p-1 gap-2" 
        type="number" 
        name="stockLevel"        
        placeholder="Stock Level" 
        value={productDetail.stockLevel}
        onChange={handleInputChange}
        />
       <select name='productCategory' value={productDetail.productCategory} onChange={handleInputChange} 
       className='border-[1px] w-80 border-gray-300 outline-none px-2 py-[2px] rounded-md text-sm'
       >
         <option value="" disabled selected hidden>
    Select a category
  </option>
        <option className=' ' value="clothing">Clothing</option>
        <option className=' ' value="footware">Footeware</option>
        <option className=' ' value="bags">Bags</option>
        <option className=' ' value="clocks">Clocks</option>
       </select>

        <textarea 
        rows={3}  
        className="border-[1px] focus:border-b-2 border-gray-300 block outline-none text-black text-sm w-80 m-1 rounded p-1 gap-2" 
        type="text" 
        name="productDescription"  
        value={productDetail.productDescription}      
        placeholder="Product Description" 
        onChange={handleInputChange}
        />
          <input 
          className="border-b-[1px]
           focus:border-b-2
          border-gray-300 block outline-none text-black text-sm w-80 mb-4 m-1 rounded p-1 gap-2" 
          type="text" 
          name="bgColor"
          placeholder="Background color" value={productDetail.bgColor}
          onChange={handleInputChange}
          />
            <input 
          className="border-b-[1px]
           focus:border-b-2
          border-gray-300 block outline-none text-black text-sm w-80 mb-4 m-1 rounded p-1 gap-2" 
          type="text" 
          name="panelColor"
          placeholder="Panel color" value={productDetail.panelColor}
          onChange={handleInputChange}
          />
            <input 
          className="border-b-[1px]
           focus:border-b-2
          border-gray-300 block outline-none text-black text-sm w-80 mb-4 m-1 rounded p-1 gap-2" 
          type="text" 
          name="productColor"
          placeholder="Prodcut color" value={productDetail.productColor}
          onChange={handleInputChange}
          />
   <input type="file" name="productImage"
        // value={productDetail.productImage}
        onChange={handleFileChange}
        />
    <div className='flex justify-center'>
          <input type="submit" className="w-40  bg-blue-400 p-1 m-1 rounded text-white font-semibold" value="create new product" />
    </div>
   <div className='flex justify-center '>
     <Link to={"/admin/allproducts"} className='bg-gray-200 py-2 px-4 hover:bg-gray-300 rounded-md capitalize  text-center'>all listed products </Link>
   </div>
    </form>
    
</div>
     </div>
    </div>
  )
}

export default CreateProducts