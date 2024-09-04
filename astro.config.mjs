import { defineConfig } from 'astro/config';
import { VitePlugin } from 'vite-plugin-vue2';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	vite: {
		build: {
			minify: 'esbuild',
		},
		plugins: [VitePlugin()]
	},
	site: 'https://quantiniumx.github.io/',
	integrations: [mdx(), sitemap(), tailwind()],
});
