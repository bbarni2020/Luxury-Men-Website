import React from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';

interface BoxProps {
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: number;
}

export const Box: React.FC<BoxProps> = ({ 
  position, 
  rotation = [0, 0, 0], 
  scale = 1 
}) => {
  const meshRef = React.useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.1 + rotation[0];
      meshRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.1 + rotation[1];
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#32745C"
        metalness={0.8}
        roughness={0.2}
        wireframe
      />
    </mesh>
  );
};