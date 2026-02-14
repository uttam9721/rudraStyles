
// // // // import React from 'react'
// // // // import { assets } from '../assets/assets'

// // // // const Hero = () => {
// // // //   return (
// // // //     <div className='flex flex-col sm:flex-row border border-gray-400'>
// // // //         {/* hero left */}
// // // //         <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
// // // //         <div className="text-[#414141]">
// // // //         <div className='flex items-center gap-2'>

// // // //             <p className='w-8 md:w-11 h-[-2px] bg-[#414141]'></p>
// // // //             <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
// // // //         </div>
// // // //         <h1 className='text-3xl sm:py lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
// // // //         <div className='flex items-center gap-2'>
// // // //             <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
// // // //             <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
// // // //         </div>
// // // //         </div>
// // // //         </div>
// // // //         {/* right section */}
// // // //         <img src={assets.hero_img} alt="hero" className='w-full h-100  sm:w-1/2' />

// // // //     </div>
// // // //   )
// // // // }

// // // // export default Hero









// // // //////////////////3d animation
// // // import React from "react";
// // // import ClothModel from "./ClothModel";

// // // const Hero = () => {
// // //   return (
// // //     <section className="flex flex-col sm:flex-row border border-gray-300 h-[80vh]">

// // //       {/* LEFT SECTION */}
// // //       <div className="w-full sm:w-1/2 flex items-center justify-center px-10 h-full">
// // //         <div className="text-[#414141] max-w-md">

// // //           <div className="flex items-center gap-3 mb-4">
// // //             <span className="w-10 h-[1px] bg-[#414141]" />
// // //             <p className="font-medium text-sm tracking-wide">
// // //               OUR BESTSELLERS
// // //             </p>
// // //           </div>

// // //           <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
// // //             Latest Arrivals
// // //           </h1>

// // //           <div className="flex items-center gap-3 cursor-pointer group">
// // //             <p className="font-semibold text-sm md:text-base">
// // //               SHOP NOW
// // //             </p>
// // //             <span className="w-10 h-[1px] bg-[#414141] 
// // //                              group-hover:w-14 transition-all duration-300" />
// // //           </div>

// // //         </div>
// // //       </div>

// // //       {/* RIGHT SECTION (3D MODEL) */}
// // //       <div className="w-full sm:w-1/2 h-full bg-gray-50 flex items-center justify-center overflow-hidden">
// // //         <ClothModel />
// // //       </div>

// // //     </section>
// // //   );
// // // };

// // // export default Hero;






// // //////////////////3d animation
// // import React from "react";
// // import { motion } from "framer-motion";
// // import ClothModel from "./ClothModel";

// // const textContainer = {
// //   hidden: {},
// //   show: {
// //     transition: {
// //       staggerChildren: 0.15,
// //     },
// //   },
// // };

// // const fadeUp = {
// //   hidden: { opacity: 0, y: 25 },
// //   show: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.6, ease: "easeOut" },
// //   },
// // };

// // const Hero = () => {
// //   return (
// //     <section className="flex flex-col sm:flex-row border border-gray-300 h-[80vh] overflow-hidden">

// //       {/* LEFT SECTION */}
// //       <div className="w-full sm:w-1/2 flex items-center justify-center px-10 h-full">
// //         <motion.div
// //           className="text-[#414141] max-w-md"
// //           variants={textContainer}
// //           initial="hidden"
// //           animate="show"
// //         >

// //           {/* Bestseller */}
// //           <motion.div
// //             variants={fadeUp}
// //             className="flex items-center gap-3 mb-4"
// //           >
// //             <span className="w-10 h-[1px] bg-[#414141]" />
// //             <p className="font-medium text-sm tracking-wide">
// //               OUR BESTSELLERS
// //             </p>
// //           </motion.div>

// //           {/* Heading */}
// //           <motion.h1
// //             variants={fadeUp}
// //             className="text-3xl md:text-5xl font-semibold leading-tight mb-6"
// //           >
// //             Latest Arrivals
// //           </motion.h1>

// //           {/* CTA */}
// //           <motion.div
// //             variants={fadeUp}
// //             className="flex items-center gap-3 cursor-pointer group w-fit"
// //           >
// //             <p className="font-semibold text-sm md:text-base">
// //               SHOP NOW
// //             </p>
// //             <span
// //               className="w-10 h-[1px] bg-[#414141]
// //                          group-hover:w-14 transition-all duration-300"
// //             />
// //           </motion.div>

// //         </motion.div>
// //       </div>

// //       {/* RIGHT SECTION (3D MODEL) */}
// //       <div className="w-full sm:w-1/2 h-full bg-gray-50 flex items-center justify-center overflow-hidden">
// //         <ClothModel />
// //       </div>

// //     </section>
// //   );
// // };

// // export default Hero;









// ///////////////
// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const fadeUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: "easeOut" },
//   },
// };

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="min-h-[85vh] bg-cream flex items-center overflow-hidden">
//       <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-10 items-center">

//         {/* LEFT CONTENT */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           animate="show"
//           className="text-[#1f2937] max-w-xl"
//         >
//           <motion.p
//             variants={fadeUp}
//             className="uppercase tracking-widest text-sm text-gray-600 mb-4"
//           >
//             Premium Clothing
//           </motion.p>

//           <motion.h1
//             variants={fadeUp}
//             className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
//           >
//             Style That <br />
//             Defines <span className="text-[#ff6a00]">You</span>
//           </motion.h1>

//           <motion.p
//             variants={fadeUp}
//             className="text-gray-700 text-base md:text-lg mb-8"
//           >
//             Discover timeless fashion crafted for comfort,
//             quality, and everyday confidence.
//           </motion.p>

//           <motion.button
//             variants={fadeUp}
//             onClick={() => navigate("/collection")}
//             className="bg-black text-white px-8 py-3 rounded-full
//                        hover:bg-[#ff6a00] transition-all duration-300 cursor-pointer"
//           >
//             Shop Now
//           </motion.button>
//         </motion.div>

//         {/* RIGHT IMAGE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="flex justify-center"
//         >
//           <img
//             src="/shoping (2).jpg"
//             alt="Shopping Cart with Clothes"
//             className="w-[80%] max-w-md sm:items-center mx-auto"
//           />
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default Hero;




import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#fff7ed] via-white to-[#fff]">

      {/* Decorative Blobs */}
      <div className="absolute top-[-80px] left-[-80px] w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-[-100px] right-[-80px] w-80 h-80 bg-orange-300 rounded-full blur-3xl opacity-40"></div>

      <div className="container mx-auto px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-block mb-5 px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm"
          >
            🔥 New Collection 2026
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900"
          >
            Style That <br />
            Defines <span className="text-[#ff6a00]">You</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-lg mb-8"
          >
            Discover premium fashion designed for comfort,
            confidence, and everyday elegance.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex gap-4 mb-8">
            <button
              onClick={() => navigate("/collection")}
              className="bg-black text-white px-8 py-3 rounded-full
                         hover:bg-[#ff6a00] transition-all duration-300 shadow-lg"
            >
              Shop Now →
            </button>

            <button
              className="px-8 py-3 rounded-full border border-gray-300
                         hover:border-[#ff6a00] hover:text-[#ff6a00]
                         transition-all duration-300"
            >
              Explore
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="flex gap-8 text-sm text-gray-700"
          >
            <div>
              <p className="font-bold text-xl">10K+</p>
              <p>Customers</p>
            </div>
            <div>
              <p className="font-bold text-xl">500+</p>
              <p>Products</p>
            </div>
            <div>
              <p className="font-bold text-xl">4.9★</p>
              <p>Rating</p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
       {/* RIGHT SIDE — ULTRA PREMIUM */}
{/* RIGHT IMAGE — PREMIUM DESIGN */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  className="relative flex justify-center items-center"
>

  {/* Glow Background */}
  <div className="absolute w-[420px] h-[420px] bg-orange-200 rounded-full blur-3xl opacity-40"></div>

  {/* Main Image */}
  <motion.img
    src="/shoping (2).jpg"
    alt="Fashion Model"
    className="relative w-[85%] max-w-md rounded-3xl shadow-2xl z-10"
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />

  {/* Floating SALE Card */}
  <motion.div
    className="absolute top-6 left-6 bg-white px-5 py-3 rounded-2xl shadow-xl z-20"
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
  >
    <p className="text-sm font-semibold text-gray-700">🔥 SALE</p>
    <p className="text-lg font-bold text-orange-600">Up to 40% OFF</p>
  </motion.div>

  {/* Floating Price Card */}
  <motion.div
    className="absolute bottom-6 right-6 bg-white px-5 py-3 rounded-2xl shadow-xl z-20"
    animate={{ y: [0, 8, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
  >
    <p className="text-sm text-gray-500">Starting at</p>
    <p className="text-xl font-bold text-gray-900">₹799</p>
  </motion.div>

</motion.div>


      </div>
    </section>
  );
};

export default Hero;





