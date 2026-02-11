import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {
  const navigate=useNavigate();

  const [method, setMethod] = useState('cod')

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]'>

      {/* ---------------- Left Side (Delivery Form) ---------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>

        <div className='flex gap-3'>
          <input type="text" placeholder='First name'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Last name'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>

        <input type="email" placeholder='Email address'
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

        <input type="text" placeholder='Street'
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

        <div className='flex gap-3'>
          <input type="text" placeholder='City'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='State'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>

        <div className='flex gap-3'>
          <input type="number" placeholder='ZipCode'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Country'
            className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>

        <input type="number" placeholder='Phone'
          className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />

      </div>


      {/* ---------------- Right Side (Cart + Payment) ---------------- */}
      <div className='mt-8'>

        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />

          <div className='flex gap-3 flex-col lg:flex-row'>

            {/* Stripe */}
            <div
              onClick={() => setMethod('stripe')}
              className='flex items-center gap-3 border border-[#ccc] p-2 px-3 cursor-pointer'
            >
              <p className={`min-w-3.5 h-3.5 border border-[#ccc] rounded-full 
              ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>

              <img src={assets.stripe_logo} alt="stripe" className='h-5 mx-4' />
            </div>

            {/* Razorpay */}
            <div
              onClick={() => setMethod('razorpay')}
              className='flex items-center gap-3 border border-[#ccc] p-2 px-3 cursor-pointer'
            >
              <p className={`min-w-3.5 h-3.5 border border-[#ccc] rounded-full 
              ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>

              <img src={assets.razorpay_logo} alt="razorpay" className='h-5 mx-4' />
            </div>

            {/* COD */}
            <div
              onClick={() => setMethod('cod')}
              className='flex items-center gap-3 border border-[#ccc] p-2 px-3 cursor-pointer'
            >
              <p className={`min-w-3.5 h-3.5 border border-[#ccc] rounded-full 
              ${method === 'cod' ? 'bg-green-400' : ''}`}></p>

              <p className='text-gray-500 text-sm font-medium mx-4'>
                CASH ON DELIVERY
              </p>
            </div>

          </div>

          <div className='w-full text-end mt-8'>
            <button
            onClick={()=>navigate('/order')}
            className='bg-black text-white px-16 py-3 text-sm cursor-pointer'>PLACE ORDER</button>

          </div>
        </div>


      </div>
    </div>
  )
}

export default PlaceOrder
