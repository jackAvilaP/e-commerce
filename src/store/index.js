import { configureStore } from '@reduxjs/toolkit';

import product from './slices/products.slice';
import category from './slices/category.slice';
import isLoading from './slices/isLoading.slice';
import isOpen from './slices/viewCartList.slice';
import cartUser from './slices/login.slice';
import productFound from './slices/productFound.slice';
export default configureStore({
  reducer: {
    product,
    productFound,
    category,
    isOpen,
    cartUser,
    isLoading
  }
});