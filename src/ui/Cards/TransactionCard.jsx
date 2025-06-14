import React from "react";
import { format } from "date-fns";

//
const TransactionCard = ({item}) => {
  const isIncome = item.transation_type === "receive" || item.transation_type === "loan";
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    const day = format(date, "do"); // '4th'
    const month = format(date, "MMM"); // 'Jan'
    const time = format(date, "hh:mmaaa"); // '05:34PM'
    return { day, month, time };
  };
  const { day, month, time } = formatDateTime(item.createdAt);
  
    const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(item.amount);
  return (
    <div className="flex  items-center justify-between px-1 rounded-lg bg-[#FDFDFF] border-t-[1px] border-[#F2F2F2] py-2.5">
      <div className="flex items-center gap-3">
        <div
          className={`${
           isIncome  ? "bg-[#EDFFED]" : "bg-[#FFE8E8]"
          } p-3 rounded-full`}
        >
          <img
            src={
             isIncome 
                ? "icon/arrow-down.svg"
                : "icon/arrow-up.svg"
            }
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[#242424] flex items-center gap-2">
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
          <p className="text-[#767676] font-normal text-xs">
            {day} {month} {time}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-end">
        <p
          className={`${
           isIncome  ? "text-[#379216]" : "text-[#D41818]"
          } text-sm font-semibold tracking-[0.5px]`}
        >
          {isIncome ? "+" : "-"} {formattedAmount}
        </p>
        <div className="bg-[#F3F3F3] py-1 px-1.5 rounded-[32px]">
          <p className="font-normal text-[10px] tracking-[0.5px]">Successful</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
