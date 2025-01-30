import React from 'react';

interface CartItemImageProps {
  src: string;
  alt: string;
}

export const CartItemImage: React.FC<CartItemImageProps> = ({ src, alt }) => {
  return (
    <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 
                 group-hover:scale-105"
      />
    </div>
  );
};