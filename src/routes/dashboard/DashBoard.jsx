import Analysis from "@/components/dashboard/Analysis";
import Balance_ui from "@/components/dashboard/Balance_ui";
import Categories from "@/components/dashboard/Categories";
import Reports from "@/components/dashboard/Reports";
import Transaction from "@/components/dashboard/Transaction";
import { TopDashBoardNav } from "@/components/nav/DashBoardNav";
import React from "react";

const DashBoard = () => {
  return (
    <div className="bg-[#F5F5F5] h-full w-full ">
      <TopDashBoardNav />
      <Balance_ui />
      <Categories />
      <Transaction />
      <div className="p-4">
        <div className="p-4 mt-5 bg-[#FDFDFD] border-[1px] border-[#E2E2E2]">
          <Reports />
          <Analysis/>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
