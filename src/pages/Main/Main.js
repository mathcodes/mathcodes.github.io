import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Landing, About, Skills, Testimonials, Services, Projects, HorizontalRule, Background, Footer } from '../../components'
import { headerData } from '../../data/headerData'


function Main() {
	return (
		<div>
			<Background className="backgroundStyle" style={{zIndex:'-30'}}/>
			<Helmet>
				<title>{headerData.name} - Portfolio</title>
			</Helmet>
			<Navbar />
			<Landing />								
			<About />			
			<Background className="backgroundStyle" style={{zIndex:'-30'}}/>
			<HorizontalRule />
			<Skills />
			<Projects />
			<Background className="backgroundStyle" style={{zIndex:'-30'}}/>	
			<Services />
			<Testimonials />
			
			{/* <ContactForm /> */}
			<Background className="backgroundStyle" style={{zIndex:'-30'}}/>	
			 <Footer />
		</div> 
	)
}

export default Main
