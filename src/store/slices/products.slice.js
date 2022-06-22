import { createSlice } from "@reduxjs/toolkit";

import { setIsLoading } from "./isLoading.slice";

import axios from "axios";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productSlice = createSlice({
  name: "product", // Cambialo por el nombre de tu slice
  initialState: [],
  reducers: {
    setProducts: (state, action) => action.payload,
    setPrice: (state, action) => action.payload,
    setProductSearch: (state, action) => action.payload,
  },
});
export const { setProducts, setPrice, setProductSearch } = productSlice.actions;

export const getProducts = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)));
};



export const searchTitle = (title) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://ecommerce-api-react.herokuapp.com/api/v1/products?query=${title}`
    )
    .then((res) => dispatch(setProductSearch(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterProductsValue = (formstate, products) => (dispatch) => {
  const result = products.filter(
    (product) =>
      product.price > parseInt(formstate.toValue) &&
      product.price < parseInt(formstate.formValue)
  );
  dispatch(setPrice(result));
};

export const categorysId = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://ecommerce-api-react.herokuapp.com/api/v1/products?category=${id}`
    )
    .then((res) => dispatch(setProducts(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)));
};

export default productSlice.reducer;
