/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: '#FFFFFF',
						h1: { color: '#FFFFFF' },
						h2: { color: '#FFFFFF' },
						h3: { color: '#FFFFFF' },
						h4: { color: '#FFFFFF' },
						p: {color: '#FFFFFF'},
						code: {color: '#FFFFFF'},
					},
				},
			}),
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
