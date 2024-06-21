import {
  SET_PRODUCTS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_PRODUCT_QUANTITY,
  FILTER_PRODUCTS_BY_CATEGORY,
} from '../actions';

const initialState = {
  products: [],
  filteredProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case FILTER_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        filteredProducts: state.products.filter(product => product.category === action.payload),
      };
    case UPDATE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.productId
            ? { ...product, inStock: action.payload.quantity }
            : product
        ),
        filteredProducts: state.filteredProducts.map((product) =>
          product.id === action.payload.productId
            ? { ...product, inStock: action.payload.quantity }
            : product
        ),
      };
    case ADD_TO_CART:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, inStock: product.inStock - 1 }
            : product
        ),
        filteredProducts: state.filteredProducts.map((product) =>
          product.id === action.payload.id
            ? { ...product, inStock: product.inStock - 1 }
            : product
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
