import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const productFoundSlice = createSlice({
  name: "productFound",
  initialState: [],
  reducers: {
    setproductFound: (state, action) => action.payload,
  },
});
export const { setproductFound } = productFoundSlice.actions;

export const foundProductById = (id) => async (dispatch) => {
  dispatch(setIsLoading(true));
  return await axios
    .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products`)
    .then((res) => {
      const newFoundProduct = res.data.data.products.find(
        (newProduct) => newProduct.id === Number(id)
      );
      dispatch(setproductFound(newFoundProduct));
    })
    .finally(() => dispatch(setIsLoading(false)));
};

export default productFoundSlice.reducer;
