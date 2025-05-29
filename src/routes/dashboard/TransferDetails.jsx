import { sentMoney } from "@/hooks/users";
import BackButton from "@/ui/buttons/BackButton";
import Loarder from "@/ui/loader/Loarder";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";

const TransferDetails = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { email, amount, remark } = location.state || {};
  const credential = {
    email,
    amount: parseFloat(amount),
    remarks: remark,
  };

  // Format amount for display
  const formattedAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  }).format(credential.amount);

  async function handleSubmit() {
    try {
      setLoading(true);
      await sentMoney(credential);
      // toast.success("Send successfully", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: false,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      //   transition: Zoom,
      // });
      navigate("/success", { state: credential });
    } catch (error) {
      toast.error(`${error.response.data.error}`, {
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
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col lg:justify-center items-center h-screen w-full bg-[#F5F5F5] px-5 lg:px-0">
      <div className=" mt-16 w-full lg:w-[500px] flex items-center justify-between lg:justify-center">
        <BackButton />
        <h1 className="font-bold text-center text-[20px] text-[#2B2B2B]">
          {" "}
          Send Money
        </h1>

        <p className="lg:hidden"></p>
      </div>
      <div className="w-full mt-10 lg:w-[500px] bg-[#FDFDFD] py-5 px-5 rounded-[16px]">
        <h1 className="font-bold text-lg text-[#2B2B2B] text-center">
          Transfer Details
        </h1>
        <div className="mt-6 w-full flex flex-col items-center gap-5">
          <div className="flex justify-between items-center w-full ">
            <p className="font-normal text-base text-[#767676]">Amount</p>
            <p className="text-[#474ED3] font-semibold text-lg">
              {formattedAmount}
            </p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="font-normal text-base text-[#767676]">Receiver</p>
            <p className="text-[#2B2B2B] font-normal text-base">Ocean Ozulu</p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="font-normal text-base text-[#767676]">Email</p>
            <p className="text-[#2B2B2B] font-normal text-base">{email}</p>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="font-normal text-base text-[#767676]">Description</p>
            <p className="text-[#2B2B2B] font-normal text-base">{remark}</p>
          </div>
          <button
            onClick={handleSubmit}
            className="bg-[#474ED3] flex items-center justify-center rounded-[8px] cursor-pointer mt-14 w-full py-4 px-6 text-[#F3F3FF] font-bold text-base"
          >
            {loading ? <Loarder /> : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransferDetails;
