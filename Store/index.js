import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../Features/Categories';
import productsReducer from '../Features/Products';
import cartReducer from '../Features/Cart';
import locationReducer from '../Features/Locations';
import authReducer from '../Features/Auth';
import ordersReducer from '../Features/Orders';

const store = configureStore({
  reducer: {
      categories: categoriesReducer,
      products: productsReducer,
      cart: cartReducer,
      location: locationReducer,
      auth: authReducer,
      orders: ordersReducer
  }
})

export default store