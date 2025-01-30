//For better understanding, I commented this one too


import React from 'react';
import { cn } from '../../utils/classNames';

type CornerPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface CornerDecorationProps {
  position: CornerPosition;
}

const positionClasses: Record<CornerPosition, string> = {
  'top-left': 'top-0 left-0',
  'top-right': 'top-0 right-0 rotate-90',
  'bottom-left': 'bottom-0 left-0 -rotate-90',
  'bottom-right': 'bottom-0 right-0 rotate-180'
};

export const CornerDecoration: React.FC<CornerDecorationProps> = ({ position }) => {
  return (
    <div 
      className={cn(
        'absolute w-16 h-16 transition-opacity duration-500',
        positionClasses[position]
      )}
    >
      {/* Primary border */}
      <div className="absolute inset-0 border-l-2 border-t-2 border-accent-gold/30" />
      
      {/* Stitching effect */}
      <div className="absolute inset-[3px] border-l border-t border-dashed border-accent-gold/20" />
      
      {/* Inner accent line */}
      <div className="absolute inset-[6px] border-l border-t border-accent-gold/10" />
    </div>
  );
};