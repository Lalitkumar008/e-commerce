import React, { useEffect, useState } from 'react'
import Banner from "../assets/banner.png"
import {createClient} from "pexels"
import heroBanner1 from "../assets/heroBanner1.jpeg"
import heroBanner2 from "../assets/heroBanner2.jpeg"
import heroBanner3 from "../assets/heroBanner3.jpeg"

const HeroBanner = () => {
const [img,setImg]=useState()
 const client = createClient('bw1fNqpTr3moCXrObAz6fws4GdJq0AOf02fJ3tRqJU5zZ8RuArdJ5NZk');
const [bgIndex,setBgIndex]=useState(0)

  useEffect( ()=>{
    setTimeout(() => {
      if(bgIndex<3)
      setBgIndex(bgIndex+1)
    }, 3000);
    console.log(bgIndex)
 const fetchImage =  () => {
if(bgIndex===1)
  setImg(heroBanner1)
else if(bgIndex===2)
  setImg(heroBanner2)
else 
  setImg(heroBanner3)
    };

    fetchImage();
  },[bgIndex])
  console.log(bgIndex)
  return (
    <div
    className=' w-[100vw] h-[calc(100vh-64px)]  flex justify-between flex-wrap   '
    >
        <div className='    font-semibold text-4xl p
        bg-orange-100 tracking-wider
        '>
         
            {/* <button  className="p-2 ml-7 text-white bg-blue-400 m-2 text-sm  rounded">explore</button> */}
        </div>
   {/* <div className='w-1/2 relative'>
     <img className='w-full absolute  h-[40vh]' src={Banner} alt="img" />
     <img className='w-full absolute  h-[40vh]' src={img} alt="img" />
   </div> */}
   <div className='relative flex justify-center items-center h-[calc(100vh-64px)] bg-rd-400  w-[100vw]'>
       <p className='absolute  w-1/3     leading-snug capitalize text-white text-7xl font-semibold '>Grab upto 50% off on Selected products</p>
         <img className=' w-[95%] h-[90%]   rounded-md' src={img} alt="img" />
         {/* <img src={heroBanner1} alt="" /> */}
   </div>
    </div>
  )
}

export default HeroBanner