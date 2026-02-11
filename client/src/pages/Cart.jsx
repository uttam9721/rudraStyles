
// import React, { useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';

// const Cart = () => {
//   const {products,currency,cartItems}=useState(ShopContext);

//   const [cartData,setCartData]=useState([]);

//   useEffect(()=>{
//     const tempData=[];
//     for(const items in cartItems){
//       for(const item in cartItems[items]){
//         if (cartItems[items][item]>0) {
//           tempData.push({
//             _id:items,
//             size:item,
//             quantity:cartItems[items][item],
//           })
          
//         }
//       }
//     }
//     // console.log(tempData);
//     setCartData(tempData)
    

//   },[cartData])


//   return (
//     <div className='border-t pt-14'>
//       <div className='text-2xl mb-3'>
//         <Title text1={'YOURS'} text2={'CART'} />
//       </div>
//       <div>
//         {
//           cartData.map((item,index)=>{
//             const  productData=products.find((product)=>product._id===item._id);
//             return(
//               <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
//                 <div className='flex items-start gap-6'>
//                     <img
//                     className='w-16 sm:w-20'
//                     src={productData.image[0]} alt="" />
//                 </div>
//                 <div >
//                   <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                 </div>

//               </div>
//             )
//           })
//         }
//       </div>

//     </div>
//   )
// }

// export default Cart













import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import CartTotal from './../components/CartTotal';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const navigate=useNavigate();

  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    removeFromCart,
    // navigate
  } = useContext(ShopContext)

  const [cartData, setCartData] = useState([])

  useEffect(() => {
    const tempData = []

    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          tempData.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          })
        }
      }
    }

    setCartData(tempData)
  }, [cartItems])

  return (
    <div className='border-t border-[#ccc] pt-14'>

      <div className='text-2xl mb-6'>
        <Title text1={'YOURS'} text2={'CART'} />
      </div>

      <div>
        {cartData.map((item, index) => {

          const productData = products.find(
            product => product._id === item._id
          )

          if (!productData) return null

          return (
            <div
              key={index}
              className='py-4 border-t border-[#ccc] border-b  text-gray-700
              grid grid-cols-[4fr_0.5fr_0.5fr]
              sm:grid-cols-[4fr_2fr_0.5fr]
              items-center gap-4'
            >

              {/* PRODUCT INFO */}
              <div className='flex items-start gap-6'>
                <img
                  className='w-16 sm:w-20'
                  src={productData.image[0]}
                  alt={productData.name}
                />

                <div>
                  <p className='text-xs sm:text-lg font-medium'>
                    {productData.name}
                  </p>

                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productData.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border  border-[#ccc] bg-slate-50'>
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>

              {/* QUANTITY */}
              <input
                className='border  border-[#ccc] max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(
                    item._id,
                    item.size,
                    Number(e.target.value)
                  )
                }
              />

              {/* REMOVE */}
              <img
                onClick={() => removeFromCart(item._id, item.size)}
                className='w-4 mr-4 sm:w-5 cursor-pointer'
                src={assets.bin_icon}
                alt="remove"
              />

            </div>
          )
        })}
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end '>
            <button 
            onClick={()=>navigate('/place-order')}
            className='bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer'>
          PROCEED TO CHECKOUT
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
