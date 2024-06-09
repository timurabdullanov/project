import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = {
    id: id,
    name: `Товар ${id}`,
    description: `Оригинал товар из Калифорний ${id}`,
    price: id * 1000,
    image: 'https://via.placeholder.com/150',
  };

  return (
    <main>
      <div className="product-detail">
        <ProductDetail product={product} />
      </div>
    </main>
  );
};

export default ProductDetailPage;
