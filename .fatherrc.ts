import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: { input: './packages/ez-storage', output: 'dist/esm' },
});
