import { getCookie } from "@/manager/cookies";
import axios from "axios";

const API_URL = "https://mini-bank-api.onrender.com/api";

export const userCredential = async () => {
  const { accessToken } = getCookie();

  const { data } = await axios.get(`${API_URL}/users/dashboard`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return data;
};

export const sentMoney = async (credential) => {
  const { accessToken } = getCookie();

  const { data } = await axios.post(`${API_URL}/transation/sent`, credential, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  
  return data;
};

export const loanMoney = async (credential) => {
  const { accessToken } = getCookie();

  const { data } = await axios.post(`${API_URL}/transation/loan`, credential, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return data;
};

export const userName = async (getEmail) => {
  const { accessToken } = getCookie();
  const { data } = await axios.get(`${API_URL}/users/user`, {
    params: { email: getEmail },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  return data
};
