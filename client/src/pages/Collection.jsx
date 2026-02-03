// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets'
// import Title from '../components/Title'
// import ProductItem from './../components/ProductItem';

// const Collection = () => {
//   const {products}=useContext(ShopContext)
//   const [showFilter,setShowFilter]=useState(false)
//   const [filterProducts,setFilterProducts]=useState([]);
//   const [category,setCategory]=useState([]);
//   const [Subcategory,setSubCategory]=useState([]);


//   const toggleCategory=(e)=>{
//     if(category.includes(e.target.value)){
//       setCategory(prev=>prev.filter(item=>item!==e.target.value));
//     }else{
//       setCategory(prev=>[...prev,e.target.value])
//     }
//   }



//   useEffect(()=>{
//     setFilterProducts(products)

//   },[])

//   useEffect(()=>{
//       console.log(category);
      
//   },[category])


//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
//       <div className='min-w-60'>
//         {/* filter options */}
//         <p 
//         onClick={()=>setShowFilter(!showFilter)}
//         className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
//           <img className={`h-3 sm:hidden ${showFilter?'rotate-90':''}`} src={assets.dropdown_icon} alt="" />
//         </p>

//         {/* category filter */}
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block`}>
//       <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//       <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//         <p className='flex gap-2'>
//           <input className='w-3' type="checkbox" name="" value={'Men'} id="" />Men
//         </p>
//         <p className='flex gap-2'>
//           <input className='w-3' type="checkbox" name="" value={'Women'} id="" />Women
//         </p>
//         <p className='flex gap-2'>
//           <input className='w-3' type="checkbox" name="" value={'Kids'} onChange={toggleCategory} id="" />Kids
//         </p>

//       </div>
//         </div>
//         {/* Subcategory filter */}
//            <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?'':'hidden'} sm:block`}>
//       <p className='mb-3 text-sm font-medium'>Type</p>
//       <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//         <p className='flex gap-2'>
//           <input className='w-3' type="checkbox" name="" value={'Topwear'} id="" /> Topwear
//         </p>
//         <p className='flex gap-2'>
//           <input className='w-3' type="checkbox" name="" value={'Bottomwear'} id="" />Bottomwear
//         </p>
//         <p className='flex gap-2'>
//           <input className='w-3' type="checkbox" name="" value={'Winterwear'} id="" />Winterwear
//         </p>

//       </div>
//         </div>


//       </div>

//       {/* Right side  */}
//       <div className='flex-1'>
//         <div className='flex justify-between text-base sm:text-2xl mb-4'>
//           <Title text1={'ALL'} text2={'COLLECTIONS'} />
//           {/* product sorting */}
//           <select className='border-2 border-gray-300 text-sm px-2'>

//           <option value="relavent">Sort by: Relavent</option>
//           <option value="low-high">Sort by: Low to High</option>
//           <option value="high-low">Sort by: High to Low</option>

//           </select>

//         </div>
//         {/* map products  */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//           {filterProducts.map((item,index)=>(
//             <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
//           ))}

//         </div>

//       </div>
//     </div>
//   )
// }

// export default Collection













import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from './../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  // Category toggle
  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  // SubCategory toggle
  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  // Apply filters + sorting
  useEffect(() => {
    let filtered = [...products];

    // Category filter
    if (category.length > 0) {
      filtered = filtered.filter(item =>
        category.includes(item.category)
      );
    }

    // SubCategory filter
    if (subCategory.length > 0) {
      filtered = filtered.filter(item =>
        subCategory.includes(item.subCategory)
      );
    }

    // Sorting
    if (sortType === "low-high") {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilterProducts(filtered);
  }, [products, category, subCategory, sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10'>

      {/* Filters */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=""
          />
        </p>

        {/* Category */}
        <div className={`border border-[#ccc] pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          {['Men', 'Women', 'Kids'].map(item => (
            <label key={item} className='flex gap-2 text-sm'>
              <input
                type="checkbox"
                value={item}
                onChange={toggleCategory}
              />
              {item}
            </label>
          ))}
        </div>

        {/* SubCategory */}
        <div className={`border border-[#ccc] pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          {['Topwear', 'Bottomwear', 'Winterwear'].map(item => (
            <label key={item} className='flex gap-2 text-sm'>
              <input
                type="checkbox"
                value={item}
                onChange={toggleSubCategory}
              />
              {item}
            </label>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1="ALL" text2="COLLECTIONS" />

          {/* Sort */}
          <select
            className='border-2 border-gray-300 text-sm px-2'
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map(item => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
