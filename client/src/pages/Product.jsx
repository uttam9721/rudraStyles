
// import React, { useContext, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext';

// const Product = () => {
//   const {productId}=useParams();
//   const {products}=useContext(ShopContext);
//   const [productData,setProductData]=useState(false);


//   const fetchProductData=async()=>{
//     products.map((item)=>{
//       if(item._id===pro)
//     })

//   }
//   useEffect(()=>{
// fetchProductData()
//   },[productId])
//   return (
//     <div>
//       <h1>Product:{productId}</h1>
//     </div>
//   )
// }

// export default Product



import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Product = () => {
  const { productId } = useParams()
  const { products } = useContext(ShopContext)

  const [productData, setProductData] = useState(null)

  const fetchProductData = () => {
    const product = products.find(item => item._id === productId)
    setProductData(product)
  }

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData()
    }
  }, [productId, products])

  if (!productData) {
    return <p className="text-center mt-10">Loading product...</p>
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal'>

      <img src={productData.image} alt={productData.name} className="w-60 my-4" />
          </div>

        </div>

      </div>
      <p className="text-lg font-semibold">₹{productData.price}</p>
      <p className="text-gray-600">{productData.description}</p>
    </div>
  )
}

export default Product
