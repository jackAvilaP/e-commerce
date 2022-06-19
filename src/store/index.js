import { configureStore } from '@reduxjs/toolkit';
import counter from './slices/counter.slice';
import product from './slices/products.slice';
export default configureStore({
  reducer: {
    counter,
    product
  }
});