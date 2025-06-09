import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2 items-center">
        <img src="\icon\404.svg" alt="image" className="w-auto h-auto" />
        <h1 className="text-[#282828] text-xl font-bold">Search Not Found!</h1>
        <p className="text-[#767676] font-normal text-base">
          We cannot find the page you are looking for
        </p>
        <Link
          to="/"
          className="mt-8 rounded-[8px] py-3 px-5 bg-[#474ED3] text-base font-bold text-[#F0F1FF]"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
