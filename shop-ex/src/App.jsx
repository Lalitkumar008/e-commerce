import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {Routes,Route} from "react-router-dom"
import Login from './components/Login'
import Signup from './components/Signup'
import { ToastContainer } from 'react-toastify'
import CreateProduct from './components/admin/CreateProduct'
import AllProducts from './components/admin/AllProducts'
import RouteError from './components/RouteError'
import Profile from './components/Profile'
import SingleProduct from './components/SingleProduct'
import Cart from './components/Cart'
import Logout from './components/Logout'
import Footer from './components/Footer'
function App() {
  return (
    <div className='   bg-white '>
      <Navbar />
      <ToastContainer />
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin/createproduct' element={<CreateProduct />} />
        <Route path='/admin/allproducts' element={<AllProducts />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/product/:productId' element={<SingleProduct />} />
        <Route path='/mycart' element={<Cart />} />

        <Route path='*' element={<RouteError />} />
        
      </Routes>
      <Footer />
    </div>
  )
}

export default App
