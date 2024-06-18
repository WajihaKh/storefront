const initialState = {
    products: [
      {
        name: 'TV',
        category: 'electronics',
        description: 'See all the things',
        price: 1000,
        image: '/assets/tv.jpg'
      },
      {
        name: 'Macbook',
        category: 'electronics',
        description: 'Do all the things',
        price: 1500,
        image: '/images/macbook.jpg'
      },
      {
        name: 'Pasta',
        category: 'foods',
        description: 'Delicious italian cuisine',
        price: 30,
        image: '/images/pizza.jpg'
      },
      {
        name: 'Butter Chicken',
        category: 'foods',
        description: 'Tasty indian cuisine',
        price: 15,
        image: '/images/burger.jpg'
      }
    ],
    filteredProducts: []
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FILTER_PRODUCTS_BY_CATEGORY':
        return {
          ...state,
          filteredProducts: state.products.filter(product => product.category === action.payload)
        };
      default:
        return state;
    }
  };
  
  export default productsReducer;
  