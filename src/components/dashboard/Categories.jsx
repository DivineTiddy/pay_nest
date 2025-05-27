import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    title: (
      <>
        Send <br className="lg:hidden" /> Money
      </>
    ),
    color: "bg-[#EBECFF]",
    icon: "icon/sent.svg",
    link: "/send",
  },
  {
    title: (
      <>
        Get <br className="lg:hidden" /> Loan
      </>
    ),
    color: "bg-[#FFF0F2]",
    icon: "icon/loan.svg",
    link: "/loan",
  },
  {
    title: (
      <>
        Electricity <br className="lg:hidden" /> Bills
      </>
    ),
    color: "bg-[#F9E9FF]",
    icon: "icon/electricity.svg",
  },
  {
    title: (
      <>
        Data <br className="lg:hidden" /> Bundles
      </>
    ),
    color: "bg-[#FFF2E9]",
    icon: "icon/data.svg",
  },
  {
    title: (
      <>
        Airtime <br className="lg:hidden" /> TopUp
      </>
    ),
    color: "bg-[#EFFFF0]",
    icon: "icon/airtime.svg",
  },
];

const Categories = () => {
  return (
    <div className="bg-[#FDFDFF] p-4 lg:p-0 w-full mt-4 md:mt-0 font-inter flex justify-between lg:mt-12">
      {items.map((item, index) => (
        <Link
          key={index + 1}
          className="flex flex-col items-center justify-start gap-4 cursor-pointer"
          to={item.link}
        >
          <div
            className={`${item.color} rounded-[10px] lg:rounded-2xl p-2 lg:p-4 flex items-center justify-center`}
          >
            <img src={item.icon} alt="icon" className="w-7 lg:w-10" />
          </div>
          <p className="text-[#2B2B2B] text-xs lg:text-base font-normal text-center">
            {item.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
