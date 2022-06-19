import React from 'react';
import '../styles/Login.css';
import { useForm } from '../Hooks/useForm';
import { Link } from 'react-router-dom';


const Login = () => {

  const { formstate, onResetForm, onInputChage, username,
    password } = useForm({
      username: "",
      password: ""
    });


  return (
    <div className='container-login'>
      <div className=" login-box">
        <strong>Welcome! Enter your email and password to continue</strong>
        <p>You have to log in to add products to your cart</p>
        <form>
          <div className="user-box">
            <input id="name" type="text" name='username' onChange={onInputChage} value={username} required />
            <label> User</label>
          </div>
          <div className="user-box">
            <input id="password" type="password" name='password' onChange={onInputChage} value={password} required />
            <label>Password </label>
          </div>
        </form>
        <button className='myButton' onClick={onResetForm}> Submit</button>
        <p>Don't have an account? <Link to='/checkin'>Sign up</Link></p>

      </div>
    </div>
  );
};

export default Login;