// src/components/Reducers/categoriesReducer.jsx
const initialState = {
  categories: [
    { name: 'electronics', displayName: 'Electronics', description: 'Electronic Items' },
    { name: 'foods', displayName: 'Foods', description: 'Food Items' },
  ],
  activeCategory: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_CATEGORY':
      return {
        ...state,
        activeCategory: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
