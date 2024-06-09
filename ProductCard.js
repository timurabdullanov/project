import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price} $</p>
      <a href={`/product/${product.id}`}>Подробнее</a>
    </div>
  );
};

export default ProductCard;
