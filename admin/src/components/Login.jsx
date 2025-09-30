import React, { useState } from 'react'
import axios from 'axios'
const Login = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const onSubmitHandler=async(e)=>{
      e.preventDefault();
        try {
          const response = await axios.post(`${backendUrl}/api/user/admin`,{email,password})
            setEmail("");
            setPassword("");
            console.log(response);
        } catch (error) {
          console.error(error);  
        }
    }

  return (
    <div  className='min-h-screen flex items-center justify-center w-full'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
      <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
      <form onSubmit={onSubmitHandler}>
        <div className=' mb-3 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email"  className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' placeholder='your@email.com' required/>
        </div>
        <div>
            <p  className='text-sm font-medium text-gray-700 mb-2'>Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none ' placeholder='Enter Your password here..'/>
        </div>
        <div>
            <button className='mt-2 cursor-pointer w-full py-2 px-4 rounded-md text-white bg-black'>Login</button></div>
      </form>
      </div>
    </div>
  )
}

export default Login;
