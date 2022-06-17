import React  from 'react';
import { useForm } from '../Hooks/useForm';
import '../styles/CheckIn.css';

const CheckIn = () => {

    const { formstate, onResetForm, onInputChage, fullname, username, email,
        password } = useForm({
            fullname: "",
            username: "",
            email: "",
            password: ""
        });
    return (
        <div className='container-CheckIn'>
            <div className="CheckIn-box">
                <h1>Check in</h1>
                <form>

                    <div className="CheckInUser-box">
                        <input type="text" name='fullname' onChange={onInputChage} value={fullname} required />
                        <label>full Name </label>
                    </div>

                    <div className="CheckInUser-box">
                        <input type="text" name='username' onChange={onInputChage} value={username} required />
                        <label>User </label>
                    </div>

                    <div className="CheckInUser-box">
                        <input type="email" name='email' onChange={onInputChage} value={email} required />
                        <label>Email </label>
                    </div>


                    <div className="CheckInUser-box">
                        <input id="password" type="password" name='password' onChange={onInputChage} value={password} required />
                        <label>Password </label>
                    </div>

                </form>
                <button className='myButton' onClick={onResetForm}> Register</button>
            </div>
        </div>
    );
};

export default CheckIn;