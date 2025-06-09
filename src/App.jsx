import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/landingPage/Home";
import Register from "./routes/auth/Register";
import Login from "./routes/auth/Login";
import DashBoard from "./routes/dashboard/DashBoard";
import Verify from "./routes/auth/Verify";
import { ToastContainer } from "react-toastify";
import Send from "./routes/dashboard/Send";
import TransferDetails from "./routes/dashboard/TransferDetails";
import Success from "./routes/dashboard/Success";
import Loan from "./routes/dashboard/Loan";
import Index from "./routes/dashboard/Index";
import TransactionPage from "./routes/dashboard/TransactionPage";
import { UserProvider } from "./context/userContext";
import NotFoundPage from "./ui/null/NotFoundPage";

const App = () => {
  return (
    <>
      <ToastContainer />
      <HashRouter>
        <UserProvider>
          <Routes>
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<DashBoard />}>
              <Route index element={<Index />} />
              <Route
                path="/dashboard/transaction"
                element={<TransactionPage />}
              />
            </Route>
            <Route path="/send" element={<Send />} />
            <Route path="/details" element={<TransferDetails />} />
            <Route path="/success" element={<Success />} />
            <Route path="/loan" element={<Loan />} />
          </Routes>
        </UserProvider>
      </HashRouter>
    </>
  );
};

export default App;
