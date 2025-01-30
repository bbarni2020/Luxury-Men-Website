import React from 'react';
import { cn } from '../../utils/classNames';

type LinePosition = 'top' | 'right' | 'bottom' | 'left';

interface StitchingLineProps {
  position: LinePosition;
}

const positionClasses: Record<LinePosition, string> = {
  top: 'top-0 left-16 right-16 h-[2px]',
  right: 'top-16 bottom-16 right-0 w-[2px] rotate-90',
  bottom: 'bottom-0 left-16 right-16 h-[2px]',
  left: 'top-16 bottom-16 left-0 w-[2px] -rotate-90'
};

export const StitchingLine: React.FC<StitchingLineProps> = ({ position }) => {
  return (
    <div 
      className={cn(
        'absolute bg-accent-gold/30',
        positionClasses[position]
      )}
    >
      <div className="absolute inset-0 border-dashed border-t border-accent-gold/20" />
    </div>
  );
};