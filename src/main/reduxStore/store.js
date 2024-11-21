import { configureStore } from '@reduxjs/toolkit'
import shopReducer from '../features/shop/shopSlice'
import cartReducer from '../features/cart/cartSlice'
import pricesReducer from '../features/prices/pricesSlice'

export default configureStore({
  reducer: {
    shop: shopReducer,
    cart: cartReducer,
    prices: pricesReducer,
  },
})

