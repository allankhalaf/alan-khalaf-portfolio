import React from 'react';
import SceneCanvas from './SceneCanvas';

const HeroScene = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <SceneCanvas />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/30 via-transparent to-bg-primary/30" />
    </div>
  );
};

export default HeroScene;