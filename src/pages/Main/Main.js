import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Landing, About, Skills, Testimonials, Contacts, Services, Projects } from '../../components'
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
			<About />			
			<Skills />
			<Projects />
			<Services />
			<Testimonials />
			
			<Contacts />
		</div>
	)
}

export default Main
