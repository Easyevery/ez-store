import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  root: './demo',
  server: {
    port: 6060,
  },
  plugins: [react()],
  resolve: {
    alias: {
      // 如果 ez-store 是一个模块，且位于 src 目录下
      '@easyevery/ez-store': path.resolve(__dirname, 'packages/ez-storage/src'),
      // 如果你想要匹配任意路径，可以使用通配符，但需要确保正确映射
      // 注意：Vite 不直接支持这种通配符配置，所以需要使用插件如vite-plugin-alias
      // '@': path.resolve(__dirname, 'src'), // 通常的 @ 别名配置
    },
  },
});
