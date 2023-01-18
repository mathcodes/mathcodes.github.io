import resume from '../assets/pdf/Jon_Christie_Resume.pdf';


// about
export const aboutData = {
	title: "Who I am",
	description1: "Front-End Developer with a focus on React and React Native with over 5 years experience in web development, front-end and back-end projects, startups, and contributing to the industry  to name a few. Front end, back end, and full stack web development using various stacks and technologies for different uses like data analysis, eCommerce, online education, helping others, and just plain FUN!",
	description2: "My ongoing drive to learn and adapt along with my passion for coding have helped me become an irreplaceable asset for the companies and teammates I’ve had the pleasure working with over the years.",
	image: 2
}
// contacts
export const contactsData = {
	email: 'jonpchristie@gmail.com',
	phone: '(919) 368-3369',
	address: 'Raleigh, NC',
	sheetAPI: ''
}
// downloadable
export const downloadableData = {
	twoSum: '../assets/png/1_twoSum.png',
	searchInputPosition: '../assets/png/35_searchInputPosition.png',
	firstBadVersion: '../assets/png/278_firstBadVersion.png',
	moveZeroes: '../assets/png/283_moveZeroes.png',
}
// experience
export const experienceData = [
	{
		id: 1,
		company: 'Varsity Tutors',
		jobtitle: 'Coding Instructor',
		startYear: '2021',
		endYear: 'current'
	},
	{
		id: 2,
		company: 'Freelance',
		jobtitle: 'Web Developer',
		startYear: '2019',
		endYear: 'Present'
	},
	{
		id: 3,
		company: 'Pivotous Collective, LLC',
		jobtitle: 'Reputation Manager',
		startYear: '2020',
		endYear: '2020'
	},
]
// header

export const headerData = {
	name: 'Jon Christie',
	title: "Welcome! My name is",
	description: "React and React Native Developer with full stack experience, online	educator, musician, and a solid asset for your next project or adventure! ",
	description2: " ",
	href2: "\" alt='jon christie headshot portfolio fullstack11235'\"><a>",
	image: 'https://raw.githubusercontent.com/mathcodes/mathcodes.github.io/main/src/assets/png/HEADSHOT_CIRCLE.png',
	BG: 'https://raw.githubusercontent.com/mathcodes/mathcodes.github.io/main/src/assets/img/JCircle.png',
	BG2: 'https://raw.githubusercontent.com/mathcodes/mathcodes.github.io/main/src/assets/img/JCircle_dark_gray.png',
	resumePdf: #fe6600
}
// projects
import one from '../assets/svg/projects/spb.png'
import tech from '../assets/svg/projects/pythonlog.svg'
import three from '../assets/svg/projects/mars.svg'
import scb from '../assets/svg/projects/scb.svg'
import etrn from '../assets/img/expensetracker.png'
import keys from '../assets/svg/projects/keys.png'
import gnco from '../assets/img/gnco.png'
import pytho from '../assets/svg/projects/python.png'

export const projectsData = [
	{
		id: 1,
		projectName: 'Expense Tracker',
		projectDesc: 'A React Native iOS/Android App to keep track of your expense (or anything else, like a to do list with deadlines). Includes navigation, authentication, and persistence of data.',
		tags: ['React', 'React Native', 'Javascript', 'Expo', 'CSS', 'Firebase'	],
		code: 'https://github.com/mathcodes/react-native-apps',
		demo: 'https://github.com/mathcodes/react-native-apps',
		image: etrn
	},
	{
		id: 2,
		projectName: 'Gladis & Co',
		projectDesc: 'Freelance gig to fix issues with website in wordpress. Used advanced Javascript methods and CSS selectors that could find a needle in a haystack to override the entire site.',
		tags: ['WordPress', 'GoDaddy', 'JS', 'CSS', 'HTML', 'server-side rendering', 'css selectors'],
		code: 'https://www.gladisandco.com',
		demo: 'https://www.gladisandco.com',
		image: gnco
	},
	{
		id: 3,
		projectName: 'Super Pantry Buddy',
		projectDesc: 'Built with a team of three developers, this app uses the MERN stack to provide users with a responsive, customizable experience to search and save recipes by entering in any number of ingredients.',
		tags: ['MERN', 'ORM', 'OAuth', 'Jest', 'Bulma'],
		code: 'https://github.com/mathcodes/spb/',
		demo: 'https://superpantrybuddy.herokuapp.com/',
		image: one
	},
	{
		id: 4,
		projectName: 'A Python Log',
		projectDesc: 'A full stack website with blog, using Python to run the backend, and allowing users to post, share, and delete content. A user-centric and mobile-friendly design adds functionality and a responsive UI.',
		tags: ['Python', 'CSS', 'HTML', 'JS', 'Django', 'Tkinter', 'JSON', 'Illustrator', 'CRUD'],
		code: 'https://github.com/mathcodes/PythonLog/',
		demo: 'https://jonspythonlog.herokuapp.com/',
		image: tech
	},
	{
		id: 5,
		projectName: 'Mars Project',
		projectDesc: 'Weather forecast systems and applications predict weather conditions based on multiple parameters.',
		tags: ['Node', 'Express', 'Handlebars', 'ChartJS', 'MySQL', 'Sequelize', 'ORM', 'API'],
		code: 'https://github.com/mathcodes/Red-Planet-Voyagers',
		demo: 'https://team-5-project-2.herokuapp.com/',
		image: three
	},
	{
		id: 6,
		projectName: 'A Collection of Python Projects',
		projectDesc: 'This is a collection of Python projects that I have created. Each project is a live application that I have built using the Python and other technologies listed below. Most focus on either the fundamentals of Python as well as mroe advanced programs inmplementing machine learning, AI, data structures, and algorithms.',
		tags: ['Python', 'Flask', 'Django', 'Selenium', 'PyNum', 'Sequelize', 'ORM', 'API'],
		code: 'https://github.com/mathcodes/Red-Planet-Voyagers',
		demo: 'https://team-5-project-2.herokuapp.com/',
		image: pytho
	},
	{
		id: 7,
		projectName: 'Sweet Clover Barn',
		projectDesc: ' Met clients at Farmer’s Market, and now their site is modern, responsive, and handling online payments in a beautiful eCommerce site that doubles as a community-based, event-scheduling platform and blog.',
		tags: ['CSS', 'HTML', 'JS', 'Squarespace', 'Adobe Illustrator'],
		code: 'www.sweetcloverbarn.com',
		demo: 'www.sweetcloverbarn.com',
		image: scb
	},
	{
		id: 8,
		projectName: 'Pro Typer',
		projectDesc: 'A quick project to review event handlers and do something useful and practical. Use this app to improve your keyboarding skills. FUTURE DEVELOPMENT: Scoring, typing words, difficulty levels, and wpm calculation. Coming soon!',
		tags: ['HTML', 'CSS', 'JS', 'express'],
		code: 'https://github.com/mathcodes/monitor',
		demo: 'https://mathcodes.github.io/pick2hand/',
		image: keys
	}
		
]
// response
export const responseData = {
	name: `string`,
	email: `string`,
	message: `string`,
}
// services
/* eslint-disable */
import { BsCodeSlash, BsGraphUp } from "react-icons/bs";
import { AiFillAudio } from "react-icons/ai";
import { FaVideo, FaTabletAlt, FaBook } from "react-icons/fa";

export const servicesData = [
	{
		id: 1,
		title: 'Web Development',
		icon: <BsCodeSlash />
	},
	{
		id: 2,
		title: 'App Development',
		icon: <FaTabletAlt />
	},
	{
		id: 3,
		title: 'SEO, Marketing, and Branding',
		icon: <BsGraphUp />
	},
	{
		id: 4,
		title: 'Tutoring',
		icon: <FaBook />
	},
	{
		id: 5,
		title: 'Audio Engineering',
		icon: <AiFillAudio />
	},
	{
		id: 6,
		title: 'Video Editing',
		icon: <FaVideo />
	},
]

// skills
export const skillsData = [
	'HTML',
	'Javascript',
	'TypeScript',
	'CSS',
	'MongoDB',
	'Python',
	'Angular',
	'React',
	'Django',
	'Bootstrap',
	'MaterialUI',
	'Git',
	'AWS',
	'Blender',
	'Unity',
]
// socialsData
export const socialsData = {
	github: 'https://github.com/mathcodes/',
	facebook: 'https://www.facebook.com/fullstack11235',
	linkedIn: 'https://www.linkedin.com/in/jonpchristie/',
	youtube: 'https://www.youtube.com/channel/UC5GFnN-lv8Yuqc9O3b79k6g',
	instagram: 'https://www.instagram.com/fullstack11235/',
	codepen: 'https://codepen.io/mathcodes',
	twitter: 'https://twitter.com/fullstack112358/',
	reddit: 'https://www.reddit.com/user/fullstack11235813',
	stackOverflow: 'https://stackoverflow.com/users/11303840/jon-christie',
	replit: 'https://replit.com/@fullstack11235',
}
 
// testimonials

// theme