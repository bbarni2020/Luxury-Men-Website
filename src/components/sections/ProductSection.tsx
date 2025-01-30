import React from 'react';
import { ProductCard } from '../products/ProductCard';

const products = [
  {
    title: "Gentleman's Beard Oil",
    description: "Premium blend of natural oils for impeccable beard care",
    price: "$48.00",
    imageUrl: "https://images.unsplash.com/photo-1627875777089-d32f1127e9ff?auto=format&fit=crop&q=80"
  },
  {
    title: "Royal Shaving Cream",
    description: "Luxurious cream for the smoothest shaving experience",
    price: "$35.00",
    imageUrl: "https://images.unsplash.com/photo-1601612628452-9e99ced43524?auto=format&fit=crop&q=80"
  },
  {
    title: "Heritage Cologne",
    description: "Timeless fragrance with sophisticated woody notes",
    price: "$89.00",
    imageUrl: "https://images.unsplash.com/photo-1615160460367-dcccd27e11ad?auto=format&fit=crop&q=80"
  }
];

export const ProductSection: React.FC = () => {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-accent-cream text-center mb-4">
          Curated Excellence
        </h2>
        <div className="w-24 h-px bg-accent-gold/40 mx-auto mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};