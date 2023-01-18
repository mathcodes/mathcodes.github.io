import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Landing,PackageCards, About, Skills, Testimonials, Projects, HorizontalRule, Footer} from '../../components'
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
			<PackageCards/>
			{/* <Services /> */}
			<Testimonials />
			<Footer />
		</div> 
	)
}

export default Main
