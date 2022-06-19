import { HashRouter, Routes, Route } from "react-router-dom";
import { Login, NavBar } from "../components";
import { Home } from "../pages";

const Routers = () => {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
};

export default Routers;
