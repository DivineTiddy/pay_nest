// context/TransactionContext.jsx
import { userCredential } from "@/hooks/users";
import { setCookie } from "@/manager/cookies";
import React, { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [transation, setTransation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log(transation)
//   const navigate = useNavigate();
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
        //   navigate("/login");
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
  }, []);
  return (
    <UserContext.Provider value={{ transation , loading , error}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
