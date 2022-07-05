import React from "react";
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { NavBar, CheckIn } from "../components";
import { Home, ProductDetails, Purchases, User } from "../pages";
import SpinnerLoading from "../components/SpinnerLoading";
import ProtectedRoutes from "./ProtectedRoutes";

const Routers = () => {
  const isLoading = useSelector((state) => state.isLoading);

  return (
    <HashRouter>
      {isLoading && <SpinnerLoading />}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/user" element={<User />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Purchases />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default Routers;
