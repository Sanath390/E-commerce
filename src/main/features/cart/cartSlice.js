//add a cart to store items, when added to cart, add to cart, when removed from cart, remove from cart.
//Also store increment values and decrement values.

import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: {}
  },
  reducers: {
    addToCart(state,action) {
      // console.log(action.payload);
      const keys = Object.keys(action.payload);
      if(action.payload[keys[0]]===0){
        delete state.items[keys[0]];
      }else {
        // Update or add the item with the new quantity
        Object.assign(state.items, action.payload);
      }
      
    },
    
    removeFromCart(state) {
      state.items = {};
    },
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;