import React from 'react';
import { CartItem } from './CartItem';
import { useCart } from '../../hooks/useCart';

export const CartList: React.FC = () => {
  const { items } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-primary-dark/70">Your cart is empty</p>
        <p className="text-sm text-primary-dark/50 mt-2">
          Add items from our collection to get started
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="font-playfair text-2xl text-primary-dark mb-6">
        Items in Cart ({items.length})
      </h2>
      
      <div className="divide-y divide-primary-dark/10">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};