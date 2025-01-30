import React from 'react';
import { Plus } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

interface AddToCartButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const addItem = useCart((state) => state.addItem);

  return (
    <button
      onClick={() => addItem(product)}
      className="bg-primary-dark text-accent-cream p-2 hover:bg-primary-forest transition-colors duration-300 group-hover:shadow-lg flex items-center gap-2"
      aria-label="Add to cart"
    >
      <Plus className="w-6 h-6" />
    </button>
  );
};