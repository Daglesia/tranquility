/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  webpack: (config) => {
    return Object.assign({}, config, {
      module: {
        rules: [
          ...config.module.rules,
          {
            test: /\.(glsl)$/,
            use: ['ts-shader-loader'],
          },
        ],
      },
    });
  },
};

export default nextConfig;
