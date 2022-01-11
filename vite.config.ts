import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgrPlugin from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  resolve: {
    // eslint-disable-next-line no-undef
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  plugins: [
    reactRefresh(),
    svgrPlugin({
      svgrOptions: {
        icon: true
        // ...svgr options (https://react-svgr.com/docs/options/)
      }
    })
  ]
});
