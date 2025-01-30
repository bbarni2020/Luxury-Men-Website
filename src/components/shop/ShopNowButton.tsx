import React from 'react';
import { ArrowRight } from 'lucide-react';

export const ShopNowButton: React.FC = () => {
  return (
    <a
      href="/shop"
      className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold/90 text-primary-dark px-12 py-5 transition-all duration-300 group"
    >
      Shop Now
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
};