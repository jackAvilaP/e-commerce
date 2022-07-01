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
        ).then(res => console.log("first"))
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
        ).then(res => {
            localStorage.setItem("user", res.data.data.user.firstName);
            localStorage.setItem("token", res.data.data.token);
            console.log(res.data.data.user.firstName);
        })
        .catch(error => {
            if (error.response.status === 401 || error.response.status === 404) {
                alert(error.response.data.message)
            }
        })
        .finally(() => dispatch(setIsLoading(false)));
}

export const getCartList = () => (dispatch) => {
    return axios
        .get("https://ecommerce-api-react.herokuapp.com/api/v1/cart", getConfig())
        .then((res) => dispatch(setCart(res.data.data.cart.products)))
        .catch(error => {
            if (error.response.status === 401 || error.response.status === 404) {
                alert(error.response.data.message)
            }
        });
}

export default loginSlice.reducer;
