import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#007999] mt-3 text-white px-2">
      <div className="max-w-7xl mx-auto py-7 flex flex-row justify-between ">
        {/* Logo */}
        <div className="flex flex-col gap-2">
          <img
            src="/logo.png"
            alt="MA Consultant"
            className="w-32 filter brightness-0 invert"
          />
        </div>

        {/* Social icons */}
        <div className="flex items-start md:items-end gap-3 mt-6 md:mt-0">
          <a href="#" className="rounded-full border p-2">
            <FaFacebookF className="w-4 h-4 hover:text-gray-300" />
          </a>
          <a href="#" className="rounded-full border p-2">
            <FaLinkedinIn className="w45 h45 hover:text-gray-300" />
          </a>
          <a href="#" className="rounded-full border p-2">
            <FaTwitter className="w-4 h-4 hover:text-gray-300" />
          </a>
        </div>
      </div>

      {/* Navigation, Talk to us, Legal */}
      <div className="grid grid-cols-3 max-w-5xl mx-auto border border-[#0d93b8] p-2 md:p-4  rounded-2xl gap-12">
        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-2">NAVIGATION</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>

        {/* Talk To Us */}
        <div className="mx-auto">
          <h3 className="font-semibold mb-2">TALK TO US</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="mailto:support@ercom.com">suport@.com</a>
            </li>
            <li>
              <a href="tel:+66823991145">+66 399 115</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="ml-auto">
          <h3 className="font-semibold mb-2">LEGAL</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">General Info</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-white/20 mt-6 pt-4 text-center text-xs text-gray-200 py-4">
        © 2019 Lift Media. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
