import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form className="text-black h-screen bg-[#F5F5F5] flex flex-col justify-center items-center ">
      <div className="flex flex-col w-[600px] py-5 px-10 bg-[#FDFDFD] border-[1px] border-[#F2F2F2] rounded-[16px]">
        <div className="w-full flex justify-center">
          <img src="\image\payNestLogo.svg" alt="logo" className="w-[85px] " />
        </div>
        <div className="mt-7">
          <h1 className="font-inter font-bold text-[30px] text-black text-center ">
            Welcome Back!
          </h1>
          <div className="space-y-[30px] mt-5 text-base">
            <div className="flex flex-col">
              <label>Email Address</label>
              <input
                type="text"
                placeholder="abc@gmail.com"
                className="border-[1px] text-[#2B2B2B] border-[#DBDBDB] rounded-[8px] outline-0 py-3.5 px-4"
              />
            </div>
            <div className="flex flex-col">
              <label>Password</label>
              <input
                type="text"
                placeholder="xxxxxxxxxxxxx"
                className="border-[1px] text-[#2B2B2B] border-[#DBDBDB] rounded-[8px] outline-0 py-3.5 px-4"
              />
              <Link className="text-end text-style-underline">Forgot password?</Link>
            </div>
          </div>
        </div>
        <button className="bg-[#474ED3] text-[#F0F1FF] mt-10 py-4 rounded-[8px] w-full font-inter text-base font-normal cursor-pointer">
          Create Account
        </button>
        <span className="text-base font-normal text-center mt-10">
          Don’t have an account?
          <Link to="/register" className="font-semibold ml-2">
            Create Account
          </Link>
        </span>
      </div>
    </form>
  );
};

export default Login;
