import Cookies from "js-cookie";

export const setCookie = async ( data) => {
  const { first_Name, last_Name, email, balance  } = data;
  Cookies.set("first_Name", first_Name, { expires: 3 });
  Cookies.set("last_Name", last_Name, { expires: 3 });
  Cookies.set("email", email, { expires: 3 });
  Cookies.set("balance", balance, { expires: 3 });
};
export const accessTokenCookie = async (accessToken)=>{
  Cookies.set("accessToken", accessToken, { expires: 3 }); // expires in 7 days
}
export const transactionCookie = async (transation)=>{
  Cookies.set("transation", transation, { expires: 3 }); // expires in 7 days
}
export const getCookie = () => {
  const email = Cookies.get("email");
  const first_Name = Cookies.get("first_Name");
  const last_Name = Cookies.get("last_Name");
  const balance = Cookies.get("balance");
  const accessToken = Cookies.get("accessToken");
  const transaction = Cookies.get("transaction");
  const user = {
    email,
    first_Name,
    last_Name,
    balance,
    accessToken,
    transaction
  };
  return user;
};

export const deleteCookies = () => {
  Cookies.remove("first_Name");
  Cookies.remove("last_Name");
  Cookies.remove("email");
  Cookies.remove("balance");
  Cookies.remove("accessToken");
  Cookies.remove("transaction"); 
};