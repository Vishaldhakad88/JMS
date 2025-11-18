import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../assets/CategoryIcons/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 mt-5" >
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + Text */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} alt="JMS Store Logo" className="w-24 h-auto mb-4" />
          <p className="text-sm text-gray-400 text-center md:text-left">
            JMS Store – Your one-stop shop for top quality products at the best prices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-center text-gray-300">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-6">
            <FaFacebook className="text-4xl hover:scale-110 transition-transform drop-shadow-2xl cursor-pointer text-[#1877F2]" />
            <FaInstagram className="text-4xl hover:scale-110 transition-transform drop-shadow-2xl cursor-pointer text-[#E4405F]" />
            <FaYoutube className="text-4xl hover:scale-110 transition-transform drop-shadow-2xl cursor-pointer text-[#FF0000]" />
            <FaTwitter className="text-4xl hover:scale-110 transition-transform drop-shadow-2xl cursor-pointer text-[#1DA1F2]" />
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} JMS Store. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
