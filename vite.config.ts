import { defineConfig } from 'vite';
//import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig(({ mode }) => ({
  ...(mode === 'development' && {
    ssr: {
      external: ['@mantine/core','@mantine/dates','@mantine/hooks'],
    },
  }),
  //plugins: [vanillaExtractPlugin({ emitCssInSsr: true }), stylexPlugin()],
}));
