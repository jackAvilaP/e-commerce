import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/Filter.css';
import axios from 'axios';

/*categorys.map((category) =>(
  <li>
    {category.name}
  </li>
))*/

const Filter = () => {
  const [categorys, setCategorys] = useState({})

  useEffect(() => {
    axios
      .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`)
      .then((res) => setCategorys(res.data.data.categories));
  }, [])
 
  return (
    <div className='accordion'>
      <details>
        <summary>Price</summary>
        <section>
          <div>
            <input type='number' placeholder='Form'/>
            <input type='number' placeholder='To'/> 
          </div>
          <button>filter price</button>
        </section>
      </details>
      <details>
        <summary>Category</summary>
        <section>
          {

          }
        </section>
      </details>
    </div>
  )
}

export default Filter;