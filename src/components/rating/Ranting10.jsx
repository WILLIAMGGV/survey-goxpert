import React, { useState } from 'react';
import Square from './Square';

const Rating10 = ({
  value = 0,
  onChange,
  count = 10,
  size = 40,
  readOnly = false,
  showValue = false,
  color = '#4F46E5',
  hoverColor = '#6366F1',
  className = '',
  preg
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [internalRating, setInternalRating] = useState(value);
  
  const currentRating = hoverRating > 0 ? hoverRating : internalRating;

  const handleClick = (newRating) => {
    if (readOnly) return;
    setInternalRating(newRating);
    if (onChange) onChange(newRating);
  };

  const handleMouseEnter = (rating) => {
    if (!readOnly) {
      setHoverRating(rating);
    }
  };

  const handleMouseLeave = () => {
    if (!readOnly) {
      setHoverRating(0);
    }
  };

  const handleKeyDown = (e) => {
    if (readOnly) return;
    
    if (e.key === 'ArrowRight' && internalRating < count) {
      const nextRating = Math.min(internalRating + 1, count);
      setInternalRating(nextRating);
      if (onChange) onChange(nextRating);
    } else if (e.key === 'ArrowLeft' && internalRating > 0) {
      const prevRating = Math.max(internalRating - 1, 0);
      setInternalRating(prevRating);
      if (onChange) onChange(prevRating);
    }
  };

  return (
    <div 
      className={`flex flex-wrap items-center gap-2 ${className}`}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      role="radiogroup"
      aria-label="Rating"
      tabIndex={readOnly ? -1 : 0}
      style={{ display: "flex", flexDirection: "row" }}
    >
      {Array.from({ length: count }).map((_, index) => {
        const number = index + 1;
        const isSelected = currentRating >= number;
        const isHovered = hoverRating >= number;
        
        return (
          <Square
            key={index}
            number={number}
            filled={isSelected}
            hovered={isHovered}
            onClick={() => handleClick(number)}
            onMouseEnter={() => handleMouseEnter(number)}
            onMouseLeave={handleMouseLeave}
            size={size}
            color={color}
            hoverColor={hoverColor}
          />
        );
      })}
      
      {showValue && (
          <input type='hidden' id={`respuesta${preg}`} value={currentRating}></input>
      )}
    </div>
  );
};

export default Rating10;