import { Link } from 'react-router-dom';
import AppBanner from '../components/shared/AppBanner';
import Button from '../components/reusable/Button';
// import { AboutMeProvider } from '../context/AboutMeContext';
// import AboutMe from '../components/about/AboutMe';
import Skills from '../components/skills/Skills';

const Home = () => {
	return (
		<div className="container mx-auto animate-bounce">
			<AppBanner></AppBanner>
			{/* <AboutMeProvider>
				<AboutMe/>
			</AboutMeProvider> */}
			<Skills />



			<div className="flex justify-center mt-8 sm:mt-10 ">
				<Link
					to="/contact"
					className="items-center px-6 py-3 text-lg text-white duration-300 bg-orange-600 border border-2 border-orange-600 rounded-lg shadow-lg animate-bounce hover:bg-secondary-dark font-general-medium hover:shadow-xl focus:ring-1 focus:ring-indigo-900 sm:text-xl"
					aria-label="More Projects"
				>
					<Button title="Contact" />
				</Link>
			</div>
		</div>
	);
};

export default Home;
