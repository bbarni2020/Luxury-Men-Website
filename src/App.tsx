import React from 'react';
import { LoadingSpinner } from './components/LoadingSpinner';
import { BorderFrame } from './components/layout/BorderFrame';
import { MinimalistBackground } from './components/background/MinimalistBackground';
import { CartOverlay } from './components/cart/CartOverlay';
import { useLoading } from './hooks/useLoading';
import { useCart } from './hooks/useCart';
import { LandingPage } from './pages/LandingPage';
import { ShopPage } from './pages/ShopPage';
import { CheckoutConfirmationPage } from './pages/CheckoutConfirmationPage';

export const App: React.FC = () => {
  const { isLoading } = useLoading();
  const { isOpen: isCartOpen, closeCart } = useCart();
  const path = window.location.pathname;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-primary-dark">
      <MinimalistBackground />
      <BorderFrame />
      <CartOverlay isOpen={isCartOpen} onClose={closeCart} />
      <div className="relative z-10">
        {path === '/shop' && <ShopPage />}
        {path === '/checkout-confirmation' && <CheckoutConfirmationPage />}
        {path === '/' && <LandingPage />}
      </div>
    </div>
  );
};