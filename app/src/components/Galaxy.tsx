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
import { TentacleParticle } from "@/components/TentacleParticle";

export const Galaxy = () => {
  const refGroup = useRef<Group<Object3DEventMap>>(null);

  //     useFrame(() => {
  //     if (refGroup.current) {
  //         refGroup.current.rotation.z -= 0.0004;
  //     }
  // })

  return (
    <>
      <group ref={refGroup}>
        <TentacleParticle
          rotation={new Euler(0, 0, 0)}
          position={new Vector3(0, 0, 0)}
        />
        <TentacleParticle
          rotation={new Euler(0, 0, (2 * Math.PI) / 5)}
          position={new Vector3(0, -1.5, 0)}
        />
        <TentacleParticle
          rotation={new Euler(0, 0, (2 * 2 * Math.PI) / 5)}
          position={new Vector3(1.5, -2, 0)}
        />
        <TentacleParticle
          rotation={new Euler(0, 0, (2 * 3 * Math.PI) / 5)}
          position={new Vector3(2.5, -0.6, 0)}
        />
        <TentacleParticle
          rotation={new Euler(0, 0, (2 * 4 * Math.PI) / 5)}
          position={new Vector3(1, 0.6, 0)}
        />
      </group>
    </>
  );
};
