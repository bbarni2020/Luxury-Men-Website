import React from 'react';
import { X } from 'lucide-react';
import { CartList } from './CartList';
import { CartSummary } from './CartSummary';
import { useClickOutside } from '../../hooks/useClickOutside';
import { useCart } from '../../hooks/useCart';
import { cn } from '../../utils/classNames';
import { CART_ANIMATIONS } from './animations';

interface CartOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartOverlay: React.FC<CartOverlayProps> = ({ isOpen, onClose }) => {
  const cartRef = useClickOutside<HTMLDivElement>(onClose);
  const { items } = useCart();

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      return () => window.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 bg-primary-dark/80 backdrop-blur-sm',
        CART_ANIMATIONS.overlay.enter,
        isOpen ? CART_ANIMATIONS.overlay.enterTo : CART_ANIMATIONS.overlay.leaveTo
      )}
      style={{ display: isOpen ? 'block' : 'none' }}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={cartRef}
        className={cn(
          'fixed right-0 top-0 h-full w-full max-w-2xl bg-accent-cream shadow-xl',
          CART_ANIMATIONS.panel.enter,
          isOpen ? CART_ANIMATIONS.panel.enterTo : CART_ANIMATIONS.panel.leaveTo
        )}
      >
        <div className="relative h-full flex flex-col">
          <div className="p-6 border-b border-primary-dark/10">
            <div className="flex items-center justify-between">
              <h2 className="font-playfair text-2xl text-primary-dark">
                Shopping Cart {items.length > 0 && `(${items.length})`}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:text-accent-gold transition-colors"
                aria-label="Close cart"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {items.length > 0 ? (
              <CartList />
            ) : (
              <div className="text-center py-12">
                <p className="text-primary-dark/70">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="mt-4 text-accent-gold hover:text-accent-gold/80 
                           transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t border-primary-dark/10 p-6">
              <CartSummary />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};