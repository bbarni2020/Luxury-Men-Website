import { useMemo } from 'react';
import { Product } from '../types/product';
import { products } from '../data/products';

export function useProducts(category: string, sortBy: string) {
  const filteredProducts = useMemo(() => {
    let filtered = category === 'all' 
      ? products 
      : products.filter(p => p.category === category);

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'popular':
          return b.popularity - a.popularity;
        default:
          return b.id - a.id;
      }
    });
  }, [category, sortBy]);

  return { products, filteredProducts };
}