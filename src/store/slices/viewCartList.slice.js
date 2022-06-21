import { createSlice } from "@reduxjs/toolkit";

export const viewCartListSlice = createSlice({
  name: "isOpen",
  initialState: false,
  reducers: {
    setIsOpen: (state, action) =>{
      return action.payload;
    },
  },
});
export const { setIsOpen } = viewCartListSlice.actions;
export default viewCartListSlice.reducer;
