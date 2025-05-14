import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const HomeNav = () => {
  return (
    <div className=" w-[100%] font-inter  flex items-center justify-between py-2 md:py-4 px-3 md:px-6 bg-[#2A2A2A] rounded-2xl mt-5">
      <img src="\image\payNestLogo.svg" alt="logo" className="w-9 md:w-12" />
      <div className="lg:hidden flex items-center">
        <Link to="/login" className="px-7 py-3 text-[#EAEAEA] cursor-pointer">
          Login
        </Link>
        <img
          src="\icon\burger.svg"
          alt="icon"
          className="w-9 md:w-12  cursor-pointer"
        />
      </div>
      <ul className="hidden lg:flex items-center gap-12 text-sm font-normal text-[#EAEAEA]">
        <li className="cursor-pointer">
          <Scroll to="Personal" smooth={true} duration={900}>
            Personal
          </Scroll>
        </li>
        <li className="cursor-pointer">
          <Scroll to="About" smooth={true} duration={900}>
            About Us
          </Scroll>
        </li>
        <li className="cursor-pointer">
          <Scroll to="Contact" smooth={true} duration={900}>
            Contact Us
          </Scroll>
        </li>
        <li className="cursor-pointer">
          <Scroll to="Blogs" smooth={true} duration={900}>
            Blogs
          </Scroll>
        </li>
      </ul>
      <div className="hidden lg:flex items-center text-sm gap-5 font-normal">
        <Link to="/login" className="px-7 py-3 text-[#EAEAEA] cursor-pointer">
          Login
        </Link>
        <Link to="/register"  className="px-7 py-3 text-[#F0F1FF] cursor-pointer bg-[#474ED3] rounded-sm">
          Get Account
        </Link>
      </div>
    </div>
  );
};

export default HomeNav;
