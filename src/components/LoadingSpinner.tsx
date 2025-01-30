/// For better understanding, I commented out the code. You can remove the comments if you want to use it.

import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary-dark">
      <div className="relative">
        {/* Outer ring */}
        <div className="w-24 h-24 border-4 border-accent-gold/20 rounded-full animate-spin-slow" />
        
        {/* Inner spinning ring */}
        <div className="absolute top-0 left-0 w-24 h-24">
          <div className="w-24 h-24 border-4 border-transparent border-t-accent-gold rounded-full animate-spin" />
        </div>
        
        {/* Center dot */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-accent-gold rounded-full animate-pulse" />
        </div>
      </div>
      
      {/* Loading text */}
      <p className="mt-8 text-accent-cream font-playfair text-xl tracking-widest animate-pulse">
        LOADING
      </p>
    </div>
  );
};