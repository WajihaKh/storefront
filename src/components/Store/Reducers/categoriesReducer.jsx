import { SET_CATEGORIES, SET_ACTIVE_CATEGORY, FILTER_PRODUCTS_BY_CATEGORY } from '../actions';

const initialState = {
  categories: [],
  activeCategory: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload,
      };
    case FILTER_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
