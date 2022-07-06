import React from 'react'
import { useDispatch } from 'react-redux';
import { Login, LogOut } from '../components';
import { setIsOpen } from '../store/slices/viewCartList.slice';

const User = () => {
  const dispatch = useDispatch();
    const firstName = localStorage.getItem('user');
  return (
    <div onClick={() => dispatch(setIsOpen(false))}>
        {
            firstName? <LogOut/> : <Login/>
        }
    </div>
  )
}

export default User