import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/landingPage/Home";
import Register from "./routes/auth/Register";
import Login from "./routes/auth/Login";
import DashBoard from "./routes/dashboard/DashBoard";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
