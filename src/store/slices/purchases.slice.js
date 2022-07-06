import { createSlice } from "@reduxjs/toolkit";

import { setIsLoading } from "./isLoading.slice";

import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setCart } from "./login.slice";

export const purchasesSlice = createSlice({
    name: "productPurchase",
    initialState: [],
    reducers: {
        setPurchase: (state, action) => action.payload,
    },
});

export const { setPurchase } = purchasesSlice.actions;

export const getPurchase = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios
        .get(
            "https://ecommerce-api-react.herokuapp.com/api/v1/purchases",
            getConfig
        )
        .then((res) => {
            dispatch(setPurchase(res.data.data.purchases))
        })
        .catch(error => {
            if (error.response.status === 401 || error.response.status === 404) {
                console.log(error.response.data.message)
            }
        })
        .finally(() => dispatch(setIsLoading(false)));
}

export const postCheckout = () => (dispatch) => {

    dispatch(setIsLoading(true))
    return axios
        .post('https://ecommerce-api-react.herokuapp.com/api/v1/purchases',{},getConfig)
        .then(() =>{
            dispatch(setCart([]))
            dispatch(getPurchase())
        } )
        .finally(() => dispatch(setIsLoading(false)))
}
export default purchasesSlice.reducer;