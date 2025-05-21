import React from "react";

export const TopDashBoardNav = () => {
  return (
    <div className="bg-[#FDFDFD] px-4 py-2 w-full md:hidden flex justify-between items-center border-[#DFDFDF] border-b-[1px] ">
      <div className="flex items-center gap-1.5">
        <img src="\image\payNestLogo.svg" alt="logo" className="w-9 md:w-12" />
        <h1 className="text-[#474ED3] text-2xl font-bold">PayNest</h1>
      </div>
       <img
          src="\icon\burger.svg"
          alt="icon"
          className="w-9 md:w-12  cursor-pointer"
        />
    </div>
  );
};
