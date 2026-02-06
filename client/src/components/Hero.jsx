
// // import React from 'react'
// // import { assets } from '../assets/assets'

// // const Hero = () => {
// //   return (
// //     <div className='flex flex-col sm:flex-row border border-gray-400'>
// //         {/* hero left */}
// //         <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
// //         <div className="text-[#414141]">
// //         <div className='flex items-center gap-2'>

// //             <p className='w-8 md:w-11 h-[-2px] bg-[#414141]'></p>
// //             <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
// //         </div>
// //         <h1 className='text-3xl sm:py lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
// //         <div className='flex items-center gap-2'>
// //             <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
// //             <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
// //         </div>
// //         </div>
// //         </div>
// //         {/* right section */}
// //         <img src={assets.hero_img} alt="hero" className='w-full h-100  sm:w-1/2' />

// //     </div>
// //   )
// // }

// // export default Hero









// //////////////////3d animation
// import React from "react";
// import ClothModel from "./ClothModel";

// const Hero = () => {
//   return (
//     <section className="flex flex-col sm:flex-row border border-gray-300 h-[80vh]">

//       {/* LEFT SECTION */}
//       <div className="w-full sm:w-1/2 flex items-center justify-center px-10 h-full">
//         <div className="text-[#414141] max-w-md">

//           <div className="flex items-center gap-3 mb-4">
//             <span className="w-10 h-[1px] bg-[#414141]" />
//             <p className="font-medium text-sm tracking-wide">
//               OUR BESTSELLERS
//             </p>
//           </div>

//           <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
//             Latest Arrivals
//           </h1>

//           <div className="flex items-center gap-3 cursor-pointer group">
//             <p className="font-semibold text-sm md:text-base">
//               SHOP NOW
//             </p>
//             <span className="w-10 h-[1px] bg-[#414141] 
//                              group-hover:w-14 transition-all duration-300" />
//           </div>

//         </div>
//       </div>

//       {/* RIGHT SECTION (3D MODEL) */}
//       <div className="w-full sm:w-1/2 h-full bg-gray-50 flex items-center justify-center overflow-hidden">
//         <ClothModel />
//       </div>

//     </section>
//   );
// };

// export default Hero;






//////////////////3d animation
import React from "react";
import { motion } from "framer-motion";
import ClothModel from "./ClothModel";

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row border border-gray-300 h-[80vh] overflow-hidden">

      {/* LEFT SECTION */}
      <div className="w-full sm:w-1/2 flex items-center justify-center px-10 h-full">
        <motion.div
          className="text-[#414141] max-w-md"
          variants={textContainer}
          initial="hidden"
          animate="show"
        >

          {/* Bestseller */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-4"
          >
            <span className="w-10 h-[1px] bg-[#414141]" />
            <p className="font-medium text-sm tracking-wide">
              OUR BESTSELLERS
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-5xl font-semibold leading-tight mb-6"
          >
            Latest Arrivals
          </motion.h1>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 cursor-pointer group w-fit"
          >
            <p className="font-semibold text-sm md:text-base">
              SHOP NOW
            </p>
            <span
              className="w-10 h-[1px] bg-[#414141]
                         group-hover:w-14 transition-all duration-300"
            />
          </motion.div>

        </motion.div>
      </div>

      {/* RIGHT SECTION (3D MODEL) */}
      <div className="w-full sm:w-1/2 h-full bg-gray-50 flex items-center justify-center overflow-hidden">
        <ClothModel />
      </div>

    </section>
  );
};

export default Hero;
