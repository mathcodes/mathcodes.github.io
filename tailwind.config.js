const colors = require('tailwindcss/colors');

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary-light': '#F7F8FC',
				'secondary-light': '#FFFFFF',
				'ternary-light': '#f6f7f8',
				'bg-primary-light': '#F7F8FC',
				'bg-secondary-light': '#FFFFFF',
				'bg-ternary-light': '#f6f7f8',

				// 'primary-dark': '#0D2438',
				// 'secondary-dark': '#102D44',
				// 'ternary-dark': '#1E3851',
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
	plugins: ['@tailwindcss/forms'],
};
