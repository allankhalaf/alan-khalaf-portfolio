import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import FloatingObjects from './FloatingObjects';
import ParticleField from './ParticleField';

const SceneCanvas = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#6ea8fe" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#30c7b5" />

          <FloatingObjects />
          <ParticleField />

          <Stars radius={100} depth={50} count={2000} factor={4} saturation={0.5} fade speed={1} />

          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SceneCanvas;
