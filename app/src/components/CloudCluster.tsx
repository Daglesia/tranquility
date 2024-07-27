'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Euler } from 'three'
import Cloud from '@/components/Cloud'
import { Particles } from './Particles'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

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
        {/* <Cloud position={[5,0,0]} /> */}
        <Particles/>
        <EffectComposer multisampling={8}>
            <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
            
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}