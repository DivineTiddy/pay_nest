import React from "react";
import {  Element } from "react-scroll";

const Footer = () => {
  return (
    <Element name="Contact" className="top-[100%] border-t-[1px] border-[#C7C7C7] px-3 md:px-0  py-15 pb-40 mt-30">
      <div className="  lg:px-25 flex flex-col gap-8 md:gap-0 md:flex-row items-start justify-between ">
      <div className="md:w-[25%] space-y-4">
        <span className="flex items-center gap-1.5">
          <img src="\image\payNestLogo.svg" className="w-14" />
          <h1 className="text-[#474ED3] font-semibold text-[40px]">PayNest</h1>
        </span>
        <p className="text-[#767676] font-inter font-medium text-sm">
          Paynest is a fast, secure, and user-friendly platform for payments and
          mobile banking. Send money, pay bills, and manage your finances with
          ease, anytime, anywhere.
        </p>
      </div>
      <div className="space-y-4 text-base">
        <h1 className="font-semibold  text-black">Quick Links</h1>
        <p className="text-[#767676] ">Contact </p>
        <p className="text-[#767676] ">About Us</p>
        <p className="text-[#767676] ">Blogs</p>
      </div>
      <div className="space-y-4 text-base">
        <h1 className="font-semibold  text-black">
          <span className="text-[#767676] ">Designed by</span> Chinedu J.
          Ozulu
        </h1>
        <p className="text-[#767676] ">+234(0)7067476896 </p>
        <p className="text-[#767676] ">czulu07.cj@gmail.com</p>
      </div>
      <div className="space-y-4 text-base">
        <h1 className="font-semibold  text-black">
          <span className="text-[#767676] ">Developed by</span>
          Divine
        </h1>
        <p className="text-[#767676] ">+234(0)8142809072 </p>
        <p className="text-[#767676] ">divinetidy@gmail.com</p>
      </div>
    </div>
    </Element>
  );
};

export default Footer;
