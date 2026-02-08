import React from 'react'
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import { Toaster } from "react-hot-toast";
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Order from './pages/Order'
import Login from './pages/Login'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import SearchBar from './components/SearchBar';
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Toaster position="top-center" reverseOrder={false} />
     <BrowserRouter>
      <Navbar path='/navbar' element={<Navbar/>} />
      <SearchBar />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/collection' element={<Collection/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/product/:productId' element={<Product/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/place-order' element={<PlaceOrder/>} />
      <Route path='/order' element={<Order/>} />
      <Route path='/login' element={<Login/>} />
      
     </Routes>
     <Footer />
     </BrowserRouter> 
    </div>
  )
}

export default App



