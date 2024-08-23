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

  vec3 particlePosition = position;
  // vec3 particlePosition = position * rotation3dY(uTime * 0.3);

  vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  float newSize = 7.0 * sin(abs(size)*10.0 + uTime);

  gl_Position = projectedPosition;
  gl_PointSize = newSize;
}