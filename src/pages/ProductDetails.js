import React, { useCallback, useEffect, useMemo, useState } from "react";
import "../styles/ProductDetails.css";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  foundProductById,
  setproductFound,
} from "../store/slices/productFound.slice";
import { getProducts } from "../store/slices/products.slice";
import axios from "axios";

const ProductDetails = () => {
  const found = useSelector((state) => state.productFound);

  const dispatch = useDispatch();
  const { id } = useParams();
  const [memo, setMemo] = useState([]);

  const foundPro = useCallback(() => {
    axios
      .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
      .then((res) => {
        const newFoundProduct = res.data.data.products.find(
          (newProduct) => newProduct.id === Number(id)
        );
        
      });
  }, [id]);
  {
    /*
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    dispatch(foundProductById(id));
  }, [dispatch, id]);*/
  }
  if(found){
    console.log("first")
  }else{
    console.log("one")
  }
  return (
    <div className="container-details">
      <section id="flexbox-direction-img">
       {/* <img src={found.productImgs[0]} alt="product-img" />

        <div className="flexbox-miniImg">
          {
            found.productImgs.map((productImg, i) => (
              <img
                src={productImg}
                className="imgDetailSmall"
              // onClick={() => setNumberImg(i)}
              />
            ))
          }
        </div> */}
      </section>
    </div>
  );
};

export default ProductDetails;
