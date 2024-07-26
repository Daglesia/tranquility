'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Euler } from 'three'
import Cloud from '@/components/Cloud'

function Scene() {
  const clouds = []
  clouds.push(<Cloud position={[5,0,0]} />)

  return (
    <>
      {clouds}
    </>
  )
}

export default function Nebula() {
  return (
    <Canvas camera={{
      position: [0, 0, 10],
    }}>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}