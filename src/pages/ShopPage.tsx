import React, { useState } from 'react';
import { ProductGrid } from '../components/shop/ProductGrid';
import { ShopHeader } from '../components/shop/ShopHeader';
import { ShopFilters } from '../components/shop/ShopFilters';
import { useProducts } from '../hooks/useProducts';

export const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');
  const { filteredProducts } = useProducts(selectedCategory, sortBy);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <ShopHeader />
        <ShopFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};