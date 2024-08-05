import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { BufferAttribute, Color, TextureLoader } from "three";

const vertexShader = `uniform float u_time;

varying float vZ;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
  modelPosition.y += sin(modelPosition.x * 5.0 + u_time * 3.0) * 0.1;
  modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.1;
  
  vZ = modelPosition.y;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}`


const fragmentShader = `uniform vec3 u_colorA;
uniform vec3 u_colorB;
uniform sampler2D pointTexture;


void main() {
			vec4 color = texture2D( pointTexture, gl_PointCoord );

			gl_FragColor = color;
}`

function PointsComponent({ positions }) {
  const pointsRef = useRef();
 useEffect(() => {
    if (!pointsRef.current) return;

    pointsRef.current.geometry.setAttribute('position', new BufferAttribute(positions, 3));
  }, [positions]);

  return <primitive ref={pointsRef} attach="points" />;
}

const MovingPlane = () => {
  // // This reference will give us direct access to the mesh
  // const mesh = useRef();

  // const [map] = useLoader(TextureLoader, [
  //   "/disc.png"
  // ]);

  // const uniforms = useMemo(
  //   () => ({
  //     u_time: {
  //       value: 0.0,
  //     },
  //     u_colorA: { value: new Color("#FFE486") },
  //     u_colorB: { value: new Color("#FEB3D9") },
  //     pointTexture: {value: map},
  //   }), []
  // );

  // useFrame((state) => {
  //   const { clock } = state;
  //   mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  // });

  // import * as THREE from 'three';
  // import { useRef } from 'react';
  
  // Define your shaders
  const vertexShader = `
    varying vec3 vPosition;
    void main() {
      vPosition = position;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;
  
  const fragmentShader = `
    varying vec3 vPosition;
    void main() {
      // Example of coloring based on position
      float intensity = dot(vPosition, vec3(0.0, 0.0, 1.0));
      gl_FragColor = vec4(vec3(intensity), 1.0);
    }
  `;
  
  // Inside your component
  const Positions = [...]; // Array of positions for your points
  
  return (
    <Canvas>
      <PointsComponent positions={Positions}>
        <shaderMaterial
          attachObject={['material']}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </PointsComponent>
    </Canvas>
  );
};

const Scene = () => {
  return (
      <MovingPlane />
  );
};


export default Scene;
