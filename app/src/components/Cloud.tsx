import { useLoader, useFrame, Vector3 } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader, Mesh, BufferGeometry, MeshLambertMaterial, Euler } from "three";

export interface CloudProps {
    position: Vector3,
    rotation: Euler,
}

export default function Cloud({ position, rotation }: CloudProps) {
    const colorMap = useLoader(TextureLoader, '/smoke.png');
    const refMesh = useRef<Mesh<BufferGeometry, MeshLambertMaterial>>(null);

    useFrame(() => {
        if (refMesh.current) {
            refMesh.current.rotation.z += 0.001;
        }
    })

    return <>
        <mesh ref={refMesh} position={position} rotation={rotation}>
            <planeGeometry args={[500, 500]} />
            <meshLambertMaterial map={colorMap} transparent={true} opacity={0.55} />
        </mesh>
    </>
}
