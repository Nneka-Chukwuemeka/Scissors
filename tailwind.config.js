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
				primary: 'rgba(0, 101, 254, 1)',
				'text-color': 'rgba(20, 20, 20, 1)',
				'icon-color': 'rgba(50, 132, 255, 0.13)',
				'desc-color': 'var(--text-color-main-text, #141414);',
				border: 'rgba(17, 34, 50, 1), rgba(77, 107, 136, 1)',
			},
		},
	},
	plugins: [],
};
