import React from 'react';
import { LeatherPattern } from './LeatherPattern';

export const MinimalistBackground: React.FC = () => {
  return (
    <div className="fixed inset-0">
      <LeatherPattern />
      <div className="absolute inset-0 bg-primary-dark/50 backdrop-blur-[1px]" />
    </div>
  );
};