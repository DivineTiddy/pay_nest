import React from "react";
import { Link } from "react-router-dom";
import {  Element } from 'react-scroll';


const Intro = () => {
  return (
    <Element name="Personal"  className=" mt-20 md:mt-26 grid grid-cols-1 gap-20 md:gap-30  ">
      {/* frame 1 */}
      <div className="space-y-10 md:flex justify-center items-center md:gap-10">
        <div className="space-y-4 flex flex-col items-center text-center md:w-[50%] md:text-start md:items-start">
          <h2 className="text-black md:leading-12 text-2xl  lg:text-[42px] font-semibold font-inter w-[70%]">
            Fast payments and banking without the friction
          </h2>
          <p className="text-[#767676] px-5 md:px-0 leading-5 font-inter font-normal md:w-[80%]">
            Experience seamless transactions, instant transfers, and a smooth
            banking journey, all in one place.
          </p>
          <Link to="/register" className="bg-[#474ED3] py-3 px-6 rounded-sm mt-8">
            Get Account
          </Link>
        </div>
        <img src="\image\image1.svg" alt="image" className="w-full md:w-[50%]" />
      </div>
      {/* frame 2 */}
      <div className="space-y-10 md:flex-row-reverse md:flex  justify-center items-center md:gap-10">
        <div className="space-y-4 flex flex-col items-center text-center md:w-[50%] md:text-start md:items-start">
          <h2 className="text-black px-7 md:px-0 md:leading-12 text-2xl  lg:text-[42px] font-semibold font-inter w-[90%]">
            Control Your Finances by Monitoring Your Transactions
          </h2>
          <p className="text-[#767676] px-5 md:px-0 leading-5 font-inter font-normal">
            Experience seamless transactions, instant transfers, and a smooth
            banking journey, all in one place.
          </p>
          <Link to="register" className="bg-[#474ED3] py-3 px-6 rounded-sm mt-8">
            Get Account
          </Link>
        </div>
        <img src="\image\image2.svg" alt="image" className="w-full md:w-[50%]" />
      </div>
    </Element >
  );
};

export default Intro;
