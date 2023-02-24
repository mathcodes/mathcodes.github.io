import { motion } from 'framer-motion';

const ProjectSingle = ({ title, category, image, code, demo, tags }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
				<div>
					<img
						src={image}
						className="rounded-t-xl border-none h-40 m-auto"
						alt="Single Project"
					/>
				</div>
				<div className="text-center px-.2 py-.3" style={{ height: '6rem' }}>
					<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
						{title}
					</p>
					<span className="text-lg text-ternary-dark dark:text-ternary-light">
						{category}
					</span>
				</div>
				<div className="flex flex-wrap px-4">
					{tags.map((tag) => {
						return (
							<div className="m-2 px-1 border-pink-500 bg-primary-light dark:bg-ternary-light shadow-sm rounded-md cursor-pointer"
								key={tag}
							>
								{tag}

							</div>
						);
					}
					)}
				</div>
				<div className="grid justify-around  mb-4">
					<button className="bg-indigo-500 text-primary-light dark:text-ternary-light font-general-medium text-sm m-4 px-4 py-2 rounded-lg  hover:bg-indigo-700 dark:hover:bg-ternary-dark hover:text-secondary-light dark:hover:text-secondary-dark">
						<a href={demo}>Demo</a>
					</button>
					<button className="bg-indigo-500 text-primary-light dark:text-ternary-light font-general-medium text-sm m-4 px-4 py-2 rounded-lg hover:bg-indigo-700 dark:hover:bg-ternary-dark hover:text-secondary-light dark:hover:text-secondary-light">
						<a href={code}>Code</a>
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectSingle;
