import { useLoader, useFrame } from "@react-three/fiber";
import { BufferGeometry, Group, Mesh, NormalBufferAttributes, Object3DEventMap, PointsMaterial, TextureLoader } from "three";
import { useRef } from "react";

const particlesCount = 1000;
const particlePositions = new Float32Array(particlesCount * 3);

const RADIUS_LARGE = 6;
const RADIUS_SMALL = 4;

// https://stackoverflow.com/a/49434653
const randomNormalDistribution = (min: number, max: number, skew: number) => {
    let u = 0, v = 0;
    while(u === 0) u = Math.random()
    while(v === 0) v = Math.random()
    let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
    
    num = num / 10.0 + 0.5
    if (num > 1 || num < 0) 
        // resample between 0 and 1 if out of range
        num = randomNormalDistribution(min, max, skew)
    
    else {
      num = Math.pow(num, skew)
      num *= max - min 
      num += min
    }
    return num
}

for (let i = 0; i < particlesCount; i++) {
    const radius = randomNormalDistribution(RADIUS_SMALL, RADIUS_LARGE, 1);
    const xValue = randomNormalDistribution(-radius, 0, 3);

    const yValue = Math.sqrt(Math.pow(radius, 2) - Math.pow(xValue, 2))

  const i3 = i * 3;

  console.log(xValue, yValue, radius, 'woop')

  particlePositions[i3] = xValue + 6;
  particlePositions[i3 + 1] = yValue - 2;
  particlePositions[i3 + 2] = 6;
}

export const Particles = () => {
    const [colorMap] = useLoader(TextureLoader, ["/disc.png"]);
    const refGroup = useRef<Group<Object3DEventMap>>(null);

        useFrame(() => {
        if (refGroup.current) {
            refGroup.current.rotation.z -= 0.0004;
        }
    })

  return (
    <>
    <group ref={refGroup}>
    <points>
          <bufferGeometry>
              <bufferAttribute
                  attach='attributes-position'
                  count={particlesCount}
                  itemSize={3}
                  array={particlePositions} />
          </bufferGeometry>
          <pointsMaterial
              size={0.04}
              color={"cyan"}
              transparent
              map={colorMap} />
      </points><points rotation={[0,0,2*Math.PI / 5]} position={[0,-1.5,0]}>
              <bufferGeometry>
                  <bufferAttribute
                      attach='attributes-position'
                      count={particlesCount}
                      itemSize={3}
                      array={particlePositions} />
              </bufferGeometry>
              <pointsMaterial
                  size={0.04}
                  color={"cyan"}
                  transparent
                  map={colorMap} />
          </points><points rotation={[0,0,2*2*Math.PI / 5]} position={[1.5,-2,0]}>
              <bufferGeometry>
                  <bufferAttribute
                      attach='attributes-position'
                      count={particlesCount}
                      itemSize={3}
                      array={particlePositions} />
              </bufferGeometry>
              <pointsMaterial
                  size={0.04}
                  color={"cyan"}
                  transparent
                  map={colorMap} />
          </points><points rotation={[0,0,2*3*Math.PI / 5]} position={[2,0.3,0]}>
              <bufferGeometry>
                  <bufferAttribute
                      attach='attributes-position'
                      count={particlesCount}
                      itemSize={3}
                      array={particlePositions} />
              </bufferGeometry>
              <pointsMaterial
                  size={0.04}
                  color={"cyan"}
                  transparent
                  map={colorMap} />
          </points><points rotation={[0,0,2*4*Math.PI / 5]} position={[1,0.6,0]}>
              <bufferGeometry>
                  <bufferAttribute
                      attach='attributes-position'
                      count={particlesCount}
                      itemSize={3}
                      array={particlePositions} />
              </bufferGeometry>
              <pointsMaterial
                  size={0.04}
                  color={"cyan"}
                  transparent
                  map={colorMap} />
          </points>
          </group>
          </>
  );
};