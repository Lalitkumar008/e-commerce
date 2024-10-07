import React, { useState } from 'react'
import { createProduct } from '../../api/product'

const CreateProducts = () => {
const [productDetail,setProductDetail]=useState({
  productName:"",
  productPrice:"",
  stockLevel:"",
  productDescription:"",
  // productImage:""
})
const [productImage,setProductImage]=useState(null)
console.log(productDetail)

const handleInputChange=(e)=>{
  const name =e.target.name
  const value=e.target.value
  setProductDetail({...productDetail,[name]:value})
}
  const handleFileChange = (e) => {
    setProductImage(e.target.files[0]); // Store file separately
  };
  // const handleSubmit=(e)=>{
  //   e.preventDefault()
  //   console.log(e)
  //     // Create a new FormData object
  //   const formData={...productDetail,productImage}
  //   console.log(formData)
  //   createProduct(onSuccess,onFailure,formData)

  // }
  const handleSubmit = (e) => {
  e.preventDefault();

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
  const onSuccess=(e)=>{console.log(e)}
  const onFailure=(e)=>{console.log(e)}
  return (
    <div className='w-full bg-white h-[calc(100%-64px)] flex justify-center'>
     <div className='w-3/4 ' >
<div>
  <p className=''>create your product</p>
  <p className=''>- Create and manage product listings with images, descriptions, pricing, and stock levels.</p>
</div>

<div>
   <form action="#" onSubmit={handleSubmit} className="mt-4 p-2 capitalize" encType="multipart/form-data"
    >
        <input type="file" name="productImage"
        // value={productDetail.productImage}
        onChange={handleFileChange}
        />
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

        <input type="submit" className="w-40 bg-blue-400 p-1 m-1 rounded text-white font-semibold" value="create new product" />
    </form>
</div>
     </div>
    </div>
  )
}

export default CreateProducts