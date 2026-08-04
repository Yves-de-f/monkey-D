import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jhengfong-tw.com',
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  build: {
    format: 'file',
  },
  server: {
    host: '127.0.0.1',
    port: 4321,
  },
});
