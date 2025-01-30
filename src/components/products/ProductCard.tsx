import React from 'react';
import { Plus } from 'lucide-react';
import { LeatherBorder } from '../ui/LeatherBorder';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  imageUrl
}) => {
  return (
    <LeatherBorder className="group transition-all duration-500 hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/0 transition-all duration-500" />
      </div>
      <div className="p-8">
        <h3 className="font-playfair text-xl text-primary-dark font-bold mb-2">{title}</h3>
        <p className="text-primary-dark/70 mb-6 leading-relaxed">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-playfair text-xl text-primary-dark">{price}</span>
          <button className="bg-primary-dark text-accent-cream p-2 hover:bg-primary-forest transition-colors duration-300 group-hover:shadow-lg">
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </LeatherBorder>
  );
};