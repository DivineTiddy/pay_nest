import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const HomeNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex px-3 flex-col items-end w-full top-[0%] right-[0%] fixed z-50">
      <div className=" w-[100%] font-inter  flex items-center justify-between py-2 md:py-4 px-3 md:px-6 bg-[#2A2A2A] rounded-2xl mt-5">
        <img src="\image\payNestLogo.svg" alt="logo" className="w-9 md:w-12" />
        <div className="lg:hidden flex items-center">
          <Link to="/login" className="px-7 py-3 text-[#EAEAEA] cursor-pointer">
            Login
          </Link>
          <img
            onClick={() => setOpen((e) => !e)}
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
          <Link
            to="/register"
            className="px-7 py-3 text-[#F0F1FF] cursor-pointer bg-[#474ED3] rounded-sm"
          >
            Get Account
          </Link>
        </div>
      </div>
      {open && (
        <div className="duration-300 ease-in-out mt-1 w-[50%] bg-white text-base font-normal lg:hidden text-[#222222] flex flex-col gap-6 py-4 px-3 border-[1px] border-[#E9E9E9] rounded-lg drop-shadow-2xl">
          <Scroll className="cursor-pointer" to="Personal" smooth={true} duration={900}>
            Personal
          </Scroll>
          <Scroll className="cursor-pointer" to="About" smooth={true} duration={900}>
            About Us
          </Scroll>
          <Scroll className="cursor-pointer" to="Contact" smooth={true} duration={900}>
            Contact Us
          </Scroll>
          <Scroll className="cursor-pointer" to="Blogs" smooth={true} duration={900}>
            Blogs
          </Scroll>
        </div>
      )}
    </div>
  );
};

export default HomeNav;
