import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei';

const FloatingObjects = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.8} floatIntensity={2}>
        <Sphere args={[1.2, 64, 64]} position={[-4, 1.5, -3]}>
          <MeshDistortMaterial
            color="#6ea8fe"
            transparent
            opacity={0.5}
            distort={0.3}
            speed={2}
            roughness={0.2}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere args={[0.7, 32, 32]} position={[4, -1, -4]}>
          <MeshDistortMaterial
            color="#30c7b5"
            transparent
            opacity={0.4}
            distort={0.25}
            speed={1.5}
            roughness={0.3}
          />
        </Sphere>
      </Float>

      <Float speed={1} rotationIntensity={1.5} floatIntensity={1}>
        <Torus args={[0.9, 0.25, 16, 32]} position={[0, 2.5, -5]} rotation={[Math.PI / 4, 0, 0]}>
          <meshStandardMaterial
            color="#f6c56f"
            transparent
            opacity={0.3}
            emissive="#f6c56f"
            emissiveIntensity={0.2}
          />
        </Torus>
      </Float>

      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2}>
        <Box args={[0.6, 0.6, 0.6]} position={[-2.5, -2, -2]} rotation={[0.5, 0.5, 0]}>
          <meshStandardMaterial
            color="#ff6b6b"
            transparent
            opacity={0.3}
            emissive="#ff6b6b"
            emissiveIntensity={0.15}
          />
        </Box>
      </Float>

      {[...Array(12)].map((_, i) => (
        <Float key={i} speed={0.8 + Math.random() * 0.5} floatIntensity={0.3 + Math.random() * 0.3}>
          <Sphere args={[0.08 + Math.random() * 0.12, 16, 16]} position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 5 - 3
          ]}>
            <meshStandardMaterial
              color={['#6ea8fe', '#30c7b5', '#f6c56f', '#ff6b6b'][i % 4]}
              transparent
              opacity={0.5}
              emissive={['#6ea8fe', '#30c7b5', '#f6c56f', '#ff6b6b'][i % 4]}
              emissiveIntensity={0.3}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
};

export default FloatingObjects;