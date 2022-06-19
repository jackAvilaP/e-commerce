import React from "react";
import "../styles/NavBar.css";
import { useNavigate } from "react-router-dom";
import {
  faCartShopping,
  faStore,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const navigate = useNavigate();
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
          <button className="icon">
            <FontAwesomeIcon
              className="FontAwesomeIcon"
              icon={faCartShopping}
            />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
