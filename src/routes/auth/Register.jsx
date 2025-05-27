import { registration } from "@/hooks/auth";
import { setCookie } from "@/manager/cookies";
import Loarder from "@/ui/loader/Loarder";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const firstName = watch("first_Name");
  const lastName = watch("last_Name");
  const email = watch("email");
  const password = watch("password");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const userWithBalance = {
      ...data,
      balance: 100, // Manually add balance here
    };
    try {
      setIsLoading(true);
      const responses = await registration(userWithBalance);
      setCookie(responses.data, responses.accessToken);
      toast.success("register success", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
      navigate("/verify");
    } catch (error) {
      const { response } = error;

      toast.error(`${response.data.error}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Zoom,
      });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-[#F5F5F5] px-3  lg:py-4 lg:px-10 h-full w-full flex justify-center items-center"
    >
      {/* Registration Form */}
      <div
        className={` flex flex-col py-5 px-5 md:px-10 bg-[#FDFDFD]  border-[1px] border-[#F2F2F2] rounded-[16px] w-full md:w-[600px]`}
      >
        <div className="w-full flex justify-center">
          <img
            src="/image/payNestLogo.svg"
            alt="logo"
            className="w-[60px] md:w-[85px]"
          />
        </div>
        <div className="flex flex-col justify-center mt-7">
          <h1 className="font-inter font-bold text-2xl md:text-[30px] text-black text-center">
            Welcome to PayNest
          </h1>
          <div className="w-full mt-5 space-y-[30px] font-inter font-normal text-base">
            <div className="text-[#2B2B2B] w-full space-y-4 md:space-y-0  md:flex items-center justify-between">
              <div className="  flex flex-col gap-2 lg:w-[200px]">
                <label>First Name</label>
                <input
                  type="text"
                  {...register("first_Name", { required: true })}
                  aria-invalid={errors.first_Name ? "true" : "false"}
                  placeholder="Divine"
                  className={`duration-300 ease-in-out border-[1px] text-[#2B2B2B] rounded-[8px] outline-0 py-3.5 px-4 ${
                    firstName ? "border-[#474ED3]" : "border-[#DBDBDB]"
                  }`}
                />
              
              </div>
              <div className="flex flex-col gap-2 lg:w-[200px]">
                <label>Last Name</label>
                <input
                  type="text"
                  {...register("last_Name", { required: true })}
                  aria-invalid={errors.last_Name ? "true" : "false"}
                  placeholder="Tiddy"
                  className={`duration-300 ease-in-out border-[1px] text-[#2B2B2B] rounded-[8px] outline-0 py-3.5 px-4 ${
                    lastName ? "border-[#474ED3]" : "border-[#DBDBDB]"
                  }`}
                />
               
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Email Address</label>
              <input
                type="email"
                {...register("email", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
                placeholder="example@gmail.com"
                className={`duration-300 ease-in-out border-[1px] text-[#2B2B2B] rounded-[8px] outline-0 py-3.5 px-4 ${
                  email ? "border-[#474ED3]" : "border-[#DBDBDB]"
                }`}
              />
            
            </div>
            <div className="flex flex-col gap-2">
              <label>Create Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                aria-invalid={errors.password ? "true" : "false"}
                placeholder="********"
                className={`duration-300 ease-in-out border-[1px] text-[#2B2B2B] rounded-[8px] outline-0 py-3.5 px-4 ${
                  password ? "border-[#474ED3] " : "border-[#DBDBDB]"
                }`}
              />
             
            </div>
            <button
              type="submit"
              className={`${
                isLoading ? " cursor-not-allowed " : " cursor-pointer"
              } text-[#F0F1FF] bg-[#474ED3] flex justify-center items-center py-4 rounded-[8px] w-full text-center text-base font-normal `}
            >
              {isLoading ? <Loarder /> : "Create Account"}
            </button>
          </div>
          <span className="mt-10 md:mt-3 text-center">
            Have an account?
            <Link to="/login" className="font-semibold ml-1">
              Login
            </Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Register;
