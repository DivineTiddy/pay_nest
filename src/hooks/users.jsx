import { getCookie } from "@/manager/cookies";
import axios from "axios";
const API_URL = "https://mini-bank-api.onrender.com/api/users";

export const userCredential = async () => {
  const  {accessToken}  = getCookie();
  console.log(accessToken);

  const { data } = await axios.get(`${API_URL}/dashboard`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  return data;
};
