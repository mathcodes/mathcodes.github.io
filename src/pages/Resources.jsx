import React from 'react';
import Methods from '../components/methods/Methods';
import CardGallery from '../components/cards/CardGallery';

const Resources = () => {

	console.log(CardGallery);
	return (
		<section className="container py-5 mt-5 sm:py-10 sm:mt-10">
			<div id="projects" className="text-center">
				<p className="p-1 text-4xl font-bold text-center text-transparent from-orange-500 via-black to-black bg-gradient-to-b bg-clip-text">
					Resources
				</p>
			</div>
			<Methods />
			<div className="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
				<CardGallery />
			</div>
		</section>
	);
};

export default Resources;
