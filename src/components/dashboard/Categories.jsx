import React from "react";

const items = [
  {
    title: (
      <>
        Send <br /> Money
      </>
    ),
    color: "bg-[#EBECFF]",
    icon: "icon/sent.svg",
  },
  {
    title: (
      <>
        Get <br /> Loan
      </>
    ),
    color: "bg-[#FFF0F2]",
    icon: "icon/loan.svg",
  },
  {
    title: (
      <>
        Electricity <br /> Bills
      </>
    ),
    color: "bg-[#F9E9FF]",
    icon: "icon/electricity.svg",
  },
  {
    title: (
      <>
        Data <br /> Bundles
      </>
    ),
    color: "bg-[#FFF2E9]",
    icon: "icon/data.svg",
  },
  {
    title: (
      <>
        Airtime <br /> TopUp
      </>
    ),
    color: "bg-[#EFFFF0]",
    icon: "icon/airtime.svg",
  },
];

const Categories = () => {
  return (
    <div className="bg-[#FDFDFF] p-4 w-full mt-4 font-inter flex justify-between">
      {items.map((item, index) => (
        <div
          key={index + 1}
          className="flex flex-col items-center justify-start gap-4 cursor-pointer"
        >
          <div
            className={`${item.color} rounded-[10px] p-3 flex items-center justify-center`}
          >
            <img src={item.icon} alt="icong" />
          </div>
          <p className="text-[#2B2B2B] text-xs font-normal text-center">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
