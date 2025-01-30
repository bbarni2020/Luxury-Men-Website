import React from 'react';
import { Quote } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Quote className="w-16 h-16 text-accent-gold mx-auto mb-8" />
        <blockquote className="font-playfair italic text-2xl md:text-3xl text-accent-cream mb-8">
          "The epitome of luxury grooming excellence. Every product speaks of unparalleled quality and sophistication."
        </blockquote>
        <div className="w-24 h-px bg-accent-gold/40 mx-auto" />
      </div>
    </section>
  );
};