import React from 'react'
import HeroBanner from './HeroBanner'
import AllProducts from './admin/AllProducts'
import ShowProducts from './ShowProducts'

const Home = () => {
  return (
    <div className=' h-[calc(100vh-64px)] '>
<HeroBanner />
<ShowProducts />
    </div>
  )
}

export default Home