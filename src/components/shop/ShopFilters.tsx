import React from 'react';
import { LeatherBorder } from '../ui/LeatherBorder';
import { CategoryFilter } from './filters/CategoryFilter';
import { SortFilter } from './filters/SortFilter';

interface ShopFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export const ShopFilters: React.FC<ShopFiltersProps> = ({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <LeatherBorder className="mb-8">
      <div className="p-4 bg-accent-cream flex items-center justify-between">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
        <SortFilter value={sortBy} onChange={onSortChange} />
      </div>
    </LeatherBorder>
  );
};