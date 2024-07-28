"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Cloud from "@/components/Cloud";
import { Galaxy } from "@/components/Galaxy";
import { EffectComposer, Bloom } from "@react-three/postprocessing";


export default function Nebula() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 12],
      }}
    >
      <Suspense fallback={null}>
        {/* <Cloud /> */}
        <Galaxy />
        <EffectComposer multisampling={8}>
          <Bloom
            kernelSize={3}
            luminanceThreshold={0}
            luminanceSmoothing={0.8}
            intensity={10}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
