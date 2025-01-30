import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ProductSection } from '../components/sections/ProductSection';
import { OurStorySection } from '../components/sections/OurStorySection';
import { TestimonialSection } from '../components/sections/TestimonialSection';
import { ShopNowButton } from '../components/shop/ShopNowButton';

export const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <div className="relative z-10 py-12 text-center">
        <ShopNowButton />
      </div>
      <ProductSection />
      <OurStorySection />
      <TestimonialSection />
    </>
  );
};