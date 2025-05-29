import React from "react";
import { format } from "date-fns";
import "../../styles/scroll-bar.css";
import TransactionNull from "@/ui/null/TransactionNull";

const TransactionRow = ({ item }) => {
  const isIncome =
    item.transation_type === "receive" || item.transation_type === "loan";
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const day = format(date, "do"); // '4th'
    const month = format(date, "MMM"); // 'Jan'
    const time = format(date, "hh:mmaaa"); // '05:34PM'
    return { day, month, time };
  };
  const { day, month, time } = formatDateTime(item.createdAt);

  const formattedAmount = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  }).format(item.amount);

  return (
    <>
      <div className="grid grid-cols-3 items-center  py-4 px-4 border-t-[1px] border-[#E6E6E6]  ">
        {/* Description */}
        <div className="flex  items-center w-[120%] gap-5 ">
          <div
            className={`${
              isIncome ? "bg-[#EDFFED]" : "bg-[#FFE8E8]"
            } p-3 rounded-full`}
          >
            <img
              className="w-6"
              src={isIncome ? "icon/arrow-down.svg" : "icon/arrow-up.svg"}
              alt={isIncome ? "Income" : "Expend"}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[#242424] text-base tracking-wide">
              {item.transation_type === "loan" && "Loan"}
              {item.transation_type === "sent" && (
                <p>
                  Transfer to <strong>{item.to}</strong>
                </p>
              )}
              {item.transation_type === "receive" && (
                <p>
                  Receive from <strong>{item.from}</strong>
                </p>
              )}
            </span>
            <p className="text-[#767676] text-[15px] flex items-center gap-2">
              {day} {month} <img src="icon\dot.svg" alt="icon" /> {time}
            </p>
          </div>
        </div>

        {/* Amount */}
        <div className="text-center ml-20 ">
          <p
            className={`text-lg font-semibold tracking-wide ${
              isIncome ? "text-[#379216]" : "text-[#D41818]"
            }`}
          >
            {isIncome ? "+" : "-"} {formattedAmount}
          </p>
        </div>

        {/* Status */}
        <div className="text-right">
          <p className="text-lg text-[#767676]">Successful</p>
        </div>
      </div>
    </>
  );
};

const DesktopTransa = ({ transation }) => {
  const showNullState = transation.length > 0;
  return (
    <div className="font-inter max-w-3xl mx-auto mt-14 hidden lg:flex lg:flex-col lg:pb-10">
      <h1 className="font-semibold text-[22px] text-black mb-4">
        Recent Transactions
      </h1>
      {showNullState ? (
        <div className="border border-[#E6E6E6] py-5 rounded-xl overflow-hidden mt-2">
          <div className="flex justify-between px-4  items-center  py-2">
            <h2 className="text-black font-semibold text-[20px] text-center ">
              Description
            </h2>
            <h2 className="text-black font-semibold text-[20px]">Amount</h2>
            <h2 className="text-black font-semibold text-[20px]  ">Status</h2>
          </div>
          <div className="">
            {transation.slice(0, 4).map((item, index) => (
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

export default DesktopTransa;
