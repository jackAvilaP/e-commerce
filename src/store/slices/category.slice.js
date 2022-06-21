import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const categorySlice = createSlice({
  name: "category", // Cambialo por el nombre de tu slice
  initialState: [],
  reducers: {
    setCategorys: (state, action) => action.payload,
  },
});
export const { setCategorys } = categorySlice.actions;

export const getCategorys = () => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/categories`)
    .then((res) => dispatch(setCategorys(res.data.data.categories)))
    .finally(() => dispatch(setIsLoading(false)));
};

export default categorySlice.reducer;
