import React from 'react';
import { LeatherBorder } from '../ui/LeatherBorder';
import { History } from 'lucide-react';

export const OurStorySection: React.FC = () => {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <History className="w-16 h-16 text-accent-gold mx-auto mb-8" />
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-accent-cream text-center mb-4">
          Our Story
        </h2>
        <div className="w-24 h-px bg-accent-gold/40 mx-auto mb-16" />
        
        <LeatherBorder>
          <div className="p-12 md:p-16 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="font-playfair text-2xl text-primary-dark font-bold">A Legacy of Excellence</h3>
              <p className="text-primary-dark/80 leading-relaxed">
                Founded in 1970, our journey began in a small artisanal workshop where precision met passion. For over five decades, we've been crafting exceptional grooming essentials that elevate the everyday ritual into an art form.
              </p>
              <p className="text-primary-dark/80 leading-relaxed">
                Our commitment to quality is unwavering. Each product is a testament to our heritage, combining time-honored techniques with innovative formulations. We source only the finest ingredients, ensuring every item meets our exacting standards.
              </p>
              <div className="pt-4">
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="font-playfair text-3xl text-primary-dark font-bold">50+</p>
                    <p className="text-primary-dark/70">Years of Excellence</p>
                  </div>
                  <div className="text-center">
                    <p className="font-playfair text-3xl text-primary-dark font-bold">100%</p>
                    <p className="text-primary-dark/70">Natural Ingredients</p>
                  </div>
                  <div className="text-center">
                    <p className="font-playfair text-3xl text-primary-dark font-bold">50K+</p>
                    <p className="text-primary-dark/70">Satisfied Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621607512509-20fb636f8c63?auto=format&fit=crop&q=80"
                alt="Our Heritage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-dark/10" />
            </div>
          </div>
        </LeatherBorder>
      </div>
    </section>
  );
};