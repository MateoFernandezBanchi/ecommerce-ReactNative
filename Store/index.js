import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../Features/Categories';
import productsReducer from '../Features/Products';
import cartReducer from '../Features/Cart';

const store = configureStore({
  reducer: {
      categories: categoriesReducer,
      products: productsReducer,
      cart: cartReducer,
  }
})

export default store