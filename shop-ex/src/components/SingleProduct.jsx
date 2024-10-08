import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProductById } from '../api/product';

const SingleProduct = ({}) => {
  const {productId}=useParams();
  useEffect(()=>{
getSingleProductById(onSuccess,onFailure,productId)
  },[])
  const onSuccess=(e)=>{console.log(e)}
  const onFailure=(e)=>{console.log(e)}
  console.log(productId)
    return (
  <p className='text-4xl'>single product page</p>
  )
}

export default SingleProduct