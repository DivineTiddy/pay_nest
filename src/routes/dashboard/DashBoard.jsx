import Analysis from "@/components/dashboard/Analysis";
import Balance_ui from "@/components/dashboard/Balance_ui";
import Categories from "@/components/dashboard/Categories";
import DesktopTransa from "@/components/dashboard/DesktopTransa";
import Reports from "@/components/dashboard/Reports";
import Transaction from "@/components/dashboard/Transaction";
import { TopDashBoardNav } from "@/components/nav/DashBoardNav";
import SideNav from "@/components/nav/SideNav";
import React from "react";

const DashBoard = () => {
  return (
    <div className="bg-[#F5F5F5] lg:bg-[#FDFDFF] lg:px-14  w-full lg:grid lg:grid-cols-5 lg:gap-4 lg:py-10 ">
      <SideNav/>
      {/* middle container */}
      <div className="lg:col-span-3 lg:px-12">
        <TopDashBoardNav />
        <Balance_ui />
        <Categories />
        <Transaction />
        <DesktopTransa/>
      </div>
      <div className="p-4 lg:p-0   lg:col-span-1 lg:py-8">
        <div className="p-4 lg:p-0 mt-5 lg:mt-0 bg-[#FDFDFD] border-[1px] lg:border-0 border-[#E2E2E2]">
          <Reports />
          <Analysis />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
