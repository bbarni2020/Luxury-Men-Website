import React from 'react';
import { ContentBox } from '../ContentBox';
import { CartList } from './CartList';
import { CartSummary } from './CartSummary';
import { ShoppingBag } from 'lucide-react';

export const CartPage: React.FC = () => {
  return (
    <section className="min-h-screen py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ShoppingBag className="w-12 h-12 text-accent-gold mx-auto mb-6" />
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-accent-cream mb-4">
            Your Collection
          </h1>
          <div className="w-24 h-px bg-accent-gold/40 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ContentBox>
              <CartList />
            </ContentBox>
          </div>
          <div className="lg:col-span-1">
            <ContentBox>
              <CartSummary />
            </ContentBox>
          </div>
        </div>
      </div>
    </section>
  );
};