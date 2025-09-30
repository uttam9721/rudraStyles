import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './../../admin/src/components/Navbar';
import Sidebar from './../../admin/src/components/Sidebar';
import List from './pages/List';
import Add from './pages/Add'
import Orders from './pages/Orders';
import Login from './components/Login';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
// console.log(backendUrl);

const App = () => {
  const [token,setToken]=useState(localStorage.getItem('token')?localStorage.getItem('token'):'')

useEffect(()=>{
  localStorage.setItem('token',token)
},[token])

  return (
    <div className="bg-gray-50 min-h-screen">
      {token===""?
      <Login setToken={setToken} />:
       <>
      <Navbar setToken={setToken} />
      <hr />
      <Router>
        <div className="flex w-full">
          {/* Sidebar will always be visible */}
          <Sidebar />
          <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray text-base'>
          <Routes>
            {/* <Route path="/add" element={<h1 className='p-4'>Add Page</h1>} /> */}
            <Route path='/add' element={<Add  token={token} />} />
            {/* Add more routes here */}
            <Route path='/list' element={<List token={token} />} />
            <Route path='/orders' element={<Orders token={token}  />} />
          </Routes>
          </div>
        </div>
      </Router>
      </>
      
      }
     
    </div>
  );
};

export default App;
