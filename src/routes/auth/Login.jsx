import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const email = watch("email");
  const password = watch("password");
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-black h-screen bg-[#F5F5F5] px-3 flex flex-col justify-center items-center "
    >
      <div className="flex flex-col w-full px-3 md:w-[600px] py-5 md:px-10 bg-[#FDFDFD] border-[1px] border-[#F2F2F2] rounded-[16px]">
        <div className="w-full flex justify-center">
          <img
            src="\image\payNestLogo.svg"
            alt="logo"
            className="md:w-[85px] w-[60px]"
          />
        </div>
        <div className="mt-7">
          <h1 className="font-inter font-bold text-2xl md:text-[30px] text-black text-center ">
            Welcome Back!
          </h1>
          <div className="space-y-[30px] mt-5 text-base">
            <div className="flex flex-col  gap-2">
              <label>Email Address</label>
              <input
                {...register("email", { required: true })}
                type="text"
                placeholder="abc@gmail.com"
                className={`duration-300 ease-in-out border-[1px] text-[#2B2B2B] rounded-[8px] outline-0 py-3.5 px-4 ${
                  email ? "border-[#474ED3]" : "border-[#DBDBDB]"
                }`}
              />
            </div>
            <div className="flex flex-col  gap-2">
              <label>Password</label>
              <input
                {...register("password", { required: true })}
                type="text"
                placeholder="xxxxxxxxxxxxx"
                className={`duration-300 ease-in-out border-[1px] text-[#2B2B2B] rounded-[8px] outline-0 py-3.5 px-4 ${
                  password ? "border-[#474ED3]" : "border-[#DBDBDB]"
                }`}
              />
              <Link className="text-end underline ">Forgot password?</Link>
            </div>
          </div>
        </div>
        <button className="bg-[#474ED3] text-[#F0F1FF] mt-10 py-4 rounded-[8px] w-full font-inter text-base font-normal cursor-pointer">
          Login
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
