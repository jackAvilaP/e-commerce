import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";



import { useForm } from "../Hooks/useForm";
import { getCategorys } from "../store/slices/category.slice";
import {
  categorysId,
  getProducts,
  filterProductsValue,
} from "../store/slices/products.slice";

import "../styles/AccordionFilter.css";

import {
  faFilter
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Filter = () => {
  const [categoryid, setId] = useState(0);
  // const [active, setActive] = useState(false);
  const categories = useSelector((state) => state.category);
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const { formstate, onInputChage, formValue, toValue } = useForm({
    formValue: "",
    toValue: "",
  });

  const filterSearch = (e) => {
    e.preventDefault();
    if (formstate.formValue !== "" && formstate.formstate !== "") {
      dispatch(filterProductsValue(formstate, products));
    } else {
      dispatch(getProducts());
    }
  };

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
    <div className="menu-filter">
      <div className="icon-filter">
        <FontAwesomeIcon icon={faFilter} />
        <p>Filter</p>
      </div>
      <div>
        <div className="accordion">
          <div className="accordion-item">
            <div className="accordion-title" >
              <div><h3>Price</h3></div>
              <div></div>
            </div>
            <div className="accordion-content">
              <section className='section-price'>
                <div className='price-input'>
                  <input
                    type="number"
                    placeholder="Form"
                    id="formValue"
                    name="formValue"
                    onChange={onInputChage}
                    value={formValue}
                  />
                  <input
                    type="number"
                    placeholder="To"
                    id="toValue"
                    name="toValue"
                    onChange={onInputChage}
                    value={toValue}
                  />
                </div>
                <button onClick={filterSearch}>filter price</button>
              </section>
            </div>

          </div>

          <div className='accordion-item'>
            <div className="accordion-title" >
              <div><h3>Category</h3></div>
              <div></div>
            </div>

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
      </div>

    </div>
  );
};

export default Filter;
