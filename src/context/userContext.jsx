// context/TransactionContext.jsx
import { userCredential } from "@/hooks/users";
import { setCookie } from "@/manager/cookies";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [transation, setTransation] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      const responses = await userCredential();
      console.log(responses);
      setCookie(responses.data);
      setTransation(responses.transation);
    };
    getUser();
  }, []);
  return (
    <UserContext.Provider value={{ transation }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
