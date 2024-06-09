import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price} $</p>
      <button>Добавить в корзину</button>
    </div>
  );
};

export default ProductDetail;
