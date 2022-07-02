import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartList } from "../store/slices/login.slice";
import "../styles/Carts.css";

const CartsList = () => {
  const dispatch = useDispatch();
  const toggles = useSelector((state) => state.isOpen);
  const cart = useSelector((state) => state.cartUser);

  useEffect(() => {
    dispatch(getCartList())
  },  [dispatch])
  
  return (
    <div>
      <section className={`cart-modal ${toggles && "open"}`}>
        <div className="cart">
          <div className="miniList-cart">
            <h1>Shopping cart</h1>
            <section>
             {
              cart.map(productCart=>(

                <div className="container-listCart" key={productCart.id + 998}>{productCart.brand}  {productCart.title}</div>
              ))
             }
            </section>
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
