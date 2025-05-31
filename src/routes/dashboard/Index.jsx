import Analysis from "@/components/dashboard/Analysis";
import Balance_ui from "@/components/dashboard/Balance_ui";
import Categories from "@/components/dashboard/Categories";
import DesktopTransa from "@/components/dashboard/DesktopTransa";
import Reports from "@/components/dashboard/Reports";
import Transaction from "@/components/dashboard/Transaction";
import { TopDashBoardNav } from "@/components/nav/DashBoardNav";
import { useUser } from "@/context/userContext";
// import { userCredential } from "@/hooks/users";
// import { setCookie } from "@/manager/cookies";
import Loader from "@/ui/loader/dashBoardLoader";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, Zoom } from "react-toastify";

const Index = () => {
  // const [transation, setTransation] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       setLoading(true);
  //       const responses = await userCredential();
  //       console.log(responses);
  //       setCookie(responses.data);
  //       setTransation(responses.transation);
  //     } catch (error) {
  //       setError(true);
  //       const Unauthorized = error.response.data.message;
  //       if (Unauthorized === "Unauthorized") {
  //         setCookie({ accessToken: "" });
  //         navigate("/login");
  //       } else {
  //         console.error("Error fetching user data:", error);
  //       }
  //       toast.error(`${error.response.data.message}`, {
  //         position: "top-right",
  //         autoClose: 5000,
  //         hideProgressBar: false,
  //         closeOnClick: false,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         transition: Zoom,
  //       });
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getUser();
  // }, [navigate]);
  // Loader
  const { loading, error } = useUser();

  return (
    <>
      {loading && (
        <div className="flex items-center justify-center w-full ">
          <Loader />
        </div>
      )}
      {!loading && !error && (
        <div className="lg:flex gap-6">
          <div className="  lg:px-5 lg:bg-[#FDFDFF] lg:rounded-lg">
            <TopDashBoardNav />
            <Balance_ui />
            <Categories />
            <Transaction />
            <DesktopTransa />
          </div>
        </div>
      )}
    </>
  );
};

export default Index;
