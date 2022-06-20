import { createSlice } from "@reduxjs/toolkit";

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const categorySlice = createSlice({
  name: "category", // Cambialo por el nombre de tu slice
  initialState: [],
  reducers: {
    setCategorys: (state, action) => action.payload,
  },
});
export const { setCategorys } = categorySlice.actions;
export default categorySlice.reducer;