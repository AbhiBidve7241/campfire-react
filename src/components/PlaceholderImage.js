import React from 'react';
import './PlaceholderImage.css';

const PlaceholderImage = ({ 
  width = '100%', 
  height = '200px', 
  text = 'Image', 
  number = null,
  className = '',
  style = {}
}) => {
  const displayText = number ? `${number}` : text;
  
  return (
    <div 
      className={`placeholder-image ${className}`}
      style={{ 
        width, 
        height, 
        ...style 
      }}
    >
      <div className="placeholder-content">
        <span className="placeholder-icon">
          <i className="fa-regular fa-image"></i>
        </span>
        <span className="placeholder-text">{displayText}</span>
      </div>
    </div>
  );
};

export default PlaceholderImage;
