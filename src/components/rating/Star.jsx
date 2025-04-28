import React from 'react';
import { Star as StarIcon } from 'lucide-react';

const Star = ({
  filled,
  halfFilled = false,
  hovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
  color = '#FFD700', // Gold color
  hoverColor = '#FFC000',
}) => {
  return (
    <div 
      className="relative cursor-pointer"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="button"
      tabIndex={0}
      aria-label={filled ? "Filled star" : "Empty star"}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      <StarIcon
        size="72"
        className={`transition-all duration-300 ${
          filled 
            ? 'fill-current text-opacity-100' 
            : 'text-gray-300'
        } ${
          hovered 
            ? 'scale-110' 
            : 'scale-100'
        }`}
        fill={filled || halfFilled ? (hovered ? hoverColor : color) : 'none'}
        stroke={hovered ? hoverColor : filled ? color : '#FE2A9F'}
        strokeWidth={1.5}
        style={{
          filter: filled && !hovered ? 'drop-shadow(0 0 2px rgba(255, 215, 0, 0.4))' : 'none',
        }}
      />
      
      {halfFilled && !filled && (
        <div className="absolute inset-0 overflow-hidden w-1/2">
          <StarIcon
            size="72"
            className="fill-current"
            fill={hovered ? hoverColor : color}
            stroke={hovered ? hoverColor : color}
            strokeWidth={1.5}
          />
        </div>
      )}
    </div>
  );
};

export default Star;