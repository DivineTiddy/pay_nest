import React from "react";
// 
const TransactionCard = (e) => {
  return (
    <div className="flex items-center justify-between border-t-[1px] border-[#F2F2F2] py-2.5">
      <div className="flex items-center gap-3">
        <div className={`${e.type === "income" ? "bg-[#EDFFED]":"bg-[#FFE8E8]"} p-3 rounded-full`}>
          <img src={e.type === "income" ? "icon/arrow-down.svg" : "icon/arrow-up.svg"} />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[#242424] flex items-center gap-2">
            <p className="font-normal text-sm">Transfer to</p>
            <strong className="font-semibold text-sm">{e.name}</strong>
          </span>
          <p className="text-[#767676] font-normal text-xs">{e.date}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-end">
        <p className={`${e.type === "income" ? "text-[#379216]" : "text-[#D41818]"} text-sm font-semibold tracking-[0.5px]`}>
          {e.type === "income" ? "+":"-"} {e.amount}
        </p>
        <div className="bg-[#F3F3F3] py-1.5 px-3 rounded-[32px]">
          <p className="font-normal text-xs tracking-[0.5px]">Successful</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
