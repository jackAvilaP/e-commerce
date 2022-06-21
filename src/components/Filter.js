import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";

import { useForm } from "../Hooks/useForm";
import { getCategorys } from "../store/slices/category.slice";
import {
  categorysId,
  getProducts,
  filterProductsValue,
} from "../store/slices/products.slice";

import "../styles/Filter.css";

const Filter = () => {
  const [categoryid, setId] = useState(0);
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
    <div className="accordion">
      <details className="price" open>
        <summary>
          <h2>Price</h2>
        </summary>
        <section>
          <div>
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
      </details>
      <details className="category" open>
        <summary>
          <h2>Category</h2>
        </summary>
        <section>
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
        </section>
      </details>
    </div>
  );
};

export default Filter;
