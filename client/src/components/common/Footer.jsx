import React from "react";
import logo from "../../assets/logo.png";
// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex flex-col items-center justify-center space-x-6 ">
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="50"
            className="mr-2 mt-2 mb-3"
          />
          <h1 className="text-4xl text-[#85b0ff] font-bold pb-2 text-center">
            Kernel
          </h1>
        </div>
        {/*
        <div className="flex flex-row justify-center text-center py-4 font-semibold space-x-6">
          <Link to="/about" className="hover:text-gray-500">
            About Us
          </Link>
          <Link to="/contact" className="hover:text-gray-500">
            Contact
          </Link>
          <p className="text-gray-500 hover:cursor-not-allowed">Join Us</p>
          <p className="text-gray-500 hover:cursor-not-allowed">Donate</p>
        </div>
        */}
        <div className="text-center pt-2 text-xl font-semibold">
          <h1>
            Built with ❤️ by{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Vijayragav-V"
              className="font-bold hover:text-[#4CAF50]"
            >
              Vijay V.
            </a>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
