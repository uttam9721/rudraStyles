// import React from "react";
// import { assets } from "../assets/assets";

// const Footer = () => {
//   return (
//     <footer className="mt-40 text-sm text-gray-600">
      
//       {/* Top Section */}
//       <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10">
        
//         {/* Logo & Description */}
//         <div>
//           <img src={assets.logo} className="w-32 mb-5" alt="Forever Logo" />
//           <p className="md:w-2/3">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi
//             reprehenderit culpa magni minus eligendi, dolorum asperiores.
//           </p>
//         </div>

//         {/* Company Links */}
//         <div>
//           <p className="text-xl font-medium mb-5 text-gray-800">COMPANY</p>
//           <ul className="flex flex-col gap-2">
//             <li className="cursor-pointer hover:text-black">Home</li>
//             <li className="cursor-pointer hover:text-black">About Us</li>
//             <li className="cursor-pointer hover:text-black">Delivery</li>
//             <li className="cursor-pointer hover:text-black">Privacy Policy</li>
//           </ul>
//         </div>

//         {/* Contact */}
//         <div>
//           <p className="text-xl font-medium mb-5 text-gray-800">GET IN TOUCH</p>
//           <ul className="flex flex-col gap-2">
//             <li>+1236547890</li>
//             <li>contact@forever.com</li>

//           </ul>
//           <input
//     type="email"
//     placeholder="Enter your email"
//     className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
//   />

//   <button className="w-full mt-3 bg-black text-white py-2 rounded-md hover:bg-gray-800">
//     Submit
//   </button>
//         </div>

//       </div>

//       {/* Bottom Section */}
//       <hr />
//       <p className="py-5 text-center text-xs sm:text-sm">
//         © 2026 Forever. All rights reserved.
//       </p>

//     </footer>
//   );
// };

// export default Footer;







import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative bg-white text-gray-600 overflow-hidden pt-44">

      {/* 3D BRAND BACKGROUND */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
        <div className="relative mb-10 animate-float">

          {/* Shadow Layer */}
          <h1 className="absolute inset-0 text-[14rem] font-extrabold 
                         text-gray-700 blur-md translate-x-3 translate-y-3">
            RudraStyles
          </h1>

          {/* Depth Layer */}
          <h1 className="absolute inset-0 text-[14rem] font-extrabold 
                         text-gray-200 translate-x-1 translate-y-1">
            RudraStyles
          </h1>

          {/* Main Text */}
          <h1 className="relative text-[14rem] font-extrabold 
                         text-gray-100 tracking-tight">
            RudraStyles
          </h1>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 mb-20">

          {/* Brand */}
          <div>
            <img src={assets.logo} className="w-32 mb-5" alt="RudraStyles" />
            <p className="md:w-2/3">
              RudraStyles — redefining everyday fashion with premium comfort
              and bold designs.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xl font-semibold mb-5 text-gray-800">
              COMPANY
            </p>
            <ul className="flex flex-col gap-2">
              <li className="hover:text-black cursor-pointer">Home</li>
              <li className="hover:text-black cursor-pointer">Shop</li>
              <li className="hover:text-black cursor-pointer">Collections</li>
              <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-xl font-semibold mb-5 text-gray-800">
              STAY UPDATED
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 
                         rounded-md outline-none"
            />

            <button className="w-full mt-3 bg-black text-white py-2 
                               rounded-md hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>

        </div>

        <hr />

        <p className="py-5 text-center text-sm">
          © 2026 RudraStyles. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
