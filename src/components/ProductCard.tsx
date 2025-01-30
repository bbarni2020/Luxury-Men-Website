import React from 'react';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, description, price, imageUrl }) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-102 shadow-[0_2px_10px_rgba(0,0,0,0.08)]">
      <div className="aspect-square overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6 md:p-8 border border-accent-gold/20">
        <h3 className="font-playfair text-xl font-bold mb-2 text-primary-dark">{title}</h3>
        <p className="text-primary-dark/70 mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-playfair text-primary-dark">{price}</span>
          <button className="bg-primary-dark text-accent-cream p-2 rounded-full hover:bg-primary-forest transition-colors duration-300">
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};