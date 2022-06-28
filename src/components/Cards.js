import React, { useCallback } from "react";
import "../styles/Cards.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { setproductFound } from "../store/slices/productFound.slice";
import { useDispatch } from "react-redux";
import axios from "axios";

const Cards = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickDetail = (id) => {
    foundPro (id);
    navigate(`/details/${id}`);
  };
  const foundPro = useCallback((id) => {
    axios
      .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
      .then((res) => {
        const newFoundProduct = res.data.data.products.find(
          (newProduct) => newProduct.id === Number(id)
        );
         dispatch(setproductFound(newFoundProduct));
      });
  }, [dispatch]);
  
  return (
    <li onClick={()=>clickDetail(product.id)}>
      <div className="image">
        <img src={product.productImgs[0]} alt="product" />
      </div>
      <div className="info">
        <h5>{product.title}</h5>
      </div>
      <div className="prices-pruducts">
        {product.price > 300 ? (
          <div>
            $ <b>{product.price}</b>
            <p className="shipping">free shipping</p>{" "}
          </div>
        ) : (
          <p>
            $ <b>{product.price}</b>
          </p>
        )}
        <button className="cards-button">
          <FontAwesomeIcon className="FontAwesomeIcon" icon={faCartShopping} />
        </button>
      </div>
    </li>
  );
};

export default Cards;
