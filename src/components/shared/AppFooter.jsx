import {
	FiGithub,
	FiTwitter,
	FiLinkedin,
	FiYoutube
} from 'react-icons/fi';
import { BsMedium } from 'react-icons/bs';
import AppFooterCopyright from './AppFooterCopyright';

const socialLinks = [
	{
		id: 1,
		icon: <FiGithub />,
		url: 'https://github.com/mathcodes',
	},
	{
		id: 3,
		icon: <FiTwitter />,
		url: 'https://twitter.com/jcircle9',
	},
	{
		id: 4,
		icon: <FiLinkedin />,
		url: 'https://www.linkedin.com/in/jonpchristie',
	},
	{
		id: 5,
		icon: <FiYoutube />,
		url: 'https://www.youtube.com/@TheJonChristie',
	},
	{
		id: 6,
		icon: <BsMedium />,
		url: 'https://medium.com/@jcircle9',
	}
];

const AppFooter = () => {
	return (
		<div className="container mx-auto">
			<div className="pt-20 pb-8 mt-20 border-t-2 sm:pt-30 border-primary-light dark:border-secondary-dark">
				{/* Footer social links */}
				<div className="flex flex-col items-center justify-center mb-12 font-general-regular sm:mb-28">
					<p className="mb-5 text-3xl sm:text-4xl text-primary-dark dark:text-primary-light">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={link.id}
								className="p-4 text-gray-400 duration-300 rounded-lg shadow-sm cursor-pointer hover:text-indigo-500 dark:hover:text-indigo-400 bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<AppFooterCopyright />
			</div>
		</div>
	);
};

export default AppFooter;
