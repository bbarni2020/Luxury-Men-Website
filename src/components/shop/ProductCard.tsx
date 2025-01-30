import React from 'react';
import { Plus } from 'lucide-react';
import { LeatherBorder } from '../ui/LeatherBorder';
import { useCart } from '../../hooks/useCart';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <LeatherBorder className="group transition-all duration-500 hover:shadow-xl">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary-dark/20 group-hover:bg-primary-dark/0 transition-all duration-500" />
      </div>
      <div className="p-8 bg-accent-cream">
        <h3 className="font-playfair text-xl text-primary-dark font-bold mb-2">
          {product.name}
        </h3>
        <p className="text-primary-dark/70 mb-6 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-playfair text-xl text-primary-dark">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-primary-dark text-accent-cream p-2 hover:bg-primary-forest transition-colors duration-300 group-hover:shadow-lg flex items-center gap-2"
            aria-label={`Add ${product.name} to cart`}
          >
            <Plus className="w-6 h-6" />
          </button>
        </div>
      </div>
    </LeatherBorder>
  );
};