// src/components/ARModelView.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';


const ARModelView = () => {
  return (
    
      <Canvas>
        <axesHelper/>
        <OrbitControls/>
          <AnimatedBox />
          
        
      </Canvas>
  );
};

export default ARModelView;
