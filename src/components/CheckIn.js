
import React from "react";
import { useForm } from "../Hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import "../styles/CheckIn.css";
import { useDispatch } from "react-redux";
import { checkIn } from "../store/slices/login.slice";

const CheckIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    formstate,
    onInputChage,
    firstName,
    lastName,
    email,
    password,
    phone,

  } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: ""
  });

  const checkInAdd = (e) => {
    e.preventDefault();
    dispatch(checkIn(formstate))
      .then(res => console.log(res));
    navigate("/login");
  };
  return (
    <div className="container-CheckIn">
      <div className="CheckIn-box">
        <h1>Check in</h1>
        <form>
          <div className="CheckInUser-box">
            <input
              type="email"
              name="email"
              onChange={onInputChage}
              value={email}
              required
            />
            <label>Email </label>
          </div>

          <div className="CheckInUser-box">
            <input
              type="text"
              name="firstName"
              onChange={onInputChage}
              value={firstName}
              required
            />
            <label>First Name </label>
          </div>

          <div className="CheckInUser-box">
            <input
              type="text"
              name="lastName"
              onChange={onInputChage}
              value={lastName}
              required
            />
            <label>Last name </label>
          </div>

          <div className="CheckInUser-box">
            <input
              id="password"
              type="password"
              name="password"
              onChange={onInputChage}
              value={password}
              required
            />
            <label>Password </label>
          </div>

          <div className="CheckInUser-box">
            <input
              type="text"
              name="phone"
              onChange={onInputChage}
              value={phone}
              required
            />
            <label>Phone</label>
          </div>
        </form>
        <button className="myButton" onClick={checkInAdd}>
          Register
        </button>
        <p>you have an account? <Link to='/login' className="link">login</Link></p>
      </div>
    </div>
  );
};

export default CheckIn;