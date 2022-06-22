import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { foundProductById } from "../store/slices/productFound.slice";
import { getProducts } from "../store/slices/products.slice";

import "../styles/ProductDetails.css";

function ProductDetails() {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({});
  const { id } = useParams();


  useEffect(() => {
    axios
      .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
      .then((res) => {
        const productFound = res.data.find((product) => product.id === Number(id));
        setNewProduct(productFound);
      });
  }, [dispatch, id]);
  console.log(newProduct);
  return (
    <div className="container-details">
      <section>
        <div className="box-imgs"></div>
        <div></div>
      </section>
      <section>
        <div></div>
      </section>
    </div>
  );
}

export default ProductDetails;
