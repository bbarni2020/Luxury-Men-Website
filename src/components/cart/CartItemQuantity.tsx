import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { CartQuantityInput } from './CartQuantityInput';

interface CartItemQuantityProps {
  quantity: number;
  onQuantityChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const CartItemQuantity: React.FC<CartItemQuantityProps> = ({
  quantity,
  onQuantityChange,
  min = 1,
  max = 99,
}) => {
  const handleIncrement = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="p-1.5 hover:text-accent-gold transition-colors disabled:opacity-50 
                 disabled:cursor-not-allowed rounded-sm hover:bg-primary-dark/5"
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>
      
      <CartQuantityInput
        quantity={quantity}
        onChange={onQuantityChange}
        min={min}
        max={max}
      />
      
      <button
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="p-1.5 hover:text-accent-gold transition-colors disabled:opacity-50 
                 disabled:cursor-not-allowed rounded-sm hover:bg-primary-dark/5"
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
};