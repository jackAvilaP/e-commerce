import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import '../styles/Login.css';

import { useForm } from '../Hooks/useForm';
import { loginUser } from '../store/slices/login.slice';



const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { formstate, onInputChage, email,
    password } = useForm({
      email: "",
      password: ""
    });

  const submit = () => {

    if (formstate.name === "" || formstate.password === "") {
      //navigate("/");
    } else {
      dispatch(loginUser(formstate));

      navigate("/");
    }

  }


  return (
    <div className='container-login'>
      <div className=" login-box">
        <strong>Welcome! Enter your email and password to continue</strong>
        <div className='test-data'>
          <b>Test data</b>
          <p>user2@gmail.com</p>
          <p>pass1234</p>
        </div>
        <form>
          <div className="user-box">
            <input id="email" type="email" name='email' onChange={onInputChage} value={email} required />
            <label> Email</label>
          </div>
          <div className="user-box">
            <input id="password" type="password" name='password' onChange={onInputChage} value={password} required />
            <label>Password </label>
          </div>
        </form>
        <button className='myButton' onClick={submit} > Submit</button>
        <p>Don't have an account? <Link to='/checkin' className='link'>Sign up</Link></p>
      </div>

    </div>
  );
};

export default Login;