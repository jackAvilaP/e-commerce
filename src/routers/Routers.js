import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Login, NavBar, CheckIn } from "../components";
import { Home } from "../pages";
import SpinnerLoading from '../components/SpinnerLoading';


const Routers = () => {
  const isLoading = useSelector(state => state.isLoading);

  return (
    <HashRouter>
      {
        isLoading && <SpinnerLoading/>
      }
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkin" element={<CheckIn />} />
      </Routes>
    </HashRouter>
  );
};
 
export default Routers;
