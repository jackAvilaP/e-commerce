import React from "react";
import "../styles/Cards.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { addCart } from "../store/slices/login.slice";
import { useDispatch } from "react-redux";


const Cards = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickDetail = (id) => {
    navigate(`/details/${id}`);
  };

  const addCartList = () => {
    const productsInCart = {
      id: product.id,
      quantity: 1
    };
    if (localStorage.getItem("token")) {
      dispatch(addCart(productsInCart));
    }
  };
 
  return (
    <li>
      <div className="image"  onClick={()=>clickDetail(product.id)}>
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
        <button className="cards-button" onClick={()=>addCartList()}>
          <FontAwesomeIcon className="FontAwesomeIcon" icon={faCartShopping} />
        </button>
      </div>
    </li>
  );
};

export default Cards;
