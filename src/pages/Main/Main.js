import React from 'react'
import { Helmet } from 'react-helmet'
<<<<<<< HEAD
import { Navbar, Landing, About, Skills, Testimonials, Contacts, Services, Projects } from '../../components'
=======
import { Navbar, Footer, Landing, About, Skills, Testimonials, HorizontalRule, Contacts, Projects, Services } from '../../components'
>>>>>>> main
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
<<<<<<< HEAD
			<About />			
=======
			<HorizontalRule />
			<About />
>>>>>>> main
			<Skills />
			<Projects />
			<Services />
			<Testimonials />
			
			<Contacts />
<<<<<<< HEAD
		</div>
=======
			<Footer />
		
		</div> 
>>>>>>> main
	)
}

export default Main
