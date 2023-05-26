import scb from '../assets/svg/projects/scb.svg'
import cfd from '../assets/svg/projects/cfd.svg'
import keys from '../assets/svg/projects/keys.png'
import gnco from '../assets/img/gnco.png'
import scical from '../assets/svg/projects/scical.png'
import tstodo from '../assets/svg/projects/TS-todo.jpg'

export const projectsData = [
	{
		id: 2,
		projectName: 'Gladis & Co',
		projectDesc: '\n\n\nFreelance gig to fix issues with website in wordpress. Used advanced Javascript methods and CSS selectors that could find a needle in a haystack to override the entire site.\n',
		tags: ['WordPress', 'JS', 'CSS', 'SSR'],
		code: 'https://www.gladisandco.com',
		demo: 'https://www.gladisandco.com',
		image: gnco,
		alt: 'server-side rendering, wordpress, javascript, css, html, seo, gladis and co'
	},
	{
		id: 3,
		projectName: 'Content For Developers',
		projectDesc: ' \nOpen-source project created and maintained by me with a growing list of almost 20 contributors. A site with education and learning as a top priority. Utilizing the power of open-source contributors to offer the most diverse collection of learning tools for coding.\n',
		tags: ['React', 'SASS', 'Material UI', 'Open Source'],
		code: 'https://github.com/mathcodes/contentfordevelopers/',
		demo: 'https://www.contentfordevelopers.com/',
		image: cfd,
		alt: 'react, sass, material ui, open source, content for developers, education, learning, coding, programming'

	},
	{
		id: 9,
		projectName: 'TypeScript-To-Do',
		projectDesc: '\n\n\nThis is an advanced to-do list using TypeScript and React. Users have the ability to filter, create, delete, edit and update their notes. Fully responsive and written with clean, easy to understand code!\n',
		tags: ['TypeScript', 'React', 'Bootstrap', 'vite'],
		code: 'https://github.com/mathcodes/typescript-tags-todo/',
		demo: 'https://typescript-tags-todo.vercel.app/',
		image: tstodo,
		alt: 'typescript, react, bootstrap, vite, to-do, todo, tags, filter, create, delete, edit, update, notes, fully responsive, clean, easy to understand code'
	},
	{
		id: 4,
		projectName: 'Scientific Calculator',
		projectDesc: '\n\n\nWorking the wonders of Vanilla JS here, providing users with a mobile-first, desktop-ready scientific-calculator with the ability to solve high-level Algebraic and Geeomtric problems in 1, 2, or 3 dimensions.\n',
		tags: ['HTML', 'CSS', 'Javascript', 'Ganja.JS'	],
		code: 'https://github.com/mathcodes/scientific-calculator',
		demo: 'https://scientific-calulator-qov8zx63p-mathcodes.vercel.app/',
		image: scical,
		alt: 'html, css, javascript, ganja.js, scientific calculator, mobile-first, desktop-ready, algebraic, geometric, 1, 2, 3 dimensions'
	},
	{
		id: 7,
		projectName: 'Sweet Clover Barn',
		projectDesc: ' \n\n\nMet clients at Farmer’s Market, and now their site is modern, responsive, and handling online payments in a beautiful eCommerce site that doubles as a community-based, event-scheduling platform and blog.\n',
		tags: ['CSS', 'HTML', 'JS', 'Squarespace', 'Adobe Illustrator'],
		code: 'www.sweetcloverbarn.com',
		demo: 'www.sweetcloverbarn.com',
		image: scb,
		alt: 'css, html, javascript, squarespace, adobe illustrator, sweet clover barn, modern, responsive, online payments, ecommerce, community-based, event-scheduling, blog'
	},
	{
		id: 8,
		projectName: 'Pro Typer',
		projectDesc: '\n\n\nA quick project to review event handlers and do something useful and practical. Use this app to improve your keyboarding skills. FUTURE DEVELOPMENT: Scoring, typing words, difficulty levels, and wpm calculation. Coming soon!\n',
		tags: ['HTML', 'CSS', 'JS', 'express'],
		code: 'https://github.com/mathcodes/monitor',
		demo: 'https://mathcodes.github.io/pick2hand/',
		image: keys,
		alt: 'html, css, javascript, express, pro typer, keyboarding skills, scoring, typing words, difficulty levels, wpm calculation'
	},

	
]