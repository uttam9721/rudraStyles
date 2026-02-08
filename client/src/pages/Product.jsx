
// // import React, { useContext, useEffect } from 'react'
// // import { useParams } from 'react-router-dom'
// // import { ShopContext } from '../context/ShopContext';

// // const Product = () => {
// //   const {productId}=useParams();
// //   const {products}=useContext(ShopContext);
// //   const [productData,setProductData]=useState(false);


// //   const fetchProductData=async()=>{
// //     products.map((item)=>{
// //       if(item._id===pro)
// //     })

// //   }
// //   useEffect(()=>{
// // fetchProductData()
// //   },[productId])
// //   return (
// //     <div>
// //       <h1>Product:{productId}</h1>
// //     </div>
// //   )
// // }

// // export default Product



// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets'
// import RelatedProducts from './../components/RelatedProducts';

// const Product = () => {
//   const { productId } = useParams()
//   const { products,currency,addToCart } = useContext(ShopContext)
//   const [image,setImage]=useState("")
//   const [size,setSize]=useState("")

// const [productData, setProductData] = useState(null)

// const fetchProductData = () => {
//   const product = products.find(item => item._id === productId)

//   if (product) {
//     setImage(product.image[0])
//     // console.log(product)
//     setProductData(product)
//   }
// }

//   useEffect(() => {
//     if (products.length > 0) {
//       fetchProductData()
//     }
//   }, [productId, products])

//   if (!productData) {
//     return <p className="text-center mt-10">Loading product...</p>
//   }

//   return (
//     <div className="border-t-2 border-[#ccc] pt-10 transition-opacity ease-in duration-500 opacity-100">
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal'>

//         {
//   productData?.image?.map((item, index) => (
//     <img
//     onClick={()=>setImage(item)}
//       key={index}
//       src={item}
//       alt={productData?.name}
//       className="w-[24%] sm:w-full sm:mb-3 flex-shring-0 cursor-pointer"
//     />
//   ))
// }

//           </div>
// <div className='w-full sm:w=[80%]'>
//   <img src={image} className='w-full h-auto ' alt="" />

// </div>
//         </div>
         
//       <div className='flex-1'>
//           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//           <div className='flex items-center gap-1 mt-2'>
//         <img src={assets.star_icon} alt="" className='w-3 5' />
//         <img src={assets.star_icon} alt="" className='w-3 5' />
//         <img src={assets.star_icon} alt="" className='w-3 5' />
//         <img src={assets.star_icon} alt="" className='w-3 5' />
//         <img src={assets.star_icon} alt="" className='w-3 5' />
//         <p className='pt-2'>(122)</p>
//           </div>
//           <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
//           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
//           <div className='flex flex-col gap-4 my-8'>
//             <p>Select Size</p>
//             <div className='flex gap-2'>
//               {productData.sizes.map((item,index)=>(
//                 <button
//                 onClick={()=>setSize(item)}
//                 className={`border border-[#ccc] py-2 px-4 bg-gray-200 ${item===size?'border border-orange-400':''} cursor-pointer`} key={index}>{item}</button>
//               ))}
//             </div>

//           </div>
//           <button
//           onClick={()=>addToCart(productData._id,size)}
//           className='bg-black text-white px-8 py-3 text-sm cursor-pointer active:bg-gray-700'>ADD TO CART</button>
//           <hr className='mt-8 sm:w-4/5 border border-[#ccc]' />
//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//             <p>100% Original product</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>

//           </div>

//       </div>

//       </div>
//       <div className='mt-20'>
//         <div className='flex'>
//           <b className='border  border-[#CCC] px-5 py-3 text-sm'>Description</b>
//           <p className='border border-[#CCC] px-5 py-3 test-sm'>Review(150)</p>
//         </div>
//         <div className='flex flex-col gap-4 border  border-[#CCC] px-6 text-sm text-gray-500'>
//           <p>An e-commerce website is an online platform  that facilitates the buying and seller</p>
//           <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat quam incidunt rem distinctio laudantium. Sunt quisquam cumque explicabo officia expedita.</p>

//         </div>

//       </div>
//       {/* display related products */}
//       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
   
//       {/* <h1 className="text-lg font-semibold">₹{productData.price}</h1>
//       <p className="text-gray-600">{productData.description}</p> */}
//     </div>
//   )
// }

// export default Product











import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'
import toast from 'react-hot-toast'

const Product = () => {

  const { productId } = useParams()
  const { products, currency, addToCart } = useContext(ShopContext)

  const [image, setImage] = useState("")
  const [size, setSize] = useState("")
  const [productData, setProductData] = useState(null)

  const fetchProductData = () => {
    const product = products.find(item => item._id === productId)
    if (product) {
      setProductData(product)
      setImage(product.image[0])
    }
  }

  useEffect(() => {
    if (products.length > 0) {
      fetchProductData()
    }
  }, [productId, products])

  const handleAddToCart = () => {
    if (!size) {
      toast.error("Please select a size")
      return
    }

    addToCart(productData._id, size)
    toast.success("Added to cart 🛒")
  }

  if (!productData) {
    return <p className="text-center mt-10">Loading product...</p>
  }

  return (
    <div className="border-t-2 border-[#ccc] pt-10">

      <div className="flex gap-12 flex-col sm:flex-row">

        {/* LEFT IMAGE SECTION */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">

          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 cursor-pointer"
              />
            ))}
          </div>

          <div className="w-full">
            <img src={image} className="w-full h-auto" alt="" />
          </div>

        </div>

        {/* RIGHT DETAILS */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <img key={i} src={assets.star_icon} className="w-4" />
            ))}
            <p className="pt-1">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}{productData.price}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          {/* SIZE SELECT */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>

            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`py-2 px-4 border cursor-pointer
                    ${item === size
                      ? 'border-orange-400 bg-orange-100'
                      : 'border-[#ccc] bg-gray-200'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700"
          >
            ADD TO CART
          </button>

          <hr className="mt-8 sm:w-4/5 border-[#ccc]" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on delivery available</p>
            <p>Easy return within 7 days</p>
          </div>
        </div>

      </div>

      {/* DESCRIPTION */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3">Description</b>
          <p className="border px-5 py-3">Review (150)</p>
        </div>

        <div className="border px-6 py-4 text-gray-500 text-sm">
          <p>An e-commerce platform that facilitates online buying.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  )
}

export default Product
