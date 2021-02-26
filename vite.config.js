import { VitePluginNode } from 'vite-plugin-node';
/**
 * @type {import('vite').UserConfig}
 */
const config = {
  // ...
  plugins: [
    ...VitePluginNode({
      server: 'nest',
      tsCompiler: 'swc',
      appPath: './src/main.ts',
      port: 3000,
    }),
  ],
};

export default config;
