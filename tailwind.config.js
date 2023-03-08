const colors = require('tailwindcss/colors');

module.exports = {
	mode: 'jit',
	purge: [
		'./public/**/*.html',
		'./src/**/*.{js,jsx,ts,tsx,vue}',
	],
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.html'],
	darkMode: 'class',
	theme: {
		debugScreens: {
      selector: '.debug-screens',
			style: {
        backgroundColor: '#C0FFEE',
        color: 'black',
      },
			position: ['bottom', 'left'],
    },
		active: {
			bgColor: 'primary-light',
		},
		extend: {
			colors: {
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',
				'bg-primary-light': '#F7F8FC',
				'bg-secondary-light': '#FFFFFF',
				'bg-ternary-light': '#f6f7f8',
				'primary-dark': '#242424',
				'secondary-dark': '#292929',
				'ternary-dark': '#383838',
				'bg-primary-dark': '#242424',
				'bg-secondary-dark': '#292929',
				'bg-ternary-dark': '#383838',
			},
			container: {
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '5rem',
					xl: '6rem',
					'2xl': '8rem',
				},
			},
		},
	},
	variants: {
		extend: { opacity: ['disabled'] },
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('tailwindcss-debug-screens'),
		require('@tailwindcss/jit'),
		require('@tailwindcss/animations'),
	],
};
