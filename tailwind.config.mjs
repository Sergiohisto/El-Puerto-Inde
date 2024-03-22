/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#111827',
					hover: '#343e4a'
				},
				secundary: '#343e4a',
				accent: {
					DEFAULT: '#cda274',
					secundary: '#cda274',
					hover: '#343e4a'
				},
			}
		},
	},
	plugins: [],
}
