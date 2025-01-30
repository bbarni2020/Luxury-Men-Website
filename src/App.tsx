import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-primary-dark">
      <MinimalistBackground />
      <BorderFrame />
      <CartOverlay isOpen={isCartOpen} onClose={closeCart} />
      <div className="relative z-10">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/checkout-confirmation" element={<CheckoutConfirmationPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};