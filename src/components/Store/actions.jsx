// src/components/Store/actions.jsx
export const setActiveCategory = (category) => ({
    type: 'SET_ACTIVE_CATEGORY',
    payload: category,
  });
  
  export const filterProductsByCategory = (category) => ({
    type: 'FILTER_PRODUCTS_BY_CATEGORY',
    payload: category,
  });
  