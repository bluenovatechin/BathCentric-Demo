import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const isBuild = command === 'build';
  const base = isBuild ? '/BathCentric/' : '/';

  return {
    plugins: [
      react(),
      {
        name: 'base-path-replace',
        enforce: 'pre',
        transform(code, id) {
          if (id.includes('node_modules')) return;
          if (isBuild && (id.endsWith('.jsx') || id.endsWith('.js'))) {
            return {
              code: code.replace(/(['"])\/images\//g, `$1${base}images/`),
              map: null
            };
          }
        }
      }
    ],
    base,
    server: {
      port: 5173,
      open: false
    }
  };
});
