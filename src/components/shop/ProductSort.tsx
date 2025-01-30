import React from 'react';
import { LeatherBorder } from '../ui/LeatherBorder';

interface ProductSortProps {
  value: string;
  onChange: (value: string) => void;
}

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'popular', label: 'Most Popular' },
];

export const ProductSort: React.FC<ProductSortProps> = ({ value, onChange }) => {
  return (
    <LeatherBorder>
      <div className="p-4">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent border-none text-primary-dark focus:ring-0"
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </LeatherBorder>
  );
};