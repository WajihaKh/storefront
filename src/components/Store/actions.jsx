import { v4 as uuidv4 } from 'uuid';
export const setActiveCategory = (category) => ({
    type: 'SET_ACTIVE_CATEGORY',
    payload: category,
  });
  
  export const filterProductsByCategory = (category) => ({
    type: 'FILTER_PRODUCTS_BY_CATEGORY',
    payload: category,
  });
  
  export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: { ...product, id: uuidv4() },
  });

  export const removeFromCart = (id) => ({
    type: 'REMOVE_FROM_CART',
    payload: id,
  });