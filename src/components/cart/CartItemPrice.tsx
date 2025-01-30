import React from 'react';

interface CartItemPriceProps {
  price: number;
  quantity: number;
}

export const CartItemPrice: React.FC<CartItemPriceProps> = ({ price, quantity }) => {
  const total = price * quantity;
  
  return (
    <div className="text-right">
      <p className="font-playfair text-lg text-primary-dark">
        ${total.toFixed(2)}
      </p>
      {quantity > 1 && (
        <p className="text-sm text-primary-dark/60">
          ${price.toFixed(2)} each
        </p>
      )}
    </div>
  );
};