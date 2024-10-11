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
  productDescription:"",
  // productImage:""
})
const [productImage,setProductImage]=useState(null)
const [isLoading,setIsLoading]=useState(false)
console.log(productDetail)

const handleInputChange=(e)=>{
  const name =e.target.name
  const value=e.target.value
  setProductDetail({...productDetail,[name]:value})
}
  const handleFileChange = (e) => {
    setProductImage(e.target.files[0]); // Store file separately
  };
  const handleSubmit = (e) => {
    setIsLoading(true)
  e.preventDefault();
if(!productDetail.productName || !productDetail.productPrice || !productDetail.productDescription|| !productDetail.stockLevel)
{
  toast.error("please fill form properly")
}
  // Create a FormData object to handle file and other product data
  const formData = new FormData();

  // Append each piece of product data to the form
  formData.append('productName', productDetail.productName);
  formData.append('productPrice', productDetail.productPrice);
  formData.append('stockLevel', productDetail.stockLevel);
  formData.append('productDescription', productDetail.productDescription);

  // Append the product image separately
  if (productImage) {
    formData.append('productImage', productImage); // productImage is a File object
  }
console.log(formData.entries())
  
  // Send formData to the server
  // createProduct(onSuccess, onFailure, formData);
  createProduct(onSuccess, onFailure, {...productDetail,productImage});
    // Log FormData contents
  for (let [key, value] of formData.entries()) {
    console.log(key, value);
  }

};

  console.log(productImage)
  const onSuccess=(e)=>{console.log(e)
    setProductDetail({
      productName:"",
      productPrice:"",
      stockLevel:"",
      productDescription:""
    })
toast.success(e.data.msg)
setIsLoading(false)
  }
  const onFailure=(e)=>{console.log(e)}
  return isLoading?
  <Loader />
  : (
    <div className='w-full bg-white h-[calc(100%-64px)] flex justify-center'>
      
     <div className='w-3/4 ' >
<div className='p-4'>
  <p className='capitalize text-2xl text-center'>create your product</p>
  
</div>

<div className='flex justify-center '>
   <form action="#" onSubmit={handleSubmit} className="space-y-6  mt-4 p-6 capitalize
shadow-md
   " encType="multipart/form-data"
    >
     
        <div className="">
          <input 
          className="border-b-[1px] border-gray-300 block outline-none text-black text-sm w-80 mb-4 m-1 rounded p-1 gap-2" 
          type="text" 
          name="productName" 
          value={productDetail.productName}
          onChange={handleInputChange}
          placeholder="Product Name" />

          <input 
          className="border-b-[1px] border-gray-300 block outline-none text-black text-sm w-80 mb-4 m-1 rounded p-1 gap-2" 
          type="text" 
          name="productPrice"
          placeholder="Product Price" value={productDetail.productPrice}
          onChange={handleInputChange}
          />
        </div>

        <input 
        className="border-b-[1px] border-gray-300 block outline-none text-black text-sm w-80 m-1 rounded p-1 gap-2" 
        type="number" 
        name="stockLevel"        
        placeholder="Stock Level" 
        value={productDetail.stockLevel}
        onChange={handleInputChange}
        />

        <textarea 
        rows={3}  
        className="border-b-[1px] border-gray-300 block outline-none text-black text-sm w-80 m-1 rounded p-1 gap-2" 
        type="text" 
        name="productDescription"  
        value={productDetail.productDescription}      
        placeholder="Product Description" 
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