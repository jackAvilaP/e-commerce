import { configureStore } from '@reduxjs/toolkit';

import product from './slices/products.slice';
import category from './slices/category.slice';
export default configureStore({
  reducer: {
    product,
    category
  }
});