import React, { useEffect, useId, useState } from "react";
import axios from "axios";
import { Cards, Filter, SearchBar } from "../components";

import "../styles/Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const id = useId();

  useEffect(() => {
    axios
      .get(
        `https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  useEffect(() => {
    axios
      .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
      .then((res) => setProducts(res.data.data.products));
  }, []);

  return (
    <div className="container-home">
      <SearchBar className='SearchBar' />
      <div className="home">
        <Filter categories={categories} className='Filter'/>
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
