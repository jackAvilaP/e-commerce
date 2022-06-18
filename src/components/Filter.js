import React from 'react';

const Filter = () => {
  return (
    <div className='accordion'>
        <div>
          <h3>Price</h3>
        </div>
        <div>
          <input type='number' placeholder='Form'/>
          <input type='number' placeholder='To'/> 
        </div>
        <button>filter price</button>
    </div>
  )
}

export default Filter;