import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setActiveCategory, filterProductsByCategory } from './components/Store/actions';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    dispatch(setActiveCategory(category));
    dispatch(filterProductsByCategory(category));
  };

  return (
    <Container className="container">
      <Header handleCategoryClick={handleCategoryClick} />
      <Categories handleCategoryClick={handleCategoryClick} />
      <Products />
      <Footer />
    </Container>
  );
};

export default App;
