import React from "react";
import { useSelector } from "react-redux";
import "../styles/Carts.css";

const CartsList = () => {
  const toggles = useSelector((state) => state.isOpen);

  return (
    <div>
      <section className={`cart-modal ${toggles && "open"}`}>
        <div className="cart">
          <div className="miniList-cart">
            <h1>Shopping cart</h1>
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
