import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-40 text-sm text-gray-600">
      
      {/* Top Section */}
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10">
        
        {/* Logo & Description */}
        <div>
          <img src={assets.logo} className="w-32 mb-5" alt="Forever Logo" />
          <p className="md:w-2/3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi
            reprehenderit culpa magni minus eligendi, dolorum asperiores.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5 text-gray-800">COMPANY</p>
          <ul className="flex flex-col gap-2">
            <li className="cursor-pointer hover:text-black">Home</li>
            <li className="cursor-pointer hover:text-black">About Us</li>
            <li className="cursor-pointer hover:text-black">Delivery</li>
            <li className="cursor-pointer hover:text-black">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xl font-medium mb-5 text-gray-800">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2">
            <li>+1236547890</li>
            <li>contact@forever.com</li>

          </ul>
          <input
    type="email"
    placeholder="Enter your email"
    className="w-full px-3 py-2 border border-gray-300 rounded-md outline-none"
  />

  <button className="w-full mt-3 bg-black text-white py-2 rounded-md hover:bg-gray-800">
    Submit
  </button>
        </div>

      </div>

      {/* Bottom Section */}
      <hr />
      <p className="py-5 text-center text-xs sm:text-sm">
        © 2026 Forever. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;
