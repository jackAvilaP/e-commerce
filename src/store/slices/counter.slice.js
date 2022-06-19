import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const counterSlice = createSlice({
    name: 'counter', // Cambialo por el nombre de tu slice
    initialState: 29,
    reducers: {

    }
})

export default counterSlice.reducer;