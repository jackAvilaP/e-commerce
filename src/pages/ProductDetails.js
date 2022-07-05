import React, { useEffect, useState } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/ProductDetails.css";

import { useParams } from "react-router-dom";

import axios from "axios";
import SpinnerLoading from "../components/SpinnerLoading";
import { useDispatch, useSelector } from "react-redux";
import { categorysId } from "../store/slices/products.slice";
import { Cards } from "../components";
import { setIsOpen } from "../store/slices/viewCartList.slice";
import { addCart } from "../store/slices/login.slice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const [store, setStore] = useState([]);
  const [imgId, setImgId] = useState(0);
  const [counter, setCounter] = useState(1);
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

  const addCartList = () => {
    const productsInCart = {
      id: store.id,
      quantity: counter
    };
    if (localStorage.getItem("token")) {
      dispatch(addCart(productsInCart));
    }
  };

  return (
    <div className="container-details" onClick={() => dispatch(setIsOpen(false))}>
      <section id="flexbox-direction-img">
        <div>
          {store.length === 0 ? (
            <SpinnerLoading />
          ) : (
            <div className="img-details">
              <div className="container-flex-info">
                <section className="containerImg-big">
                  <div className="containerImgs-small">
                    {store.productImgs.map((img, i) => (
                      <img
                        src={img}
                        alt="product-img"
                        id="img-small"
                        key={img}
                        onClick={() => {
                          setImgId(i);
                        }}
                      />
                    ))}
                  </div>
                  <div className="imgBig">
                    <img
                      src={store.productImgs[imgId]}
                      alt="product-img"
                      id="img-big"
                    />
                  </div>
                </section>
                <section className="product-info">
                  <h2>{store.title}</h2>
                  <p>{store.description}</p>
                  <div className="product-info-purchase">
                    <div className="product-info-price">
                      <div>
                        <label>Price:</label>
                        <p className="price">${store.price}</p>
                      </div>
                      <div>
                        <label>Quantity:</label>
                        <div>
                          <button
                            className="button-counter"
                            onClick={() =>counter>1 && setCounter(counter - 1)}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            id="amount"
                            name="amount"
                            className="amount-input"
                            onChange={(e) => setCounter(e.target.value)}
                            value={counter}
                          />
                          <button
                            className="button-counter"
                            onClick={() => setCounter(counter + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <button className="button-buy" onClick={()=>addCartList()}>
                      Add cart{" "}
                      <FontAwesomeIcon
                        className="FontAwesomeIcon"
                        icon={faCartShopping}
                      />
                    </button>
                  </div>
                </section>
              </div>
              <strong>Discover similar items</strong>
              <div className="card-category">
                {products.map((product, i) => (
                  <Cards product={product} key={i.toString()} />
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
