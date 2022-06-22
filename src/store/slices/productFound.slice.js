import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const productFoundSlice = createSlice({
  name: "productFound",
  initialState: {},
  reducers: {
    setproductFound: (state, action) =>  action.payload,
  },
});
export const { setproductFound } = productFoundSlice.actions;

export const foundProductById = (id) => (dispatch) => {
  return axios
    .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`)
    .then((res) =>dispatch(setproductFound(res.data.data.product)));
};

export default productFoundSlice.reducer;
