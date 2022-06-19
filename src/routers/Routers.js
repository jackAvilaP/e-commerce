import React from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import { Login, NavBar, CheckIn } from "../components";
import { Home } from "../pages";

const Routers = () => {
  return (
    <HashRouter>
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
