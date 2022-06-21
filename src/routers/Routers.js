import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Login, NavBar, CheckIn } from "../components";
import { Home, Purchases } from "../pages";
import SpinnerLoading from '../components/SpinnerLoading';
import ProtectedRoutes from './ProtectedRoutes';



const Routers = () => {
  const isLoading = useSelector(state => state.isLoading);

  return (
    <HashRouter>
      {
        isLoading && <SpinnerLoading />
      }
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/purchases" element={<Purchases />} />

        <Route element={<ProtectedRoutes />}>
        </Route>

      </Routes>
    </HashRouter>
  );
};

export default Routers;
