import AboutMeBio from './AboutMeBio';
import AboutCounter from './AboutCounter';
import AboutClients from './AboutClients';
import { AboutMeProvider } from '../../context/AboutMeContext';
import { motion } from 'framer-motion';

const About = () => {
	return (
		<AboutMeProvider id="aboutme">
			<motion.div
				initial={{ opacity: 0 }} // initial state set to opacity: 0
				animate={{ opacity: 1, delay: 1 }} // animate state set to opacity: 1
				exit={{ opacity: 0 }} // exit state set to opacity: 0
				className="container mx-auto"
			>
				<AboutMeBio />
			</motion.div>

			{/** Counter without paddings */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
			>

			</motion.div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
				<AboutClients />
			</motion.div>
		</AboutMeProvider>
	);
};

export default About;