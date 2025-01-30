import React from 'react';

export const LeatherPattern: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-primary-dark">
      {/* Base leather pattern, this is a messy code that's why I commented this */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 48%, rgba(178, 147, 97, 0.1) 49%, rgba(178, 147, 97, 0.1) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(178, 147, 97, 0.1) 49%, rgba(178, 147, 97, 0.1) 51%, transparent 52%)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Diamond stitching pattern */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 45%, rgba(178, 147, 97, 0.2) 46%, rgba(178, 147, 97, 0.2) 54%, transparent 55%),
            linear-gradient(-45deg, transparent 45%, rgba(178, 147, 97, 0.2) 46%, rgba(178, 147, 97, 0.2) 54%, transparent 55%)
          `,
          backgroundSize: '60px 60px',
          filter: 'url(#softBlur)',
        }}
      />

      {/* SVG Filters */}
      <svg className="fixed -z-10 opacity-0 invisible">
        <defs>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="0.5" />
          </filter>
        </defs>
      </svg>

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary-forest/5 to-transparent" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />
    </div>
  );
};