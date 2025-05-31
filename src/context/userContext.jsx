// context/TransactionContext.jsx
import { userCredential } from "@/hooks/users";
import { setCookie } from "@/manager/cookies";
import React, { createContext, useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { toast, Zoom } from "react-toastify";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [transation, setTransation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [Unauthorized , setUnauthorized] = useState(null)
  // const navigate = useNavigate();
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
        // navigate("/login");
        setUnauthorized(true)
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

  return (
    <UserContext.Provider value={{ transation, loading, error , getUser , Unauthorized }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
