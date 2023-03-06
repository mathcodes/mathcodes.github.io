import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { FiArrowDownCircle } from 'react-icons/fi';
import developerLight from '../../images/developer.svg';
import developerDark from '../../images/developer-dark.svg';
import { motion } from 'framer-motion';

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col items-center mt-12 sm:justify-between sm:flex-row md:mt-2"
		>
			<div className="w-full text-left md:w-1/3">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="text-2xl text-center uppercase font-general-semibold lg:text-3xl xl:text-4xl sm:text-left text-ternary-dark dark:text-primary-light"
				>
					Hi, I am Jon
				</motion.h1>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="mt-4 text-lg leading-normal text-center text-gray-500 font-general-medium md:text-xl lg:text-2xl xl:text-3xl sm:text-left dark:text-gray-200"
				>
					Full-Stack Developer & Educator
				</motion.p>
				<div className="animate-bounce">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block "
				>
					<a
						download="Christie-Resume.pdf"
						href="/files/Christie-Resume.pdf"
						className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg text-white bg-pink-500 border border-2 border-pink-500  py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-500 focus:ring-1 focus:ring-indigo-900 hover:bg-secondary-dark  duration-500"
						aria-label="Download Resume"
					>
						<FiArrowDownCircle className="w-5 h-5 mr-2 duration-100 sm:mr-3 sn:w-6 sm:h-6"></FiArrowDownCircle>
						<span className="text-sm duration-100 sm:text-lg font-general-medium">
							Download CV
						</span>
					</a>
				</motion.div>
				</div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="relative float-right mt-8 text-right sm:w-2/3 sm:mt-0"

			>
				<div className="">
				<img
				className="mx-auto my-0 h-72 xl:h-96"
					src={
						activeTheme === 'dark' ? developerLight : developerDark
					}
					alt="Developer"
				/>
				</div>
			</motion.div>
		</motion.section>
	);
};

export default AppBanner;
