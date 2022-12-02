import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Landing, About, Skills, Testimonials, Services, Projects, HorizontalRule, Footer } from '../../components'
import { headerData } from '../../data/headerData'


function Main() {
	return (
		<div>
			{/* <Background className="backgroundStyle" style={{zIndex:'-30'}}/> */}
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
			<Footer />
		</div> 
	)
}

export default Main
