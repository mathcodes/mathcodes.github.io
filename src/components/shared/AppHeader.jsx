import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX, FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
// import HireMeModal from '../HireMeModal';
import logoLight from '../../images/logo-light.svg';
import logoMd from '../../images/logo-dark-sm.png';
import logoSm from '../../images/logo-dark-sm.png';
import logoDark from '../../images/logo-dark.svg';
import logoDarkSm from '../../images/logo-dark-sm.png';
import { motion } from 'framer-motion';

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	// const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}


	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<div className="z-10 block max-w-screen-lg py-6 xl:max-w-screen-xl sm:flex sm:justify-between sm:items-center">
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex items-center justify-between px-4 ">
					<div className="flex items-center justify-between px-4 ">
						<div>
							<Link to="/">
								<FiHome color="white" width="20rem" />
							</Link>
						</div>
					</div>

					{/* Theme switcher small screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="block p-3 ml-0 shadow-sm cursor-pointer sm:hidden bg-primary-light dark:bg-ternary-dark rounded-xl"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-xl text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light" />
						) : (
							<FiSun className="text-xl text-gray-200 hover:text-gray-50" />
						)}
					</div>

					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="fill-current h-7 w-7 text-secondary-dark dark:text-ternary-light"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none'
							: 'hidden'
					}
				>
					<Link
						to="/projects"
						className="block p-3 mb-2 text-lg text-left border-2 border-orange-600 rounded-md shadow-lg hover:bg-orange-600 text-primary-dark dark:text-ternary-light hover:text-secondary-dark sm:mx-4 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block p-3 mb-2 text-lg text-left border-2 border-orange-600 rounded-md shadow-lg hover:bg-orange-600 text-primary-dark dark:text-ternary-light hover:text-secondary-dark sm:mx-4 sm:py-2 sm:pt-2 "
						aria-label="About"
					>
						About
					</Link>

					<Link
						to="/services"
						className="block p-3 mb-2 text-lg text-left border-2 border-orange-600 rounded-md shadow-lg hover:bg-orange-600 text-primary-dark dark:text-ternary-light hover:text-secondary-dark sm:mx-4 sm:py-2 sm:pt-2 "
						aria-label="About"
					>
						Services
					</Link>
					<Link
						to="/contact"
						className="block p-3 mb-2 text-lg text-left border-2 border-orange-600 rounded-md shadow-lg hover:bg-orange-600 text-primary-dark dark:text-ternary-light hover:text-secondary-dark sm:mx-4 sm:py-2 sm:pt-2 "
						aria-label="Contact"
					>
						Contact
					</Link>

				</div>

				{/* Header links large screen */}
				<div className="items-center justify-center hidden p-5 m-0 mt-5 shadow-lg font-general-medium sm:ml-4 sm:mt-3 sm:flex sm:p-0 sm:shadow-none hover:bg-orange-600">
					<Link
						to="/projects"
						className="block p-2 mb-2 text-lg text-left rounded shadow-lg shadow-primary-dark hover:shadow-orange-500 text-primary-dark dark:text-ternary-light hover:text-orange-500 sm:mx-4 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block p-2 mb-2 text-lg text-left rounded shadow-lg text-primary-dark dark:text-ternary-light hover:text-orange-500 sm:mx-4 sm:py-2"
						aria-label="About"
					>
						About
					</Link>
					<Link
						to="/services"
						className="block p-2 mb-2 text-lg text-left rounded shadow-lg text-primary-dark dark:text-ternary-light hover:text-orange-600 sm:mx-4 sm:py-2"
						aria-label="About"
					>
						Services
					</Link>
					<Link
						to="/contact"
						className="block p-2 mb-2 text-lg text-left rounded shadow-lg text-primary-dark dark:text-ternary-light hover:text-orange-600 sm:mx-4 sm:py-2"
						aria-label="Contact"
					>
						Contact
					</Link>
				</div>
				{/* Header right section buttons */}
				<div className="flex-col items-center justify-between hidden sm:flex md:flex-row">
					{/* Theme switcher large screen */}
					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="p-3 ml-8 shadow-sm cursor-pointer bg-primary-light dark:bg-ternary-dark rounded-xl"
					>
						{activeTheme === 'dark' ? (
							<FiMoon className="text-xl text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light" />
						) : (
							<FiSun className="text-xl text-gray-200 hover:text-gray-50" />
						)}
					</div>
				</div>
			</div>
		</motion.nav>
	);
};

export default AppHeader;
