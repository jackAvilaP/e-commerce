import React, { useEffect, useState } from "react";
import "../styles/ProductDetails.css";

import { useParams } from "react-router-dom";

import axios from "axios";
import SpinnerLoading from "../components/SpinnerLoading";
import { useDispatch, useSelector } from "react-redux";
import { categorysId } from "../store/slices/products.slice";
import { Cards } from "../components";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const [store, setStore] = useState([]);
  const [categoryid, setId] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const odtenerProducto = async () => {
      await axios
        .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
        .then((res) => {
          const newSearch = res.data.data.products.find(
            (newProduct) => newProduct.id === Number(id)
          );
          setStore(newSearch);
          dispatch(categorysId(Number(newSearch.category.id)));
        });
    };
    odtenerProducto();
  }, [id, dispatch]);
  console.log(store);
  return (
    <div className="container-details">
      <section id="flexbox-direction-img">
        <div>
          {store.length === 0 ? (
            <SpinnerLoading />
          ) : (
            <div className="img-details">
              <div className="container-flex-info">
                <div className="containerImg-big">
                  <img
                    src={store.productImgs[0]}
                    alt="product-img"
                    id="img-big"
                  />
                </div>
                <div className="product-info">
                  <h2>{store.title}</h2>
                  <p>{store.description}</p>
                </div>
              </div>
              <div className="card-category">
                {products.map((product) => (
                  <Cards product={product} key={id + product.id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
