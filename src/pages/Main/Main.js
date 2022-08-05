import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Landing, About, Skills, Testimonials, Contacts, Services, CardGallery } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
	return (
		<div>
			<Helmet>
				<title>{headerData.name} - Portfolio</title>
			</Helmet>
			<Navbar />
			<Landing />
			<About />
			{/* <RecipeReviewCard /> */}
			
			<Skills />
			<CardGallery />
			<Services />
			<Testimonials />
			<Contacts />
		</div>
	)
}

export default Main
