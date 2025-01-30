/// For better understanding, I commented out the code. You can remove the comments if you want to use it.

import React from 'react';

interface LeatherBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const LeatherBorder: React.FC<LeatherBorderProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Main leather border */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-accent-cream rounded-sm" />
        
        {/* Leather texture overlay */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
               backgroundRepeat: 'repeat'
             }} />
      </div>

      {/* Stitching effect */}
      <div className="absolute inset-[3px] border-[1px] border-primary-dark/10 rounded-sm" />
      <div className="absolute inset-[6px] border-[1px] border-dashed border-primary-dark/20 rounded-sm" />

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
};