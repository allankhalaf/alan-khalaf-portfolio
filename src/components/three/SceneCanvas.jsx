import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import FloatingObjects from './FloatingObjects';

const ParticleField = () => {
  return null;
};

const SceneCanvas = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#6ea8fe" />
          <pointLight position={[-10, -10, -10]} intensity={0.6} color="#30c7b5" />
          <pointLight position={[0, 5, -5]} intensity={0.4} color="#f6c56f" />

          <FloatingObjects />
          <ParticleField />

          <Stars radius={120} depth={60} count={3000} factor={5} saturation={0.5} fade speed={0.8} />

          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2.2}
            minPolarAngle={Math.PI / 2.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default SceneCanvas;