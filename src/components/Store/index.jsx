import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { combineReducers } from 'redux';
import productsReducer from './Reducers/productsReducer';
import categoriesReducer from './Reducers/categoriesReducer';
import cartReducer from './Reducers/cartReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
