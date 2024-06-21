import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';  // Import the UUID library

const API_URL = import.meta.env.VITE_API;

export const SET_CATEGORIES = 'SET_CATEGORIES';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_PRODUCT_QUANTITY = 'UPDATE_PRODUCT_QUANTITY';
export const FILTER_PRODUCTS_BY_CATEGORY = 'FILTER_PRODUCTS_BY_CATEGORY';
export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: { ...product, cartItemId: uuidv4() },  // Add unique ID
});

export const removeFromCart = (cartItemId) => ({
  type: REMOVE_FROM_CART,
  payload: cartItemId,
});

export const updateProductQuantity = (productId, quantity) => ({
  type: UPDATE_PRODUCT_QUANTITY,
  payload: { productId, quantity },
});

export const filterProductsByCategory = (category) => ({
  type: FILTER_PRODUCTS_BY_CATEGORY,
  payload: category,
});

export const setActiveCategory = (category) => ({
  type: SET_ACTIVE_CATEGORY,
  payload: category,
});

export const fetchCategories = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    dispatch(setCategories(response.data));
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
};

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    dispatch(setProducts(response.data));
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export const updateProductOnServer = (productId, quantity) => async (dispatch) => {
  try {
    await axios.put(`${API_URL}/products/${productId}`, { quantity });
    dispatch(fetchProducts());
  } catch (error) {
    console.error('Error updating product quantity:', error);
  }
};
