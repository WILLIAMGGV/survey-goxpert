import React from 'react';

const Square = ({
  number,
  filled,
  hovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
  size = 40,
  color = '#000',
  hoverColor = '#000'
}) => {
  return (
    <div 
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="button"
      tabIndex={0}
      aria-label={`Rating ${number}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
      style={{
        width: '50px',
          height: '50px', background: '#6633CC', borderRadius: '8px', marginLeft: '2px', border: '3px solid #FE2A9F'
      }}
    >
      <div
        className={`flex items-center justify-center rounded-md transition-all duration-300 ${
          filled 
            ? 'text-white' 
            : 'text-gray-500 border-2 border-gray-200'
        } ${
          hovered 
            ? 'scale-110' 
            : 'scale-100'
        }`}
        style={{
          backgroundColor: filled ? (hovered ? hoverColor : color) : '#003366',
          width: '50px',
          height: '50px',
          fontSize: `24px`,
          color: '#fff',
          cursor: 'pointer',
          
          fontWeight: '600', borderRadius: '6px', placeContent: 'center', justifyContent: 'center', alignItems: 'center'
        }}
      >
        <span style={{display: 'flex', flexDirection: 'row', alignItems: 'center', placeContent: 'center', justifyContent: 'center' }}>{number}</span>

        

      </div>
    </div>
  );
};

export default Square;