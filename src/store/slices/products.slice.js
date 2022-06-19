import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productSlice = createSlice({
    name: 'product', // Cambialo por el nombre de tu slice
    initialState: [],
    reducers: {

    }
})

export default productSlice.reducer;