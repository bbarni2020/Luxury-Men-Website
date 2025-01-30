import React from 'react';
import { ChevronRight } from 'lucide-react';
import { AnimatedBackground } from './background/AnimatedBackground';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-playfair text-6xl md:text-7xl font-bold text-white mb-8 tracking-wide drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]">
            Master the Art of Care
          </h1>
          
          <p className="text-accent-cream text-xl md:text-2xl max-w-2xl mx-auto mb-12 opacity-90">
            Elevate your grooming ritual with our premium collection of sophisticated essentials
          </p>
          
          <button className="btn-primary group text-primary-dark inline-flex items-center gap-2">
            Explore Collection
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-accent-cream to-transparent" />
    </section>
  );
};