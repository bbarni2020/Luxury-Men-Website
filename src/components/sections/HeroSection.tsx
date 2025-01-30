import React from 'react';
import { ChevronRight } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-primary-dark" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-accent-cream tracking-wide">
          Master the Art of Care
        </h1>
        <p className="text-xl md:text-2xl text-accent-cream/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Elevate your grooming ritual with our premium collection
        </p>
        <a href="/shop" className="btn-hero group">
          Explore Collection
          <ChevronRight className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};