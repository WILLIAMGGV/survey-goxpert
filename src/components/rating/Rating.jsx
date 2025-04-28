import React, { useState } from 'react';
import Star from './Star';

const Rating = ({
  value = 0,
  onChange,
  count = 5,
  size = 24,
  allowHalf = false,
  readOnly = false,
  showValue = false,
  color = '#6633CC',
  hoverColor = '#6633CC',
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
      const nextRating = allowHalf ? Math.min(internalRating + 0.5, count) : Math.min(internalRating + 1, count);
      setInternalRating(nextRating);
      if (onChange) onChange(nextRating);
    } else if (e.key === 'ArrowLeft' && internalRating > 0) {
      const prevRating = allowHalf ? Math.max(internalRating - 0.5, 0) : Math.max(internalRating - 1, 0);
      setInternalRating(prevRating);
      if (onChange) onChange(prevRating);
    }
  };

  return (
    <div 
      className={`flex items-center gap-1 ${className}`}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      role="radiogroup"
      aria-label="Rating"
      tabIndex={readOnly ? -1 : 0}
      style={{ display: "flex", flexDirection: "row" }}
    >
      {Array.from({ length: count }).map((_, index) => {
        const starIndex = index + 1;
        const isHalfStar = allowHalf && currentRating === index + 0.5;
        const isFullStar = currentRating >= starIndex;
        const isHovered = hoverRating >= starIndex;
        
        return (
          <React.Fragment key={index}>
            {allowHalf && (
              <div 
                className="relative inline-block"
                onClick={() => handleClick(index + 0.5)}
                onMouseEnter={() => handleMouseEnter(index + 0.5)}
                style={{ width: size/2, height: size, overflow: 'hidden', position: 'relative' }}
              >
                <div style={{ position: 'absolute', left: 0 }}>
                  <Star
                    filled={isFullStar || (currentRating >= index + 0.5 && currentRating < starIndex)}
                    hovered={isHovered || (hoverRating >= index + 0.5 && hoverRating < starIndex)}
                    onClick={() => handleClick(index + 0.5)}
                    onMouseEnter={() => handleMouseEnter(index + 0.5)}
                    onMouseLeave={handleMouseLeave}
                    size={size}
                    color={color}
                    hoverColor={hoverColor}
                  />
                </div>
              </div>
            )}
            
            <Star
              filled={isFullStar}
              halfFilled={isHalfStar}
              hovered={isHovered}
              onClick={() => handleClick(starIndex)}
              onMouseEnter={() => handleMouseEnter(starIndex)}
              onMouseLeave={handleMouseLeave}
              size={size}
              color={color}
              hoverColor={hoverColor}
            />
          </React.Fragment>
        );
      })}
      
      {showValue && (
        <span className="ml-2 text-gray-700 font-medium">
          <input type='hidden' id={`respuesta${preg}`} value={currentRating.toFixed(allowHalf ? 1 : 0)}></input>
        </span>
      )}

      
    </div>
  );
};

export default Rating;