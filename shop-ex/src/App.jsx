import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Login from './components/Login'
import Signup from './components/Signup'
import { ToastContainer } from 'react-toastify'
import CreateProduct from './components/admin/CreateProduct'
import AllProducts from './components/admin/AllProducts'
function App() {
  return (
    <div className='w-100vw h-[100vh] bg-white '>
      <Navbar />
      <ToastContainer />
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin/createproduct' element={<CreateProduct />} />
        <Route path='/admin/allproducts' element={<AllProducts />} />
        <Route path='*' element={<div>no page found</div>} />
        
      </Routes>
    </div>
  )
}

export default App
