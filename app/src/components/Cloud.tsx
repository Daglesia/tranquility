import { useLoader, useFrame, Vector3 } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader, Mesh, BufferGeometry, MeshLambertMaterial, Euler } from "three";

export interface CloudProps {
    position: Vector3,
}

export default function Cloud({ position }: CloudProps) {
    const [colorMap, alphaMap] = useLoader(TextureLoader, ["/texture.png",'/smoke.png']);
    const refMesh = useRef<Mesh<BufferGeometry, MeshLambertMaterial>>(null);

    useFrame(() => {
        if (refMesh.current) {
            refMesh.current.rotation.z += 0.0004;
        }
    })

    return <>
        <mesh ref={refMesh} position={position} rotation={[-0.2,0,0]}>
            <planeGeometry args={[10, 10]} />
            <meshBasicMaterial alphaMap={alphaMap} map={colorMap} transparent={true} opacity={1} />
        </mesh>
    </>
}