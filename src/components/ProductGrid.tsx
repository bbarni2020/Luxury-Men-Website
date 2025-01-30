import React from 'react';
import { ProductCard } from './ProductCard';

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
  },
];

export const ProductGrid: React.FC = () => {
  return (
    <section className="section-spacing bg-accent-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair text-primary-dark text-center mb-6">
          Curated Excellence
        </h2>
        <div className="decorative-divider" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};