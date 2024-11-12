import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="mt-5 text-white text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            consequuntur sapiente velit tempora accusamus.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a className=" hover:text-white text-sm" href="#Header">
              Home
            </a>
            <a className=" hover:text-white text-sm" href="#About">
              About
            </a>
            <a className=" hover:text-white text-sm" href="#Contact">
              Contact Us
            </a>
            <a className=" hover:text-white text-sm" href="#">
              Privacy Policy
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3 ">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe to our NewsLetter</h3>
          <p className="text-gray-400 max-w-80 mb-4 text-sm">
            The latest news, articles, and resources , sent to your inbox weekly.
          </p>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        Copyright 2024 &copy; Vaibhav Dhiman. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;