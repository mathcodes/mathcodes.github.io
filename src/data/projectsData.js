import one from '../assets/svg/projects/spb.png'
import tech from '../assets/svg/projects/pythonlog.svg'
import three from '../assets/svg/projects/mars.svg'
import scb from '../assets/svg/projects/scb.svg'
import p2h from '../assets/svg/projects/p2h.svg'
import keys from '../assets/svg/projects/keys.png'


export const projectsData = [
    {
        id: 1,
        projectName: 'Super Pantry Buddy',
        projectDesc: 'Built with a team of three developers, this app uses the MERN stack to provide users with a responsive, customizable experience to search and save recipes by entering in any number of ingredients.',
        tags: ['MERN', 'ORM', 'OAuth', 'Jest', 'Bulma' ],
        code: 'https://github.com/mathcodes/spb/',
        demo: 'https://superpantrybuddy.herokuapp.com/',
        image: one
    },
    {
        id: 2,
        projectName: 'A Python Log',
        projectDesc: 'A full stack website with blog, using Python to run the backend, and allowing users to post, share, and delete content. A user-centric and mobile-friendly design adds functionality and a responsive UI.',
        tags: ['Python', 'CSS', 'HTML', 'JS', 'Django', 'Tkinter', 'JSON', 'Illustrator', 'CRUD'],
        code: 'https://github.com/mathcodes/PythonLog/',
        demo: 'https://jonspythonlog.herokuapp.com/',
        image: tech
    },
    {
        id: 3,
        projectName: 'Mars Project',
        projectDesc: 'Weather forecast systems and applications predict weather conditions based on multiple parameters.',
        tags: ['Node', 'Express', 'Handlebars', 'ChartJS', 'MySQL', 'Sequelize', 'ORM', 'API'],
        code: 'https://github.com/mathcodes/Red-Planet-Voyagers',
        demo: 'https://team-5-project-2.herokuapp.com/',
        image: three
    },
    {  
        id: 4,
        projectName: 'Sweet Clover Barn',
        projectDesc: ' Met clients at Farmer’s Market, now their site is modern, responsive, and handling online payments in a beautiful eCommerce site that doubles as a community-based, event-scheduling platform and blog.',
        tags: ['CSS', 'HTML', 'JS', 'Squarespace', 'Adobe Illustrator'],
        code: 'www.sweetcloverbarn.com',
        demo: 'www.sweetcloverbarn.com',
        image: scb
    },
    {
        id: 5,
        projectName: 'Pick2Hand',
        projectDesc: 'This react-based 2d platformer was something I created as a solo project. Three levels, new JS not covered in bootcamp, a Firebase DB to store top scores for users, animations and functional controls made this a A GREAT learning experience and simply a FUN game!!!',
        tags: ['React', 'Sass', 'Babel', 'Firebase', 'CSS Animations'],
        code: 'https://github.com/mathcodes/pick2hand/',
        demo: 'https://mathcodes.github.io/pick2hand/',
        image: p2h
    },
    {
        id: 6,
        projectName: 'Pro Typer',
        projectDesc: 'A quick project to review event handlers and do something useful and practical. Use this app to improve your keyboarding skills. FUTURE DEVELOPMENT: Scoring, typing words, difficulty levels, and wpm calculation. Coming soon!',
        tags: ['HTML', 'CSS', 'JS', 'express'],
        code: 'https://github.com/mathcodes/monitor',
        demo: 'https://mathcodes.github.io/pick2hand/',
        image: keys
    },
    // {
    //     id: 7,
    //     projectName: 'Pro Typer',
    //     projectDesc: 'A quick project to review event handlers and do something useful and practical. Use this app to improve your keyboarding skills. FUTURE DEVELOPMENT: Scoring, typing words, difficulty levels, and wpm calculation. Coming soon!',
    //     tags: ['HTML', 'CSS', 'JS', 'express'],
    //     code: 'https://github.com/mathcodes/monitor',
    //     demo: 'https://mathcodes.github.io/pick2hand/',
    //     image: keys
    // },
    // {
    //     id: 8,
    //     projectName: 'Pro Typer',
    //     projectDesc: 'A quick project to review event handlers and do something useful and practical. Use this app to improve your keyboarding skills. FUTURE DEVELOPMENT: Scoring, typing words, difficulty levels, and wpm calculation. Coming soon!',
    //     tags: ['HTML', 'CSS', 'JS', 'express'],
    //     code: 'https://github.com/mathcodes/monitor',
    //     demo: 'https://mathcodes.github.io/pick2hand/',
    //     image: keys
    // },

]
