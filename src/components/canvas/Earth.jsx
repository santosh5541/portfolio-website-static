import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

function Earth() {
  // PUBLIC_URL is "" in dev, or your "homepage" in prod
  const url = `${process.env.PUBLIC_URL}/planet/scene.gltf`;
  const { scene } = useGLTF(url);
  return (
    <primitive
      object={scene}
      scale={3}
      position-y={0}
      rotation-y={0}
    />
  );
}

export default function EarthCanvas() {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
