
import React, { useState } from 'react';

import '../styles/Filter.css';


/*categorys.map((category) =>(
  <li>
    {category.name}
  </li>
))*/


const Filter = ({categories}) => {
  const [categoryid, setId] = useState(0);
  return (
    <div className='accordion'>
      <details className='price' open>
        <summary ><h2>Price</h2></summary>
        <section>
          <div>
            <input type='number' placeholder='Form'/>
            <input type='number' placeholder='To'/> 
          </div>
          <button>filter price</button>
        </section>
      </details>
      <details className='category' open>
        <summary><h2>Category</h2></summary>
        <section>
          {
            categories.map((category) =>(
                  <ul  key={category.name} onClick={()=>setId(category.id)}>
                    {category.name}
                  </ul>
             ))
          }
        </section>
      </details>
    </div>
  )
}

export default Filter;