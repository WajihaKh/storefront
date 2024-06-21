import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';
import SimpleCart from './components/SimpleCart';
import { fetchCategories, fetchProducts } from './components/Store/actions';
import { Container } from '@mui/material';
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
      <SimpleCart />
      <Categories />
      <Products />
      <Footer />
    </Container>
  );
};

export default App;
