import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

export const CartButton: React.FC = () => {
  const { items, toggleCart } = useCart();
  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <button
      onClick={toggleCart}
      className="fixed top-8 right-8 z-40 bg-accent-gold hover:bg-accent-gold/90 text-primary-dark p-3 transition-all duration-300 group"
      aria-label="Open cart"
    >
      <div className="relative">
        <ShoppingBag className="w-6 h-6" />
        {itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary-dark text-accent-cream text-xs w-5 h-5 rounded-full flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </div>
    </button>
  );
};