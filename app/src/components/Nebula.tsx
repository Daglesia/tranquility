'use client'

import { Suspense } from 'react'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three'

function Scene() {
  const colorMap = useLoader(TextureLoader, '/smoke.png')

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
        <planeGeometry args={[32, 32, 32]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </>
  )
}

export default function Nebula() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
