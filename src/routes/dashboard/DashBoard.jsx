import Analysis from "@/components/dashboard/Analysis";
import Balance_ui from "@/components/dashboard/Balance_ui";
import Categories from "@/components/dashboard/Categories";
import DesktopTransa from "@/components/dashboard/DesktopTransa";
import Reports from "@/components/dashboard/Reports";
import Transaction from "@/components/dashboard/Transaction";
import { TopDashBoardNav } from "@/components/nav/DashBoardNav";
import SideNav from "@/components/nav/SideNav";
import { userCredential } from "@/hooks/users";
import { setCookie } from "@/manager/cookies";
import Loader from "@/ui/loader/dashBoardLoader";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";

const DashBoard = () => {
  const [transation, setTransation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        setLoading(true);
        const responses = await userCredential();
        console.log(responses);
        setCookie(responses.data);
        setTransation(responses.transation);
      } catch (error) {
        setError(true);
        const Unauthorized = error.response.data.message;
        if (Unauthorized === "Unauthorized") {
          setCookie({ accessToken: "" });
          navigate("/login");
        } else {
          console.error("Error fetching user data:", error);
        }
         toast.error(`${error.response.data.message}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Zoom,
              });
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [navigate]);
  // Loader
  return (
    <>
      {loading && (
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      )}
      {!loading && !error && (
        <div className="bg-[#F5F5F5] lg:bg-[#F4F4F4] lg:px-14   w-full lg:flex lg:justify-between   lg:gap-6 lg:py-10 ">
          <SideNav />
          {/* middle container */}
          <div className="lg:w-[70%] lg:px-8 lg:bg-[#FDFDFF] lg:rounded-lg ">
            <TopDashBoardNav />
            <Balance_ui />
            <Categories />
            <Transaction transation={transation} />
            <DesktopTransa transation={transation} />
          </div>
          <div className="p-4 lg:p-0 lg:w-[32%] lg:px-6  lg:py-8 lg:bg-[#FDFDFF] h-full rounded-lg">
            <div className="p-4 lg:p-0 mt-5 lg:mt-0 bg-[#FDFDFD] border-[1px] lg:border-0 border-[#E2E2E2]">
              <Reports transation={transation} />
              <Analysis  transation={transation}/>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
};

export default DashBoard;
