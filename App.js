import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import DeliveryAndPaymentPage from './pages/DeliveryAndPaymentPage';
import ContactInfoPage from './pages/ContactInfoPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/catalog">Каталог</Link>
          <Link to="/about">О нас</Link>
          <Link to="/delivery-and-payment">Доставка и оплата</Link>
          <Link to="/contact">Контакты</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/delivery-and-payment" element={<DeliveryAndPaymentPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact-info" element={<ContactInfoPage />} />
      </Routes>
      <footer>
        <p>&copy; 2024 Интернет-магазин. Все права защищены.</p>
      </footer>
    </Router>
  );
};

export default App;
