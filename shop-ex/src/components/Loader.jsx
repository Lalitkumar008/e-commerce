import React from 'react'

const Loader = () => {
  return (
    <div className='w-[100vw] h-[calc(100vh-64px)] flex justify-center items-center '>
<div className='w-16 h-16 animate-spin border-t-[2px] border-b-[1px] border-blue-400  rounded-full '></div>
    </div>
  )
}

export default Loader