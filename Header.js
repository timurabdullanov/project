import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Интернет-магазин</h1>
      <nav>
        <Link to="/">Главная</Link> | <Link to="/about">О нас</Link> | <Link to="/catalog">Каталог</Link> | <Link to="/contact">Контакты</Link> |
      </nav>
    </header>
  );
};

export default Header;
