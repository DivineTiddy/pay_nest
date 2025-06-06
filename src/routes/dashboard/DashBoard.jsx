import SideNav from "@/components/nav/SideNav";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import "../../styles/scroll-bar.css";
import Reports from "@/components/dashboard/Reports";
import Analysis from "@/components/dashboard/Analysis";
import { useUser } from "@/context/userContext";
import Loader from "@/ui/loader/dashBoardLoader";

const DashBoard = () => {
  const { loading, error, getUser } = useUser();

  useEffect(() => {
    getUser();
  }, []);
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center w-full bg-[#F4F4F4]">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center w-full bg-[#F4F4F4]">
        <p className="text-red-500">An error occurred loading your data.</p>
      </div>
    );
  }
  return (
    <div className="bg-[#F5F5F5] lg:bg-[#F4F4F4] lg:px-7    w-full lg:flex    lg:gap-6 lg:py-10 ">
      <SideNav />

      <>
        <Outlet />

        <div className="w-full hidden lg:flex  lg:p-0 lg:w-[32%] lg:px-6  lg:py-8 lg:bg-[#FDFDFF] lg:h-auto rounded-lg">
          <div className="p-4 lg:p-0 mt-5 lg:mt-0 h-full bg-[#FDFDFD] border-[1px] lg:border-0 border-[#E2E2E2]">
            <Reports />
            <Analysis />
          </div>
        </div>
      </>
    </div>
  );
};

export default DashBoard;
