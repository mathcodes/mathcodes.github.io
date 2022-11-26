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
		code: 'https://github.com/mathcodes/react-native-apps/tree/main/sample-apps/rn-expense-tracker/rn-expense-trackers',
		demo: 'https://github.com/mathcodes/react-native-apps/tree/main/sample-apps/rn-expense-tracker/rn-expense-trackers',
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