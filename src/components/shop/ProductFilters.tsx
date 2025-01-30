import React from 'react';
import { LeatherBorder } from '../ui/LeatherBorder';

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'beard', label: 'Beard Care' },
  { id: 'shaving', label: 'Shaving' },
  { id: 'fragrance', label: 'Fragrance' },
];

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <LeatherBorder>
      <div className="p-4">
        <h2 className="font-playfair text-lg text-primary-dark mb-4">Categories</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full text-left px-3 py-2 rounded transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-dark text-accent-cream'
                  : 'text-primary-dark hover:bg-primary-dark/5'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </LeatherBorder>
  );
};