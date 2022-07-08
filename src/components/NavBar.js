import React, { useState } from "react";
import "../styles/NavBar.css";
import { useNavigate } from "react-router-dom";
import { setIsOpen } from "../store/slices/viewCartList.slice";

import {
  faCartShopping,
  faStore,
  faUser,
  faBars
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import CartsList from "./CartsList";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false)
  const toggles = useSelector((state) => state.isOpen);

  const openListCarts = () => {
    setOpen(false);
    if (localStorage.getItem("token")) {
      dispatch(setIsOpen(!toggles));
    } else {
      dispatch(setIsOpen(false));
      navigate("/user");
    }
  }


  const submit = () => {
    setOpen(false);
    navigate("/purchases");
  };

  return (
    <div className="navbar">
      <div className="fixed">
        <nav>
          <div className="title">
            <strong onClick={() => { navigate("/"); dispatch(setIsOpen(false)) }}>e-commerce</strong>
            <button className="faBars" onClick={() => {setOpen(!open);dispatch(setIsOpen(false))}}>
              <FontAwesomeIcon className="FontAwesomeIcon" icon={faBars} />
            </button>
          </div>
          <div className={`menu ${open ? "active" : ""}`}>
            <button className={`icon ${open ? "active" : ""}`} onClick={() => {setOpen(false);navigate("/user");}}>
              <label>User</label>
              <FontAwesomeIcon className="FontAwesomeIcon" icon={faUser} />
            </button>
            <button className={`icon ${open ? "active" : ""}`} onClick={submit}>
              <label>Purchases</label>
              <FontAwesomeIcon className="FontAwesomeIcon" icon={faStore} />
            </button>
            <button
              className={`icon ${open ? "active" : ""}`}
              onClick={openListCarts}
            >
              <label>Shopping cart</label>
              <FontAwesomeIcon
                className="FontAwesomeIcon"
                icon={faCartShopping}
              />
            </button>
          </div>
        </nav>
      </div>
      <CartsList />
    </div>
  );
};

export default NavBar;
