import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCategorys } from '../store/slices/category.slice';
import { categorysId, getProducts } from '../store/slices/products.slice';
import "../styles/AccordionFilter.css";

const Category = () => {
  const [categoryid, setId] = useState(0);
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategorys());
  }, []);

  useEffect(() => {
    if (categoryid !== 0) {
      dispatch(categorysId(categoryid));
    } else if (categoryid === 0) {
      dispatch(getProducts());
    }
  }, [categoryid]);
  return (
    <div>
      <div className='accordion-item'>
       
        <div className="accordion-content">
          {categories.map((category) => (
            <ul key={category.name} onClick={() => setId(category.id)}>
              {category.name}
            </ul>
          ))}
          <ul
            onClick={() => {
              setId(0);
            }}
          >
            all products
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Category