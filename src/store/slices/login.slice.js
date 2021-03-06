import { createSlice } from "@reduxjs/toolkit";

import { setIsLoading } from "./isLoading.slice";

import axios from "axios";
import getConfig from "../../utils/getConfig";


export const loginSlice = createSlice({
  name: "cartUser",
  initialState: [],
  reducers: {
    setCart: (state, action) => action.payload,
  }
});

export const { setCart } = loginSlice.actions;

export const checkIn = (formstate) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    try {
      return await axios
        .post(
          "https://ecommerce-api-react.herokuapp.com/api/v1/users",
          formstate
        );
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 404 || error.response.status === 400) {
        alert(error.response.data.message);
      }
    }
  } finally {
    return dispatch(setIsLoading(false));
  }
}

export const loginUser = (formstate) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    try {
      const res = await axios
        .post(
          "https://ecommerce-api-react.herokuapp.com/api/v1/users/login",
          formstate
        );
      localStorage.setItem("user", res.data.data.user.firstName);
      localStorage.setItem("token", res.data.data.token);
    } catch (error) {
      if (error.response.status === 401 || error.response.status === 404) {
        alert(error.response.data.message);
      }
    }
  } finally {
    return dispatch(setIsLoading(false));
  }
}


export const getCartList = () => async (dispatch) => {
  try {
    const res = await axios
      .get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig);
    return dispatch(setCart(res.data.data.cart.products));
  } catch (error) {
    if (error.response.status === 401 || error.response.status === 404) {
      console.log(error.response.data.message);
    }
  }

}

export const addCart = (productsInCart) => async (dispatch) => {
  dispatch(setIsLoading(true));
  try {
    return await axios
      .post(
        "https://ecommerce-api-react.herokuapp.com/api/v1/cart",
        productsInCart,
        getConfig
      );
  } finally {
    return dispatch(setIsLoading(false));
  }

}


export const deletCartProduct =(id) =>async (dispatch)=>{
  dispatch(setIsLoading(true));
  try {
    try {
      await axios
        .delete(
          `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${id}`,
          getConfig
        );
      return dispatch(getCartList());
    } catch (error) {
      if (error.response.status === 404 && localStorage.getItem(" ")) {
        dispatch(setCart([]));
      }
    }
  } finally {
    return dispatch(setIsLoading(false));
  }
}
export default loginSlice.reducer;