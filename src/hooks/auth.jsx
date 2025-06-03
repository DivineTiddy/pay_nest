import { getCookie } from "@/manager/cookies";
import axios from "axios";

const API_URL = "https://mini-bank-api.onrender.com/api/users";

export const registration = async (credential) => {
  const { data } = await axios.post(`${API_URL}/register`, credential, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const login = async (credential) => {
  const { data } = await axios.post(`${API_URL}/login`, credential, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
};

export const verification = async (code) => {
  const {email} = getCookie();
  console.log(email)

  const credential = {
    emailCode: code,
    email: email,
  };
  const { data } = await axios.post(`${API_URL}/verify`, credential, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(data)
  return data;
};
