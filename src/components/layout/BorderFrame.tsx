import React from 'react';
import { CornerDecoration } from './CornerDecoration';

export const BorderFrame: React.FC = () => {
  return (
    <div className="fixed inset-8 pointer-events-none z-50">
      <CornerDecoration position="top-left" />
      <CornerDecoration position="top-right" />
      <CornerDecoration position="bottom-left" />
      <CornerDecoration position="bottom-right" />
    </div>
  );
};