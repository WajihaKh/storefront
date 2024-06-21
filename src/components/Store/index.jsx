import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import productsReducer from './Reducers/productsReducer';
import categoriesReducer from './Reducers/categoriesReducer';
import cartReducer from './Reducers/cartReducer';

const rootReducer = {
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
