"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

function Scene() {
  return (
    <>
    </>
  );
}

export default function CloudCluster() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 1],
        rotation: [1.16, -0.12, 0.27],
      }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
