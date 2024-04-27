import { defineConfig } from 'dumi';

//github仓库名称
const repo = 'ez-modal-react-book';

const isProd = process.env.NODE_ENV === 'production';

const base = isProd ? `/${repo}/` : '/';
const publicPath = isProd ? `/${repo}/` : '/';

export default defineConfig({
  base,
  publicPath,
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'ez-store',
    logo: undefined,
  },
});
