import React, { useEffect } from "react";
import { createContext,useState } from "react";
import { products } from "../assets/assets";
// import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;
  const [search,setSearch]=useState('');
  const [showSearch,setShowSearch]=useState(false)
  const [cartItems,setCartItems]=useState({});
  // const navigate =useNavigate();


  const addToCart=async(itemId,size)=>{
    let cartData=structuredClone(cartItems);
    if(cartData[itemId]){
      if(cartData[itemId]){
        cartData[itemId][size]+=1;
      }else{
        cartData[itemId][size]=1;
      }
    }
    else{
      cartData[itemId]={};
      cartData[itemId][size]=1;
    }
    setCartItems(cartData)

  }

  const getCartCount=()=>{
    let totalCount=0;
    for(const items in cartItems){
      for(const item in cartItems[items]){
        try{
          if(cartItems[items][item]>0){
            totalCount+=cartItems[items][item];
          }
        }catch(error){
          console.log(error);
          

        }
      }
    }
    return totalCount;
  }

  const updateQuantity = (id, size, quantity) => {
  setCartItems(prev => ({
    ...prev,
    [id]: {
      ...prev[id],
      [size]: quantity
    }
  }))
}

const removeFromCart = (id, size) => {
  setCartItems(prev => {
    const updated = { ...prev }
    delete updated[id][size]

    if (Object.keys(updated[id]).length === 0) {
      delete updated[id]
    }
    return updated
  })
}

// const getCartAmount=()=>{
//         let totalAmout=0;
//         for(const items in cartItems){
//           let iteminfo=products.find((product)=>product._id===items);
//           for(const item in cartItems[items]){
//             try {
//               if(cartItems[items][item]>0){
//                 totalAmout+=iteminfo.price*cartItems[items][item]
//               }
//             } catch (error) {
              
//             }
//           }

//         }
// }


const getCartAmount =() => {
  let totalAmount = 0;

  for (const productId in cartItems) {
    const productInfo = products.find(
      (product) => product._id === productId
    );

    if (!productInfo) continue;

    for (const size in cartItems[productId]) {
      const quantity = cartItems[productId][size];

      if (quantity > 0) {
        totalAmount += productInfo.price * quantity;
      }
    }
  }

  return totalAmount;
};






  useEffect(()=>{

  },[cartItems])
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
     updateQuantity,
  removeFromCart,
  getCartAmount,
  // navigate,

  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
