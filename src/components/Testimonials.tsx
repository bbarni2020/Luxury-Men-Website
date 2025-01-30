import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "The attention to detail in every product is remarkable. A true luxury experience.",
    author: "Balogh Barnabás",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    text: "These products have transformed my daily grooming routine into a ritual I look forward to.",
    author: "Alexander Wright",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="section-spacing bg-accent-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Quote className="w-16 h-16 text-accent-gold mb-8 mx-auto" />
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center mb-16 last:mb-0">
              <p className="font-playfair italic text-2xl md:text-3xl text-primary-dark mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full border-2 border-accent-gold"
                />
                <div className="text-left">
                  <p className="font-playfair text-lg text-accent-gold font-bold">{testimonial.author}</p>
                  <p className="text-primary-dark/70">{testimonial.role}</p>
                </div>
              </div>
              {index < testimonials.length - 1 && <div className="decorative-divider mt-16" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};