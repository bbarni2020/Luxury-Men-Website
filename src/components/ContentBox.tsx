import React from 'react';
import { LeatherBorder } from './LeatherBorder';

interface ContentBoxProps {
  children: React.ReactNode;
  className?: string;
}

export const ContentBox: React.FC<ContentBoxProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      <LeatherBorder>
        <div className="bg-primary-forest/10 backdrop-blur-sm p-8">
          {children}
        </div>
      </LeatherBorder>
    </div>
  );
};