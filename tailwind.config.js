/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				linear: 'linear-gradient(180deg, #1E3448 99.99%, rgba(30, 52, 72, 0) 100%)',
			},
			colors: {
				base: 'rgba(0, 101, 254, 1)',
				'text-color': 'rgba(20, 20, 20, 1)',
			},
		},
	},
	plugins: [],
};
