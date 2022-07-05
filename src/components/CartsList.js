
import {
  faTrashCan
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartList } from "../store/slices/login.slice";
import "../styles/Carts.css";


const CartsList = () => {
  const toggles = useSelector((state) => state.isOpen);
  const productCarts = useSelector(state => state.cartUser);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getCartList());
  }, [toggles])
  console.log(productCarts);
  return (
    <div>
      <section className={`cart-modal ${toggles && "open"}`}>
        <div className="cart">
          <div className="miniList-cart">
            <h1>Shopping cart</h1>
            {
              productCarts.map(pro => (
                <section key={pro.id} className="items-cart">
                  <section className="section-description">
                    <span>{pro.brand}</span>
                    <FontAwesomeIcon icon={faTrashCan} id="trashCan" />
                  </section>
                    <Link to={`/details/${pro.id}`}>{pro.title}</Link>
                  <section className="section-priceQuantity">
                    <p className="quantity">{pro.productsInCart.quantity}</p>
                    <p>${Number(pro.price) * pro.productsInCart.quantity}</p>
                  </section>

                </section>

              ))
            }
          </div>
          <div className="checkout">
            <div className="total">
              <span className="label">Total: </span>
              <b>$ 0</b>
            </div>
            <button className="button-buy">Checkout</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartsList;
