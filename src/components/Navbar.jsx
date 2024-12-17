import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#3d4e75] p-6 text-white">
      <div className="flex items-center px-10">
        <img
          src="https://www.jiffysoftwares.in/assets/img/jiffy_logo-removebg.png"
          alt="Logo"
          className=" w-12 h-12 mr-2"
        />
        <h1 className="font-semibold text-[30px]">JIFFY SOFTWARE</h1>
      </div>

      <div className="flex space-x-8">
        <Link to="/"  className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/product-and-service"   className="hover:text-blue-400">Product & Services</Link>
        <Link to="/work"  className="hover:text-blue-400">Work</Link>
        <Link to="/team" className="hover:text-blue-400">Team</Link>
        <Link to="/contact"  className="hover:text-blue-400">Contact</Link>
        <Link
          to="/blog"
          className="border border-blue-400 px-3 py-1 rounded hover:bg-blue-400 hover:text-white"
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
