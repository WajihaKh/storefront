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
    payload: product,
  });

  export const removeFromCart = (product) => ({
    type: 'REMOVE_FROM_CART',
    payload: product,
  });