import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Order = () => {

  const { products, currency } = useContext(ShopContext)

  return (
    <div className='border-t border-[#ccc] pt-16'>

      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>

        {products.slice(1, 4).map((item, index) => (

          <div key={index} className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#ccc] py-4'>

            <div className='flex items-start gap-6 text-sm'>

              <img
                src={item.image[0]}
                alt={item.name}
                className='w-20 h-20 object-cover'
              />

              <div>
                <p className='font-medium text-base'>{item.name}</p>

                <div className='flex items-center gap-3 mt-1 text-gray-500'>
                  <p>{currency}{item.price}</p>
                  <p>Size: {item.size || "M"}</p>
                </div>

                <p className='text-gray-400 text-sm mt-1'>
                  Quantity: {item.quantity || 1}
                </p>

                <p className='text-gray-400 text-sm'>
                  Date: <span className='text-gray-400'>25, jul, 2025 </span>
                </p>

              </div>

            </div>

            <div className='md:w-1/2 flex justify-between'>
            <div className='flex items-center gap-2'>
              <p className='min-w-2 h-2 rounded-full bg-green-500'></p>

              <p className='text-sm md:text-base'>Ready to ship</p>

            </div>
            <button className='border border-[#ccc] px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
              {/* <span className='text-green-500 text-sm font-medium'>
                Order Placed
              </span> */}
            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Order
