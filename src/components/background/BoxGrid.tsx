import React from 'react';
import { Box } from './Box';

export const BoxGrid: React.FC = () => {
  const gridSize = 5;
  const spacing = 2;
  const boxes = [];

  for (let x = -gridSize; x <= gridSize; x++) {
    for (let z = -gridSize; z <= gridSize; z++) {
      boxes.push(
        <Box
          key={`${x}-${z}`}
          position={[x * spacing, 0, z * spacing]}
          rotation={[Math.PI * 0.1, 0, 0]}
          scale={0.5}
        />
      );
    }
  }

  return <>{boxes}</>;
};