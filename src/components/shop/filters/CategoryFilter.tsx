import React from 'react';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'beard', label: 'Beard Care' },
  { id: 'shaving', label: 'Shaving' },
  { id: 'fragrance', label: 'Fragrance' },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex items-center gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 transition-colors ${
            selectedCategory === category.id
              ? 'bg-primary-dark text-accent-cream'
              : 'text-primary-dark hover:bg-primary-dark/5'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};