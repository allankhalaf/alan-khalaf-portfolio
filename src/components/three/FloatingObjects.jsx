import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei';

const FloatingObjects = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 64, 64]} position={[-3, 1, -2]}>
          <MeshDistortMaterial
            color="#6ea8fe"
            transparent
            opacity={0.6}
            distort={0.4}
            speed={2}
            roughness={0.2}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere args={[0.6, 32, 32]} position={[3, -1, -3]}>
          <MeshDistortMaterial
            color="#30c7b5"
            transparent
            opacity={0.5}
            distort={0.3}
            speed={1.5}
            roughness={0.3}
          />
        </Sphere>
      </Float>

      <Float speed={1} rotationIntensity={2} floatIntensity={1}>
        <Torus args={[0.8, 0.2, 16, 32]} position={[0, 2, -4]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial
            color="#f6c56f"
            transparent
            opacity={0.4}
            emissive="#f6c56f"
            emissiveIntensity={0.3}
          />
        </Torus>
      </Float>

      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
        <Box args={[0.5, 0.5, 0.5]} position={[-2, -2, -1]} rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial
            color="#ff6b6b"
            transparent
            opacity={0.4}
            emissive="#ff6b6b"
            emissiveIntensity={0.2}
          />
        </Box>
      </Float>

      {[...Array(8)].map((_, i) => (
        <Float key={i} speed={1 + Math.random()} floatIntensity={0.5 + Math.random()}>
          <Sphere args={[0.1 + Math.random() * 0.15, 16, 16]} position={[
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4 - 2
          ]}>
            <meshStandardMaterial
              color={['#6ea8fe', '#30c7b5', '#f6c56f', '#ff6b6b'][i % 4]}
              transparent
              opacity={0.6}
              emissive={['#6ea8fe', '#30c7b5', '#f6c56f', '#ff6b6b'][i % 4]}
              emissiveIntensity={0.5}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
};

export default FloatingObjects;
