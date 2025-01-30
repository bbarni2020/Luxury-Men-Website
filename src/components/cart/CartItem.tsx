import React from 'react';
import { X } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { CartItemImage } from './CartItemImage';
import { CartItemQuantity } from './CartItemQuantity';
import { CartItemPrice } from './CartItemPrice';
import { cn } from '../../utils/classNames';
import { CART_ANIMATIONS } from './animations';

interface CartItemProps {
  item: {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  };
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div 
      className={cn(
        "py-6 flex items-center gap-6 group border-b border-primary-dark/10 last:border-0",
        CART_ANIMATIONS.item.enter,
      )}
    >
      <CartItemImage src={item.image} alt={item.name} />
      
      <div className="flex-grow">
        <h3 className="font-playfair text-lg text-primary-dark mb-1">
          {item.name}
        </h3>
        <p className="text-primary-dark/70 mb-4">${item.price.toFixed(2)}</p>
        
        <CartItemQuantity
          quantity={item.quantity}
          onQuantityChange={handleQuantityChange}
        />
      </div>
      
      <div className="flex flex-col items-end gap-4">
        <CartItemPrice price={item.price} quantity={item.quantity} />
        
        <button 
          onClick={() => removeItem(item.id)}
          className="text-primary-dark/50 hover:text-accent-gold transition-colors
                   opacity-0 group-hover:opacity-100 p-1.5 rounded-sm hover:bg-primary-dark/5"
          aria-label={`Remove ${item.name} from cart`}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};