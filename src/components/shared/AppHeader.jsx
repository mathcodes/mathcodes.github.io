import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import HireMeModal from '../HireMeModal';
import logoLight from '../../images/logo-light.svg';
import logoDark from '../../images/logo-dark.svg';
import { motion } from 'framer-motion';
import Button from '../reusable/Button';

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
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
				<div className="flex items-center justify-between px-4 sm:px-0">
					<div>
						<Link to="/">
							{activeTheme === 'dark' ? (
								<img
									src={logoDark}
									className="w-36"
									alt="Dark Logo"
								/>
							) : (
								<img
									src={logoLight}
									className="w-36"
									alt="Dark Logo"
								/>
							)}
						</Link>
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
						className="block p-3 mb-2 text-lg text-left border-2 border-pink-500 rounded-md shadow-lg hover:bg-pink-500 text-primary-dark dark:text-ternary-light hover:text-secondary-dark sm:mx-4 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block p-3 mb-2 text-lg text-left border-2 border-pink-500 rounded-md shadow-lg hover:bg-pink-500 text-primary-dark dark:text-ternary-light hover:text-secondary-dark sm:mx-4 sm:py-2 sm:pt-2 "
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/blogs"
						className="block p-3 mb-2 text-lg text-left border-2 border-pink-500 rounded-md shadow-lg hover:bg-pink-500 text-primary-dark dark:text-ternary-light hover:text-secondary-dark sm:mx-4 sm:py-2 sm:pt-2 "
						aria-label="About Me"
					>
						Blogs
					</Link>
					<Link
						to="/contact"
						className="block p-3 mb-2 text-lg text-left border-2 border-pink-500 rounded-md shadow-lg hover:bg-pink-500 text-primary-dark dark:text-ternary-light hover:text-secondary-dark sm:mx-4 sm:py-2 sm:pt-2 "
						aria-label="Contact"
					>
						Contact
					</Link>

				</div>

				{/* Header links large screen */}
				<div className="items-center justify-center hidden p-5 m-0 mt-5 shadow-lg font-general-medium sm:ml-4 sm:mt-3 sm:flex sm:p-0 sm:shadow-none hover:bg-pink-500">
					<Link
						to="/projects"
						className="block mb-2 text-lg text-left text-pink-500 dark:text-ternary-light hover:text-pink-500 sm:mx-4 sm:py-2"
						aria-label="Projects"
					>
						Projects
					</Link>
					<Link
						to="/about"
						className="block mb-2 text-lg text-left text-primary-dark dark:text-ternary-light hover:text-pink-500 sm:mx-4 sm:py-2"
						aria-label="About Me"
					>
						About Me
					</Link>
					<Link
						to="/blogs"
						className="block mb-2 text-lg text-left text-primary-dark dark:text-ternary-light hover:text-pink-500 sm:mx-4 sm:py-2"
						aria-label="About Me"
					>
						Blogs
					</Link>
					<Link
						to="/contact"
						className="block mb-2 text-lg text-left text-primary-dark dark:text-ternary-light hover:text-pink-500 sm:mx-4 sm:py-2"
						aria-label="Contact"
					>
						Contact
					</Link>
				</div>

				{/* Header right section buttons */}
				<div className="flex-col items-center justify-between hidden sm:flex md:flex-row">
					{/* HIRE ME BUTTON - FUTURE DEVç */}
					{/* <div className="hidden md:flex">
						<span
							onClick={showHireMeModal}
							className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
							aria-label="Hire Me Button"
						>
							<Button title="Hire Me" />
						</span>
					</div> */}

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
			{/* Hire me modal */}
			<div>
				{showModal ? (
					<HireMeModal
						onClose={showHireMeModal}
						onRequest={showHireMeModal}
					/>
				) : null}
				{showModal ? showHireMeModal : null}
			</div>
		</motion.nav>
	);
};

export default AppHeader;
