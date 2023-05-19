import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { PopupWidget } from "react-calendly";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Services = lazy(() => import('./pages/Services'));
const Resources = lazy(() => import('./pages/Resources'));

function App() {
	return (
		<AnimatePresence>
			<div className="transition duration-300 bg-secondary-light dark:bg-primary-dark">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
							<Route path="services" element={<Services />} />
							<Route path="resources" element={<Resources />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;

