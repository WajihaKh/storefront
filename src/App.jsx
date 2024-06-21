import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Products from './components/Products';
import SimpleCart from './components/SimpleCart';
import ProductDetails from './components/Products/detail';
import ShoppingCart from './components/SimpleCart/shoppingCart';
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
      <Routes>
        <Route path="/" element={<><Categories /><Products /></>} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
