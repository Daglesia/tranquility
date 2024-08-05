import { useLoader, useFrame } from "@react-three/fiber";
import {
  BufferGeometry,
  Euler,
  Group,
  Mesh,
  NormalBufferAttributes,
  Object3DEventMap,
  PointsMaterial,
  TextureLoader,
  Vector3,
} from "three";
import { useRef } from "react";

export interface TentacleParticleProps {
  position: Vector3;
  rotation: Euler;
}

const particlesCount = 1000;
const particlePositions = new Float32Array(particlesCount * 3);
const uvPositions = new Float32Array(particlesCount * 3);
const particleSizes = new Float32Array(particlesCount);

const RADIUS_LARGE = 6;
const RADIUS_SMALL = 4;

// https://stackoverflow.com/a/49434653
const randomNormalDistribution = (min: number, max: number, skew: number) => {
  let u = 0,
    v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

  num = num / 10.0 + 0.5;
  if (num > 1 || num < 0)
    // resample between 0 and 1 if out of range
    num = randomNormalDistribution(min, max, skew);
  else {
    num = Math.pow(num, skew);
    num *= max - min;
    num += min;
  }
  return num;
};

for (let i = 0; i < particlesCount; i++) {
  const radius = randomNormalDistribution(RADIUS_SMALL, RADIUS_LARGE, 1);
  const xValue = randomNormalDistribution(-radius, RADIUS_SMALL-0.2, 3);

  const yValue = Math.sqrt(Math.pow(radius, 2) - Math.pow(xValue, 2));

  const i3 = i * 3;

  particlePositions[i3] = xValue + 6;
  particlePositions[i3 + 1] = yValue - 2;
  particlePositions[i3 + 2] = 6;

  const cosinusAlpha = yValue/radius;

  uvPositions[i3] = (244 - (255*cosinusAlpha))/255;
  uvPositions[i3 + 1] = (244 - (255*cosinusAlpha))/255;
  uvPositions[i3 + 2] = 174/255;
}

// in other words, tenticle.
export const TentacleParticle = ({
  position,
  rotation,
}: TentacleParticleProps) => {
  const [colorMap, alphaMap] = useLoader(TextureLoader, [
    "/gradient.png",
    "/disk2.png",
  ]);

  console.log(colorMap)

  const pointsRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime
    //particlePositions.forEach((_p, i) => (particlePositions[i] += Math[i % 2 ? 'sin' : 'cos'](1 * i + t) / 20000))
    // for (let i = 0; i < particlesCount; i++) {
    //   const i3 = i * 3;

    //   particlePositions[i3 + 2] += Math[i % 2 ? 'sin' : 'cos'](1 * i + t) / 1000;
    // } 
    // pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <>
      <points ref={pointsRef} rotation={rotation} position={position}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesCount}
            itemSize={3}
            array={particlePositions}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particlesCount}
            itemSize={3}
            array={uvPositions}
          />
          <bufferAttribute
            attach="attributes-size"
            count={particlesCount}
            itemSize={1}
            array={particleSizes}
          />
        </bufferGeometry>
        <pointsMaterial
                transparent
                vertexColors
                sizeAttenuation={false}
                depthWrite={false}
                toneMapped={false}
          alphaMap={alphaMap}
        />
      </points>
    </>
  );
};
