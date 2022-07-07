
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';


import '../styles/LogOut.css';

const LogOut = () => {
    const navigate = useNavigate();


    const firstName = localStorage.getItem('user');

    const outLogin = () => {
        localStorage.setItem("token", "");
        localStorage.setItem("user", "");
        navigate("/");
    };
  return (
    <section className="container-logOut">
      <div className="logOut">
        <FontAwesomeIcon icon={faCircleUser} className="faCircleUser" />
        {firstName && <h2>{firstName}</h2>}
        <button className="myButton" onClick={outLogin}>
          log out
        </button>
      </div>
    </section>
  );
};

export default LogOut;
