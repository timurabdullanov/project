import React from 'react';
import ProductCard from '../components/ProductCard';
import product1Image from '../assets/images/product1.jpg';
import product2Image from '../assets/images/product2.jpg';
import product3Image from '../assets/images/product3.jpg';
import product4Image from '../assets/images/product4.jpg';

const CatalogPage = () => {
  const products = [
    {
      id: 1,
      name: 'Товар 1',
      price: 1000,
      image: product1Image,
    },
    {
      id: 2,
      name: 'Товар 2',
      price: 2000,
      image: product2Image,
    },
    {
      id: 3,
      name: 'Товар 3',
      price: 3000,
      image: product3Image,
    },
    {
      id: 4,
      name: 'Товар 4',
      price: 4000,
      image: product4Image,
    },
  ];

  return (
    <main>
      <h1>Каталог</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default CatalogPage;
