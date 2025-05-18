import Cookies from "js-cookie";

export const setCookie = async (data, accessToken) => {
  console.log(data);
  const { first_Name, last_Name, email, balance } = data;
  Cookies.set("accessToken", accessToken, { expires: 7 }); // expires in 7 days
  Cookies.set("first_Name", first_Name, { expires: 3 });
  Cookies.set("last_Name", last_Name, { expires: 3 });
  Cookies.set("email", email, { expires: 3 });
  Cookies.set("balance", balance, { expires: 3 });
};

export const getCookie = () => {
  const email = Cookies.get("email");
  return email;
};
