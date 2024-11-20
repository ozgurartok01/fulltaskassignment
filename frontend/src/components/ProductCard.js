import React, { useState } from 'react';
import StarRating from './StarRating'; // Import the StarRating component
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [selectedColor, setSelectedColor] = useState(Object.keys(product.images)[0]); // Default selected color

  // Map color keys to display-friendly names
  const colorNames = {
    yellow: 'Yellow Gold',
    white: 'White Gold',
    rose: 'Rose Gold',
  };

  return (
    <div className="product-card">
      <img src={product.images[selectedColor]} alt={product.name} />
      <h2>{product.name}</h2>
      <p className="price">${product.price} USD</p>
      <p className="popularity">
        {product.popularity}/5
        <StarRating score={product.popularity} /> {/* Render stars */}
      </p>
      <p className="selected-color">{colorNames[selectedColor]}</p>

      <div className="color-options">
        <button
          className="color-button"
          style={{ backgroundColor: '#E6CA97' }} // Yellow
          onClick={() => setSelectedColor('yellow')}
        ></button>
        <button
          className="color-button"
          style={{ backgroundColor: '#D9D9D9' }} // White
          onClick={() => setSelectedColor('white')}
        ></button>
        <button
          className="color-button"
          style={{ backgroundColor: '#E1A4A9' }} // Rose
          onClick={() => setSelectedColor('rose')}
        ></button>
      </div>
    </div>
  );
};

export default ProductCard;
