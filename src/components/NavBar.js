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

  return (
    <div className="navbar">
      <div className="fixed">
        <nav>
          <div className="title">
            <strong onClick={() => navigate("/")}>e-commerce</strong>
          </div>
          <button className="icon" onClick={() => navigate("/login")}>
            <FontAwesomeIcon className="FontAwesomeIcon" icon={faUser} />
          </button>
          <button className="icon">
            <FontAwesomeIcon className="FontAwesomeIcon" icon={faStore} />
          </button>
          <button
            className="icon"
            onClick={() => dispatch(setIsOpen(!toggles))}
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
