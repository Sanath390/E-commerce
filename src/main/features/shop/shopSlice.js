import { createSlice } from '@reduxjs/toolkit';

const shopSlice = createSlice({
  name: 'shop',
  initialState: {
    item: []
  },
  reducers: {
    setItem: (state, action) => {
      if (!state.item.includes(action.payload)) {
        state.item.push(action.payload);
      }
    },
    clearItem: (state) => {
      state.item = [];
    }
  }
});

export const { setItem, clearItem } = shopSlice.actions;
export default shopSlice.reducer;
