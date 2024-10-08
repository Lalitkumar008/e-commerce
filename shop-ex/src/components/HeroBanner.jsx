import React from 'react'
import Banner from "../assets/banner.png"
const HeroBanner = () => {
  return (
    <div
    className='  flex justify-between flex-wrap h-[calc(40vh)]  '
    >
        <div className='w-1/2    font-semibold text-4xl p
        bg-orange-100 tracking-wider
        '>
            <p className='p-8 leading-snug capitalize text-gray-800 '>Grap upto 50% off on Selected products</p>
            <button  className="p-2 ml-7 text-white bg-blue-400 m-2 text-sm  rounded">explore</button>
        </div>
   <div className='w-1/2 relative'>
     <img className='w-full absolute  h-[40vh]' src={Banner} alt="img" />
   </div>
    </div>
  )
}

export default HeroBanner