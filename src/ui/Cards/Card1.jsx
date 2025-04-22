import React from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card1 = (e) => {
  return (
    <div className="text-center flex flex-col items-center space-y-5 py-8 px-5 md:px-7 border-[1px] border-[#D5D5D5] shadow-sm rounded-lg">
      <LazyLoadImage src={e.icon} alt="icon" className="w-13 md:w-0" />
      <div className="space-y-3">
        <h2 className="text-[#2B2B2B] text-lg md:text-[20px] font-bold font-inter">{e.title} </h2>
        <p className="text-[#767676] font-normal leading-5 text-sm font-inter">{e.description}</p>
      </div>
    </div>
  );
};

export default Card1;
