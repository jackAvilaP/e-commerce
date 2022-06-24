import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import "../styles/ProductDetails.css";

function ProductDetails() {
  const found = useSelector((state) => state.productFound);
  const products = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [productFound, setProductFound] = useState({})

  useEffect(() => {
    axios
      .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
      .then((res) => {
       // const newFoundProduct = res.data.data.products.find(newProduct => newProduct.id === Number(id));
        //console.log(newFoundProduct.category.id);
        setProductFound(res.data);
      });
    //dispatch(foundProductById(id));
  }, []);

  return (
    <div className="container-details">
      <section id="flexbox-direction-img">
        <img src={found.productImgs[0]} alt="product" />
       
        {/* <div className="flexbox-miniImg">
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
}

export default ProductDetails;
