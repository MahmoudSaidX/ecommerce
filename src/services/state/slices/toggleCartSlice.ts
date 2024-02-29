import { createSlice } from "@reduxjs/toolkit";

interface toggleCart {
  isOpen: boolean;
}

const initialState: toggleCart = {
  isOpen: false,
};

const toggleCartSlice = createSlice({
  name: "toggleCart",
  initialState,
  reducers: {
    opentoggleCart: (state) => {
      state.isOpen = true;
    },
    closetoggleCart: (state) => {
      state.isOpen = false;
    },
    toggletoggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { opentoggleCart, closetoggleCart, toggletoggleCart } =
  toggleCartSlice.actions;

export default toggleCartSlice.reducer;
