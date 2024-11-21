import { createSlice } from '@reduxjs/toolkit';

const pricesSlice = createSlice({
  name: 'prices',
  initialState: {
    prices: null
  },
  reducers: {
    addToPrices(state,action) {
    //   console.log(action.payload);
      state.prices = action.payload;
    },
    
    removeFromPrices(state) {
      state.items = [];
    },
  }
});

export const { addToPrices, removeFromPrices } = pricesSlice.actions;
export default pricesSlice.reducer;