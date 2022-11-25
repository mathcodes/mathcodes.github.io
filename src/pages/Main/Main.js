import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Landing, About, Skills, Testimonials, ContactForm, Services, Projects, HorizontalRule } from '../../components'
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
			<HorizontalRule />
			<Skills />
			<Projects />
			<Services />
			<Testimonials />
			<ContactForm />
			
		
		</div> 
	)
}

export default Main
