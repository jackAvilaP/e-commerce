import { useSelector, useDispatch } from "react-redux";

import React, { useEffect, useId, useState } from "react";
import axios from "axios";
import { Cards, Filter, SearchBar } from "../components";
import { setProducts } from "../store/slices/products.slice";
import "../styles/Home.css";

const Home = () => {
  //const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const products =useSelector((state)=> state.product);
  const dispatch = useDispatch();
  const id = useId();



  useEffect(() => {
    axios
      .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
      .then((res) => dispatch(setProducts(res.data.data.products)));
  }, []);

  return (
    <div className="container-home">
      <SearchBar className="SearchBar" />
      <div className="home">
        <Filter categories={categories} className="Filter" />
        <section className="home-products">
          {products.map((product) => (
            <Cards product={product} key={id + product.id} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Home;
