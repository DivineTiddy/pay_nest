import React from "react";
import HomeNav from "../nav/HomeNav";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Counter } from "../ui/couter";
import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  
  return (
    <div className="">
      <HomeNav />
      <div  className="mt-15 md:mt-30 w-full flex flex-col md:flex-row md:items-end  ">
        <div className="flex flex-col items-center text-center md:items-start md:text-start md:w-[50%]  font-inter space-y-4">
          <LazyLoadImage
            src="\icon\fast.svg"
            alt="icon"
            className="w-50"
          />
          <h1 className="text-[#2B2B2B] font-bold text-[33px] lg:text-[60px] lg:leading-20">
            Banking That <br /> Feels Like Home.
          </h1>
          <p className="text-[#7D7D7D] text-sm lg:text-base font-normal w-[90%] md:w-[79%] leading-4  md:leading-6">
            Send, receive, and manage your finances securely—all from one
            intuitive mobile banking app built for peace of mind.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-5 mt-8 font-inter text-base">
            <Link to="/register" className="px-22 md:px-6 py-3.5 text-[#F0F1FF] cursor-pointer bg-[#474ED3] rounded-sm">
              Get Started
            </Link >
            <p className="text-[#2B2B2B] font-bold">Licensed by CBN</p>
          </div>
          <div className="flex items-start mt-10 md:mt-20 gap-3 ">
            <LazyLoadImage
              src="\image\registerUser.svg"
              alt="icon"
              className="w-25 md:w-30 "
            />
            <span className="-mt-2 text-start">
                <Counter targetNumber={500} duration={2000} />
              <p className="text-[#767676] font-normal">Registered Users</p>
            </span>
          </div>
        </div>
        {/* // mac_up image */}
        <div   className="   mt-10 md:mt-0 md:w-[50%]  ">
        <Motion.div
         
         initial={{ x: "30%", opacity: 0 }} // Start off-screen to the right
         animate={{ x: 0, opacity: 1 }} // Animate to original position
         transition={{ type: "spring", stiffness: 50, damping: 20 }} // Customize animation
       >
         <img
           src="\image\mac_up1.svg"
           className=" z-40 absolute mt-5 md:ml-60 ml-30 md:w-[18%]"
           alt="logo"
         />

         <img
           src="\image\mac_up.svg"
           className="h-full "
           alt="logo"
         />
         <img
           src="\image\mac_up2.svg"
           className="  z-40  absolute -mt-20  md:w-[18%]"
           alt="logo"
         />
       </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
