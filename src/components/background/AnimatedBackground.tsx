import React from 'react';
import { Canvas } from '@react-three/fiber';
import { BoxGrid } from './BoxGrid';

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-primary-dark">
      <Canvas
        camera={{ position: [0, 8, 0], fov: 75, rotation: [-Math.PI / 2, 0, 0] }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <BoxGrid />
        <fog attach="fog" args={['#10443E', 5, 15]} />
      </Canvas>
      <div className="absolute inset-0 bg-primary-dark/50 backdrop-blur-[2px]" />
    </div>
  );
};