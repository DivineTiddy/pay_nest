import Balance_ui from "@/components/dashboard/Balance_ui";
import Categories from "@/components/dashboard/Categories";
import { TopDashBoardNav } from "@/components/nav/DashBoardNav";
import React from "react";

const DashBoard = () => {
  return (
    <div className="bg-[#F5F5F5] h-screen w-full ">
      <TopDashBoardNav />
      <Balance_ui />
      <Categories/>
    </div>
  );
};

export default DashBoard;
