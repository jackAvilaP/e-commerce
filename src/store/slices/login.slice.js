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

export const checkIn = (formstate) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
        .post(
            "https://ecommerce-api-react.herokuapp.com/api/v1/users",
            formstate
        )
        .catch(error => {
            if (error.response.status === 401 || error.response.status === 404 || error.response.status === 400) {
                alert(error.response.data.message)
            }
        })
        .finally(() => dispatch(setIsLoading(false)));
}

export const loginUser = (formstate) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
        .post(
            "https://ecommerce-api-react.herokuapp.com/api/v1/users/login",
            formstate
        )
        .catch(error => {
            if (error.response.status === 401 || error.response.status === 404) {
                alert(error.response.data.message)
            }
        })
        .finally(() => dispatch(setIsLoading(false)));
}

export const getCartList = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
        .get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
        .then((res) => dispatch(setCart(res.data.data.cart.products)));
}

export default loginSlice.reducer;
