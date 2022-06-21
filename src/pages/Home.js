import { useSelector, useDispatch } from "react-redux";

import React, { useEffect, useId } from "react";

import { Cards, Filter, SearchBar } from "../components";
import { getProducts } from "../store/slices/products.slice";
import "../styles/Home.css";

const Home = () => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const id = useId();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="container-home">
      <SearchBar className="SearchBar" />
      <div className="home">
        <Filter className="Filter" />
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
