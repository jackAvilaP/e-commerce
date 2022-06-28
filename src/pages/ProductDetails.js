import React, { useEffect, useState} from "react";
import "../styles/ProductDetails.css";

import { useParams } from "react-router-dom";

import axios from "axios";
import SpinnerLoading from "../components/SpinnerLoading";


const ProductDetails = () => {
  const [store, setStore] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const odtenerProducto = async () => {
      const result = await axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
      
        setStore( result.data.data.products.find(
          (newProduct) => newProduct.id === Number(id)
        ))
    };
    odtenerProducto()
  }, [id]);
 
  return (
    <div className="container-details">
      <section id="flexbox-direction-img">

        {
          store.length === 0 ? <SpinnerLoading/> : 
            <div className="img-details">
              <img  src={store.productImgs[0]} alt="product-img" />
            </div>
        }
        
      </section>
    </div>
  );
};

export default ProductDetails;
