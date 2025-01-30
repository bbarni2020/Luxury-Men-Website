import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useCart } from '../../hooks/useCart';

export const CartSummary: React.FC = () => {
  const { items, closeCart, clearCart } = useCart();
  
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0;
  const tax = subtotal * 0.17;
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    clearCart();
    closeCart();
    window.location.href = '/checkout-confirmation';
  };

  return (
    <div className="space-y-6">
      <h2 className="font-playfair text-2xl text-primary-dark mb-6">Order Summary</h2>
      
      <div className="space-y-4">
        <div className="flex justify-between text-primary-dark/70">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-primary-dark/70">
          <span>Shipping</span>
          <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between text-primary-dark/70">
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        
        <div className="h-px bg-primary-dark/10 my-4" />
        
        <div className="flex justify-between font-playfair text-xl text-primary-dark">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      
      <button 
        onClick={handleCheckout}
        className="w-full bg-accent-gold hover:bg-accent-gold/90 text-primary-dark py-4 px-6 
                   transition-all duration-300 group flex items-center justify-center gap-2
                   disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={items.length === 0}
      >
        Proceed to Checkout
        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
};