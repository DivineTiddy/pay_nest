import Analysis from "@/components/dashboard/Analysis";
import Balance_ui from "@/components/dashboard/Balance_ui";
import Categories from "@/components/dashboard/Categories";
import DesktopTransa from "@/components/dashboard/DesktopTransa";
import Reports from "@/components/dashboard/Reports";
import Transaction from "@/components/dashboard/Transaction";
import { TopDashBoardNav } from "@/components/nav/DashBoardNav";

const Index = () => {
  return (
    <>
      <div className="lg:flex gap-6 lg:w-[80%] ">
        <div className=" lg:px-5 lg:bg-[#FDFDFF] w-full lg:rounded-lg">
          <TopDashBoardNav />
          <Balance_ui />
          <Categories />
          <Transaction />
          <DesktopTransa />
        </div>
      </div>
      <div className=" lg:hidden     lg:bg-[#FDFDFF] h-full rounded-lg">
        <div className="p-4  mt-5  h-full bg-[#FDFDFD] border-[1px]  border-[#E2E2E2]">
          <Reports />
          <Analysis />
        </div>
      </div>
    </>
  );
};

export default Index;
