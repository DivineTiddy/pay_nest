import { userName } from "@/hooks/users";
import BackButton from "@/ui/buttons/BackButton";
import GetUser from "@/ui/loader/GetUser";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Send = () => {
  const { register, handleSubmit, watch } = useForm();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const userEmail = watch("email");
  const userAmount = watch("amount");
  const userRemark = watch("remark");
  useEffect(() => {
    if (!userEmail) return;
    const get = async () => {
      try {
        setIsLoading(true);
        const result = await userName(userEmail);
        setUser(result.data);
      } catch (error) {
        console.log(error.response.data.message);
        setUser(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    };
    get();
  }, [userEmail]);

  const onSubmit = (data) => {
    console.log(data.email);

    const userData = {
      data,
      user,
    };
    navigate("/details", { state: userData });
  };
  return (
    <div className="flex lg:items-center justify-center h-screen w-full bg-[#F5F5F5] px-5 lg:px-0">
      <div className=" mt-16 lg:mt-0 w-full lg:w-[500px]">
        <div className="w-full lg:w-[500px] flex items-center justify-between lg:justify-center">
          <BackButton />
          <h1 className="font-bold text-center text-[20px] text-[#2B2B2B]">
            {" "}
            Send Money
          </h1>

          <p className="lg:hidden"></p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 rounded-2xl bg-[#FDFDFF] py-10 px-4 lg:px-8 flex flex-col gap-4 items-center"
        >
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[#2B2B2B] font-normal text-base">
              Receiver’s Email
            </label>
            <input
              {...register("email", { required: true })}
              // onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className={`outline-0 text-base font-normal text-[#2B2B2B] border-[1px] ${
                userEmail ? "border-[#474ED3]" : "border-[#E2E2E2]"
              } py-3 px-2 rounded-[8px]`}
            />
            {user && (
              <div className=" bg-[#F1F1F1] w-full rounded-[4px] py-3.5 px-4 text-[#2B2B2B] font-semibold text-base duration-300 ease-in-out">
                {isLoading && <GetUser />}
                {!isLoading && user}
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[#2B2B2B] font-normal text-base">
              Amount
            </label>
            <input
              {...register("amount", { required: true })}
              type="text"
              placeholder="0.00"
              className={`outline-0 text-base font-normal text-[#2B2B2B] border-[1px] ${
                userAmount ? "border-[#474ED3]" : "border-[#E2E2E2]"
              } py-3 px-2 rounded-[8px]`}
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-[#2B2B2B] font-normal text-base">
              Description
            </label>
            <input
              {...register("remark", { required: true })}
              type="text"
              placeholder="Reason for transaction"
              className={`outline-0 text-base font-normal text-[#2B2B2B] border-[1px]  ${
                userRemark ? "border-[#474ED3]" : "border-[#E2E2E2]"
              } py-3 px-2 rounded-[8px]`}
            />
          </div>
          <button className="bg-[#474ED3] cursor-pointer mt-11 w-full rounded-[8px] py-3.5 px-6 font-bold text-base text-[#F3F3FF]">
            Next
          </button>
        </form>
      </div>
    </div>
  );
};

export default Send;
