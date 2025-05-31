import Analysis from "@/components/dashboard/Analysis";
import Reports from "@/components/dashboard/Reports";
import { useUser } from "@/context/userContext";
import { TransactionRow } from "@/ui/Cards/Row";
import TransactionNull from "@/ui/null/TransactionNull";
import React from "react";

const TransactionPage = () => {
  const { transation } = useUser();
  const showNullState = transation.length > 0;
  return (
    <div className="font-inter w-ful px-4 py-8 hidden lg:flex lg:flex-col lg:pb-10 bg-[#FDFDFF]">
        <h1 className="font-semibold text-[22px] text-black mb-4">
          Transactions
        </h1>
        {showNullState ? (
          <div className="border border-[#E6E6E6] py-5 rounded-xl  mt-2">
            <div className="flex justify-between px-4  items-center  py-2">
              <h2 className="text-black font-semibold text-[20px] text-center ">
                Description
              </h2>
              <h2 className="text-black font-semibold text-[20px]">Amount</h2>
              <h2 className="text-black font-semibold text-[20px]  ">Status</h2>
            </div>
            <div className="">
              {transation.map((item, index) => (
                <TransactionRow key={index} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <TransactionNull />
        )}
      </div>
     
  );
};

export default TransactionPage;

