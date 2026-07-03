import React from 'react';
import SceneCanvas from './SceneCanvas';

const HeroScene = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <SceneCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />
    </div>
  );
};

export default HeroScene;
