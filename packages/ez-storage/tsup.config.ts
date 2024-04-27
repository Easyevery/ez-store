import { defineConfig } from 'tsup';
// https://jamessawyer.github.io/awesome-typescript/lib/tsup/#%E6%89%93%E5%8C%85%E6%A0%BC%E5%BC%8F
export default defineConfig({
  format: 'esm',
  target: 'es2015',
  dts: true,
  clean: true,
});
