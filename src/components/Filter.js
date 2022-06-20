import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "../Hooks/useForm";
import { setCategorys } from "../store/slices/category.slice";
import { setProducts } from "../store/slices/products.slice";

import "../styles/Filter.css";

const Filter = () => {
  const [categoryid, setId] = useState(0);
  const categories = useSelector((state) => state.category);
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const { formstate, onResetForm, onInputChage, formValue, toValue } = useForm({
    formValue: "",
    toValue: "",
  });
  
  const filterSearch = () => {
    const result = products.filter((product) => (product.price > parseInt(formstate.toValue)) && (product.price < parseInt(formstate.formValue)));
    dispatch(setProducts(result));
  };


  useEffect(() => {
    axios
      .get(
        `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
      )
      .then((res) => dispatch(setCategorys(res.data.data.categories)));
  }, []);

  useEffect(() => {
    if (categoryid !== 0) {
      axios
        .get(
          `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${categoryid}`
        )
        .then((res) => dispatch(setProducts(res.data.data.products)));
    } else if (categoryid === 0) {
      axios
        .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
        .then((res) => dispatch(setProducts(res.data.data.products)));
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
