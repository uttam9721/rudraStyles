import React from "react";
import { assets } from "../assets/assets";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="relative bg-white text-gray-600 overflow-hidden pt-28 sm:pt-44">

      {/* ================= 3D BRAND BACKGROUND ================= */}
      <div
        className="absolute inset-0 
                   flex justify-center items-center sm:items-end
                   pointer-events-none select-none 
                   overflow-hidden 
                   -translate-y-20 sm:translate-y-0
                   opacity-30 sm:opacity-100"
        aria-hidden="true"
      >
        <div className="relative scale-[0.55] sm:scale-100 mb-0 sm:mb-10 animate-float">
          
          {/* Shadow */}
          <h1 className="absolute inset-0 text-[6rem] sm:text-[14rem] 
                         font-extrabold text-gray-700 blur-md 
                         translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3">
            RudraStyles
          </h1>

          {/* Depth */}
          <h1 className="absolute inset-0 text-[6rem] sm:text-[14rem] 
                         font-extrabold text-gray-200 
                         translate-x-1 translate-y-1">
            RudraStyles
          </h1>

          {/* Main */}
          <h1 className="relative text-[6rem] sm:text-[14rem] 
                         font-extrabold text-gray-100">
            RudraStyles
          </h1>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-50 max-w-7xl mx-auto px-6">
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
            />

            <button className="w-full mt-3 bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>

        <hr />

        <p className="py-5 text-center text-sm">
          © 2026 RudraStyles. All rights reserved.
        </p>
      </div>
      {/* ================= FOLLOW US INSTAGRAM BUTTON ================= */}
<a
  href="https://www.instagram.com/rudrafashionhouse9695"
  target="_blank"
  rel="noopener noreferrer"
  className="absolute bottom-6 right-2
             flex items-center gap-2
             bg-black text-white
             px-5 py-2
             rounded-full
             text-sm font-medium
             hover:bg-gray-800
             transition-all duration-300
             shadow-lg z-50"
>
  <FaInstagram className="text-base" />
  <span>Follow us</span>
</a>


    </footer>
  );
};

export default Footer;
