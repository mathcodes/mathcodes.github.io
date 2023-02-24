import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<section className="py-5 mt-5 sm:py-10 sm:mt-10">
		<div id="projects" className="text-center">
			<p className="mb-1 text-2xl font-general-medium sm:text-4xl text-ternary-dark dark:text-ternary-light">
				About
			</p>
		</div>
		<div className="block mt-4 sm:flex sm:gap-10 sm:mt-6">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="w-64 rounded-lg" alt="" />
			</div>

			<div className="w-full text-left font-general-regular sm:w-3/4">
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-lg text-ternary-dark dark:text-ternary-light"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	</section>
	);
};

export default AboutMeBio;
