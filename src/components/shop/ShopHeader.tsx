import React from 'react';
import { Breadcrumb } from '../navigation/Breadcrumb';
import { CartButton } from './header/CartButton';

export const ShopHeader: React.FC = () => {
  return (
    <div className="mb-12">
      <Breadcrumb 
        items={[
          { label: 'Home', path: '/' }, 
          { label: 'Shop', path: '/shop' }
        ]} 
      />
      
      <div className="flex items-center justify-between">
        <h1 className="font-playfair text-4xl md:text-5xl text-accent-cream">
          Our Collection
        </h1>
        <CartButton />
      </div>
    </div>
  );
};