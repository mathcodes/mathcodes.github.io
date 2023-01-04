import ma from '../assets/svg/projects/ma.png'
import scb from '../assets/svg/projects/scb.svg'
import cfd from '../assets/svg/projects/cfd.svg'
import keys from '../assets/svg/projects/keys.png'
import gnco from '../assets/img/gnco.png'
import scical from '../assets/svg/projects/scical.png'
// import one from '../assets/svg/projects/bookShelves.png'
// import tech from '../assets/svg/projects/pythonlog.svg'
// import three from '../assets/svg/projects/mars.svg'
// import pytho from '../assets/svg/projects/python.png'

export const projectsData = [
	{
		id: 1,
		projectName: 'Content For Developers',
		projectDesc: ' \nOpen-source project created and maintained by me with a growing list of almost 20 contributors. A site with education and learning as a top priority. Utilizing the power of open-source contributors to offer the most diverse collection of learning tools for coding.\n',
		tags: ['React', 'SASS', 'Material UI', 'Open Source'],
		code: 'https://github.com/mathcodes/contentfordevelopers/',
		demo: 'https://www.contentfordevelopers.com/',
		image: cfd
	},
	{
		id: 2,
		projectName: 'Marketing App',
		projectDesc: '\n\n\nSolo project created to offer onboarding clients a sample of my work. Customizable, reliable, maintainable, and performant. Clean and understandable code for easy refactoring and working with teams. \n',
		tags: ['React', 'Typescript', 'Tailwind CSS'],
		code: 'https://github.com/mathcodes/marketing-app	',
		demo: 'https://marketing-app-demo.vercel.app/',
		image: ma
	},
	{
		id: 3,
		projectName: 'Gladis & Co',
		projectDesc: '\n\n\nFreelance gig to fix issues with website in wordpress. Used advanced Javascript methods and CSS selectors that could find a needle in a haystack to override the entire site.\n',
		tags: ['WordPress', 'JS', 'CSS', 'server-side rendering'],
		code: 'https://www.gladisandco.com',
		demo: 'https://www.gladisandco.com',
		image: gnco
	},
	{
		id: 4,
		projectName: 'Scientific Calculator',
		projectDesc: '\n\n\nWorking the wonders of Vanilla JS here, providing users with a mobile-first, desktop-ready scientific-calculator with the ability to solve high-level Algebraic and Geeomtric problems in 1, 2, or 3 dimensions.\n',
		tags: ['HTML', 'CSS', 'Javascript', 'Ganja.JS'	],
		code: 'https://github.com/mathcodes/scientific-calculator',
		demo: 'https://scientific-calulator.vercel.app/',
		image: scical
	},
	{
		id: 5,
		projectName: 'Sweet Clover Barn',
		projectDesc: ' \n\n\nMet clients at Farmer’s Market, and now their site is modern, responsive, and handling online payments in a beautiful eCommerce site that doubles as a community-based, event-scheduling platform and blog.\n',
		tags: ['CSS', 'HTML', 'JS', 'Squarespace', 'Adobe Illustrator'],
		code: 'www.sweetcloverbarn.com',
		demo: 'www.sweetcloverbarn.com',
		image: scb
	},
	{
		id: 6,
		projectName: 'Pro Typer',
		projectDesc: '\n\n\nA quick project to review event handlers and do something useful and practical. Use this app to improve your keyboarding skills. FUTURE DEVELOPMENT: Scoring, typing words, difficulty levels, and wpm calculation. Coming soon!\n',
		tags: ['HTML', 'CSS', 'JS', 'express'],
		code: 'https://github.com/mathcodes/monitor',
		demo: 'https://mathcodes.github.io/pick2hand/',
		image: keys
	},
]

	// {
	// 	id: 3,
	// 	projectName: 'Super Pantry Buddy',
	// 	projectDesc: '\n\n\nBuilt with a team of three developers, this app uses the MERN stack to provide users with a responsive, customizable experience to search and save recipes by entering in any number of ingredients.\n',
	// 	tags: ['MERN', 'ORM', 'OAuth', 'Jest', 'Bulma'],
	// 	code: 'https://github.com/mathcodes/spb/',
	// 	demo: 'https://superpantrybuddy.herokuapp.com/',
	// 	image: one
	// },
	// {
	// 	id: 3,
	// 	projectName: 'Google Book Search',
	// 	projectDesc: ' \nFull Stack React ORM-built book search using MongoDb to give users their own account with increasing abilities as the app progresses, such as sotring their favorites andn star ratings.\n',
	// 	tags: ['MERN', 'ORM', 'OAuth', 'Jest'],
	// 	code: 'https://github.com/mathcodes/spb/',
	// 	demo: 'https://superpantrybuddy.herokuapp.com/',
	// 	image: one
	// },
	// {
	// 	id: 4,
	// 	projectName: 'A Python Log',
	// 	projectDesc: '\n\n\nA full stack website with blog, using Python to run the backend, and allowing users to post, share, and delete content. A user-centric and mobile-friendly design adds functionality and a responsive UI.\n',
	// 	tags: ['Python', 'JS', 'Django', 'Tkinter', 'CRUD'],
	// 	code: 'https://github.com/mathcodes/PythonLog/',
	// 	demo: 'https://jonspythonlog.herokuapp.com/',
	// 	image: tech
	// },
	// {
	// 	id: 5,
	// 	projectName: 'Mars Project',
	// 	projectDesc: '\n\n\nWeather forecast systems and applications predict weather conditions based on multiple parameters.\n',
	// 	tags: ['MySQL', 'Sequelize', 'ORM', 'API'],
	// 	code: 'https://github.com/mathcodes/Red-Planet-Voyagers',
	// 	demo: 'https://team-5-project-2.herokuapp.com/',
	// 	image: three
	// },
	// {
	// 	id: 6,
	// 	projectName: 'A Collection of Python Projects',
	// 	projectDesc: "Refreshed for 2023, React-based Google Books Search app brings you, on the frontend, reusable, scalable, gorgeous, responsive, and simple components. Express serves us up the connections needed to fully utilize not only the  helper/util functions with React's lifecycle methods, but storing user settings to MongoDB to enable saving books.\n",
	// 	tags: ['MERN', 'Axios', 'if-env', 'dotenv'],
	// 	code: 'https://github.com/mathcodes/book-search-v.1.2.0',
	// 	demo: 'https://book-search-v-1-2-0.vercel.app/',
	// 	image: pytho
	// },