import React from 'react';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { LeatherBorder } from '../components/ui/LeatherBorder';

export const CheckoutConfirmationPage: React.FC = () => {
  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <LeatherBorder className="max-w-2xl w-full">
        <div className="p-12 text-center">
          <CheckCircle className="w-24 h-24 text-accent-gold mx-auto mb-8" />
          
          <h1 className="font-playfair text-5xl text-primary-dark mb-6">
            Order Confirmed
          </h1>
          
          <p className="text-primary-dark/70 text-lg mb-12">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
          
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold/90 
                     text-primary-dark px-8 py-4 transition-all duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Return to Home
          </button>
        </div>
      </LeatherBorder>
    </div>
  );
};