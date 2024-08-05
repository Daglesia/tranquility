"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useMemo, useRef } from "react";
import { randomNormalDistribution } from "@utils/math";
import * as THREE from "three";

const vertexShader = `
attribute float size;
attribute vec3 color;

uniform float uTime;
uniform float uRadius;

varying vec3 vColor;

// Source: https://github.com/dmnsgn/glsl-rotate/blob/main/rotation-3d-y.glsl.js
mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(
    c, 0.0, -s,
    0.0, 1.0, 0.0,
    s, 0.0, c
  );
}


void main() {
  vColor = color;

  float distanceFactor = pow(uRadius - distance(position, vec3(0.0)), 1.5);
  vec3 particlePosition = position;
  // vec3 particlePosition = position * rotation3dY(uTime * 0.3);

  vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  float newSize = 10.0 * sin(abs(size)*10.0 + uTime);

  gl_Position = projectedPosition;
  gl_PointSize = newSize;
}
`

const fragmentShader = `
varying vec3 vColor;
uniform sampler2D uTexture;

void main() {
  gl_FragColor = vec4(vColor, texture2D( uTexture, gl_PointCoord).r);
}

`
const RADIUS_LARGE = 2;
const RADIUS_SMALL = 1;

const CustomGeometryParticles = (props) => {

  const [map] = useLoader(THREE.TextureLoader, [
    "/disk2.png",
  ]);
  const { count } = props;
  const radius = 2;

  // This reference gives us direct access to our points
  const points = useRef();

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(Math.PI) + (Math.PI/2); 

      const aValue = 1;

      let x = aValue * (1-Math.cos(theta))*Math.cos(theta) + randomNormalDistribution(-0.7, 0.2, 1);
      let y =  aValue * (1-Math.cos(theta))*Math.sin(theta) + randomNormalDistribution(-0.7, 0.2, 1);
      let z = randomNormalDistribution(0.5, 1.5, 1);

      positions.set([x, y, z], i * 3);
      console.log(x,y,z, 'woop')
    }
    
    return positions;
  }, [count]);

  const particlesSizes = useMemo(() => {
    const positions = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      positions[i] = randomNormalDistribution(-10,10,1);
    };

    return positions;
  }, [count]);

  const particlesColors = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      const cosinusAlpha = THREE.MathUtils.randFloatSpread(360);
      positions.set([randomNormalDistribution(100, 160, 1)/255
        , randomNormalDistribution(210, 255, 1)/255, randomNormalDistribution(225, 255, 1)/255], i * 3);
    }
    
    return positions;
  }, [count]);

  const uniforms = useMemo(() => ({
    uTime: {
      value: 0.0,
    },
    uRadius: {
      value: radius,
    },
    uTexture: {
      value: map,
    },
    uGlowColor: {value: new THREE.Color(0x0099ff)},
  }), [])

  useFrame((state) => {
    const { clock } = state;

    points.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particlesSizes.length}
          array={particlesSizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particlesColors.length / 3}
          array={particlesColors}
          itemSize={3}
        />
      </bufferGeometry>
      <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        transparent
      />
    </points>
  );
};

const Scene = () => {
  const galaxyRef = useRef();

    //     useFrame(() => {
  //     if (refGroup.current) {
  //         refGroup.current.rotation.z -= 0.0004;
  //     }
  // })
  return (
    <Canvas camera={{ position: [0, 0, 4.0] }}>
      <ambientLight intensity={0.5} />
      <group ref={galaxyRef}>
      <group position={[0, 0, 0]}>
        <CustomGeometryParticles count={2000} />
      </group>
      <group position={[0, 0, 0]} rotation={new THREE.Euler(0, 0, (2 * Math.PI) / 5)}>
        <CustomGeometryParticles count={2000} />
      </group>
      <group position={[0, 0, 0]} rotation={new THREE.Euler(0, 0, (2 * 2 * Math.PI) / 5)}>
        <CustomGeometryParticles count={2000} />
      </group>
      <group position={[0, 0, 0]} rotation={new THREE.Euler(0, 0, (2 * 3 * Math.PI) / 5)}>
        <CustomGeometryParticles count={2000} />
      </group>
      <group position={[0, 0, 0]} rotation={new THREE.Euler(0, 0, (2 * 4 * Math.PI) / 5)}>
        <CustomGeometryParticles count={2000} />
      </group>
      </group>
      <OrbitControls />
      <EffectComposer multisampling={8}>
          <Bloom
            kernelSize={3}
            luminanceThreshold={0}
            luminanceSmoothing={0.8}
            intensity={3}
          />
        </EffectComposer>
    </Canvas>
  );
};


export default Scene;

