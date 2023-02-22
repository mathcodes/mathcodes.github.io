import rnGuess from '../images/projects/rnGuess.png'
import cfd from '../images/projects/cfd.png'
import gnco from '../images/projects/gnco.png'
import rnCalc from '../images/projects/rnCalc.png'
import tstodo from '../images/projects/tstodo.png'
import marketing from '../images/projects/marketing.png'

export const projectsData = [
	{
		id: 1,
		title: 'Content For Developers',
		category: 'Open Source',
		img: cfd,
		projectDesc: ' \nOpen-source project created and maintained by me with a growing list of almost 20 contributors. A site with education and learning as a top priority. Utilizing the power of open-source contributors to offer the most diverse collection of learning tools for coding.\n',
		tags: ['React', 'SASS', 'Material UI', 'Open Source'],
		code: 'https://github.com/mathcodes/contentfordevelopers/',
		demo: 'https://www.contentfordevelopers.com/',
		alt: 'react, sass, material ui, open source, content for developers, education, learning, coding, programming'

	},
	{
		id: 2,
		title: 'Gladis & Co',
		category: 'Freelance',
		projectDesc: '\n\n\nFreelance gig to fix issues with website in wordpress. Used advanced Javascript methods and CSS selectors that could find a needle in a haystack to override the entire site.\n',
		tags: ['WordPress', 'JS', 'CSS', 'SSR'],
		code: 'https://www.gladisandco.com',
		demo: 'https://www.gladisandco.com',
		img: gnco,
		alt: 'server-side rendering, wordpress, javascript, css, html, seo, gladis and co'
	},
	{
		id: 3,
		title: 'Numbers Game',
		category: 'Mobile App',
		projectDesc: '\n\n\nReact-Native game built with Expo uses state, logic, and handler functions to provide the computer with the ability to find the answer and call you out if your cheating. \n',
		tags: ['React', 'React Native', 'Expo', 'State', 'expo-status-bar'],
		code: 'https://github.com/mathcodes/react-native-apps/tree/main/SAMPLE%20APPS/rn-numbers/numbers',
		demo: '',
		img: rnGuess,
	},
	{
		id: 4,
		title: 'TypeScript-To-Do',
		category: 'Web App',
		projectDesc: '\n\n\nThis is an advanced to-do list using TypeScript and React. Users have the ability to filter, create, delete, edit and update their notes. Fully responsive and written with clean, easy to understand code!\n',
		tags: ['TypeScript', 'React', 'Bootstrap', 'vite'],
		code: 'https://github.com/mathcodes/typescript-tags-todo/',
		demo: 'https://typescript-tags-todo.vercel.app/',
		img: tstodo,
		alt: 'typescript, react, bootstrap, vite, to-do, todo, tags, filter, create, delete, edit, update, notes, fully responsive, clean, easy to understand code'
	},
	{
		id: 5,
		title: 'iOS & Android Calculator App',
		category: 'Mobile App',
		projectDesc: '\n\n\nUsing TypeScript, Expo, and of React, here we have a full functioning calculator with dark mode!\n',
		tags: ['React Native', 'React', 'Expo', 'TypeScript' ],
		code: 'https://github.com/mathcodes/react-native-apps/tree/main/SAMPLE%20APPS/rn-calculator',
		demo: '',
		img: rnCalc,
		alt: 'react native, react, expo, typescript, calculator, dark mode'
	},
	{
		id: 6,
		title: 'Marketing App Demo',
		category: 'Freelance',
		projectDesc: '\n\n\nLightweight, responsive, and feature rich full stack application with filter searches and modals with small bundle size and scalable architecture with carefully crafted data structures',
		tags: ['TypeScript', 'Tailwind', 'NextJS', 'React'],
		code: 'https://github.com/mathcodes/marketing-app',
		demo: 'https://marketing-app-demo.vercel.app/',
		img: marketing,
		alt: 'typescript, tailwind, nextjs, react, lightweight, responsive, feature rich, full stack, filter searches, modals, small bundle size, scalable architecture, carefully crafted data structures'
	},
]