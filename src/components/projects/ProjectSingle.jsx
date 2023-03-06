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
			<div className="mb-10 shadow-lg cursor-pointer rounded-xl hover:shadow-xl sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
				<div>
					<img
						src={image}
						className="m-auto border-none h- rounded-t-xl"
						alt="Single Project"
					/>
				</div>
				<div className="text-center px-.2 py-.3" style={{ height: '6rem' }}>
					<p className="mb-2 text-lg font-general-medium md:text-xl text-ternary-dark dark:text-ternary-light selection:bg-ternary-dark">
						{title}
					</p>
					<span className="text-lg text-ternary-dark dark:text-ternary-light">
						{category}
					</span>
				</div>
				<div className="flex flex-wrap px-4">
					{tags.map((tag) => {
						return (
							<div className="px-1 m-2 border-orange-500 rounded-md shadow-sm cursor-pointer bg-primary-light dark:bg-ternary-light"
								key={tag}
							>
								{tag}

							</div>
						);
					}
					)}
				</div>
				<div className="grid justify-around mb-4">
					<button className="px-4 py-2 m-4 text-sm bg-orange-500 border border-orange-500 rounded-lg border-3 text-primary-light hover:bg-secondary-dark dark:text-ternary-light font-general-medium hover:bg-indigo-700 dark:hover:bg-ternary-dark hover:text-secondary-light dark:hover:text-secondary-dark">
						<a href={demo}>Demo</a>
					</button>
					<button className="px-4 py-2 m-4 text-sm bg-orange-500 border border-orange-500 rounded-lg border-3 text-primary-light hover:bg-secondary-dark dark:text-ternary-light font-general-medium hover:bg-indigo-700 dark:hover:bg-ternary-dark hover:text-secondary-light dark:hover:text-secondary-dark">
						<a href={code}>Code</a>
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectSingle;
