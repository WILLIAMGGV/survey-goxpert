import React from 'react';
import useWindowSize from './useWindowSize'; // Asegúrate de importar el hook

const Square = ({
  number,
  filled,
  hovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
  color = '#000',
  hoverColor = '#000'
}) => {
  const { width } = useWindowSize();
  
  // Define el tamaño basado en el ancho de la ventana
  const size = width < 768 ? 30 : 50; // Cambia 768 por el breakpoint que desees

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
        width: `${size}px`,
        height: `${size}px`,
        background: '#6633CC',
        borderRadius: '8px',
        marginLeft: '2px',
        border: '3px solid #FE2A9F'
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
          width: `${size}px`,
          height: `${size}px`,
          fontSize: `${size * 0.5}px`, // Ajusta el tamaño de la fuente en relación al tamaño del cuadrado
          color: '#fff',
          cursor: 'pointer',
          fontWeight: '600',
          borderRadius: '6px',
          placeContent: 'center',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <span style={{display: 'flex', flexDirection: 'row', alignItems: 'center', placeContent: 'center', justifyContent: 'center' }}>{number}</span>
      </div>
    </div>
  );
};

export default Square;