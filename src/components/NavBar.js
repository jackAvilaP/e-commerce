import React from "react";
import "../styles/NavBar.css";
import { useNavigate } from "react-router-dom";
import { setIsOpen } from "../store/slices/viewCartList.slice";

import {
  faCartShopping,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import CartsList from "./CartsList";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggles = useSelector((state) => state.isOpen);
  
  const openListCarts = () => {
    if (localStorage.getItem("token")) {
      dispatch(setIsOpen(!toggles));
    } else {
      dispatch(setIsOpen(false));
      navigate("/user");
    }
  }

  
  const submit = () => {
    navigate("/purchases");
  };

  return (
    <div className="navbar">
      <div className="fixed">
        <nav>
          <div className="title">
            <strong onClick={() => {navigate("/");dispatch(setIsOpen(false))}}>e-commerce</strong>
          </div>
          <button className="icon" onClick={() => navigate("/user")}>
            <FontAwesomeIcon className="FontAwesomeIcon" icon={faUser} />
          </button>
          <button className="icon" onClick={submit}>
            <FontAwesomeIcon className="FontAwesomeIcon" icon={faStore} />
          </button>
          <button
            className="icon"
            onClick={openListCarts}
          >
            <FontAwesomeIcon
              className="FontAwesomeIcon"
              icon={faCartShopping}
            />
          </button>
        </nav>
      </div>
      <CartsList />
    </div>
  );
};

export default NavBar;
