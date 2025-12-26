
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

// Fix: Augment the JSX namespace to include React Three Fiber intrinsic elements.
// This resolves the "Property '...' does not exist on type 'JSX.IntrinsicElements'" errors
// by ensuring that both the global JSX namespace and the React module's JSX namespace 
// are correctly extended with ThreeElements from @react-three/fiber.
declare global {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
  // Fix: Modern React (18+) often looks for intrinsic elements within the React.JSX namespace.
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {}
    }
  }
}

const Particles = ({ count = 2000 }) => {
  const mesh = useRef<THREE.Points>(null!);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.05;
      mesh.current.rotation.x = time * 0.02;
      
      // Wave animation logic
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const x = positions[i * 3];
        const z = positions[i * 3 + 2];
        positions[i * 3 + 1] = Math.sin(x + time) * 0.2 + Math.cos(z + time) * 0.2;
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    // Fix: Intrinsic elements are now recognized through the global namespace augmentation.
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#D4AF37" transparent opacity={0.6} />
    </points>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 bg-transparent">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        {/* Fix: Intrinsic element recognized through augmentation */}
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
