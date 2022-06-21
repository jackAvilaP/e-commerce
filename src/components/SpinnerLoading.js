import React from 'react';
import '../styles/SpinnerLoading.css';
const SpinnerLoading = () => {
  return (
    <div className='overlay'>
        <div className="lds-ripple"><div></div><div></div></div>
    </div>
  )
}

export default SpinnerLoading