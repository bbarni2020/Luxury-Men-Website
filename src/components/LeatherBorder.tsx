/// For better understanding, I commented out the code. You can remove the comments if you want to use it.

import React from 'react';

interface LeatherBorderProps {
  children: React.ReactNode;
}

export const LeatherBorder: React.FC<LeatherBorderProps> = ({ children }) => {
  return (
    <div className="relative p-8">
      {/* Leather border with stitching effect */}
      <div className="absolute inset-0 border-2 border-accent-gold/20" />
      
      {/* Stitching effect using pseudo-elements and custom border */}
      <div className="absolute inset-[6px] border-[1px] border-dashed border-accent-gold/30" />
      
      {/* Inner content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};