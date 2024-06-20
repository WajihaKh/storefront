import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';
import { Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchCategories, fetchProducts } from './components/Store/actions'
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container className="container">
      <Header />
      <Categories />
      <Products />
      <Footer />
    </Container>
  );
};

export default App;
