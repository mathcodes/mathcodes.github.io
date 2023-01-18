import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Landing,PackageCards, About, Skills, Testimonials, Services, Projects, HorizontalRule, Footer, Offers} from '../../components'
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
			<Offers />
			<PackageCards/>
			<Services />
			<Testimonials />
			<Footer />
		</div> 
	)
}

export default Main
