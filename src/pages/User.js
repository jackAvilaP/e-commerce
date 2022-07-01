import React from 'react'
import { Login, LogOut } from '../components';

const User = () => {
    
    const firstName = localStorage.getItem('user');
  return (
    <div>
        {
            firstName? <LogOut/> : <Login/>
        }
    </div>
  )
}

export default User