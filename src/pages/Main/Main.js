import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Footer, Landing, About, Skills, Testimonials, HorizontalRule, Contacts, Projects, Services } from '../../components'
import { headerData } from '../../data/headerData'
import ThemeSwitcher from '../../contexts/ThemeSwitcher'

function Main() {
	return (
		<div>
			
			<Helmet>
				<title>{headerData.name} - Portfolio</title>
			</Helmet>
			<ThemeSwitcher />
			<Navbar />
			<Landing />
			<HorizontalRule />
			<About />
			<Skills />
			<Projects />
			<Services />
			<Testimonials />
			
			<Contacts />
			<Footer />
		
		</div> 
	)
}

export default Main
