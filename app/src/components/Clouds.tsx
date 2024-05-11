'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Euler } from 'three'
import Cloud from '@/components/Cloud'

function Scene() {
  const clouds = []
  for (let p = 0; p < 50; p++) {
    clouds.push(<Cloud key={p} position={[Math.random() * 800, 500, Math.random() * 500 - 500]} rotation={new Euler(1.16, -0.12, Math.random() * 2 * Math.PI)} />)
  }

  return (
    <>
      <ambientLight color={"#83DEF0"} />
      <fogExp2 color={"#83DEF0"} density={0.002} />
      {clouds}
    </>
  )
}

export default function Nebula() {
  return (
    <Canvas camera={{
      position: [0, 0, 1],
      rotation: [1.16, -0.12, 0.27],
    }}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
