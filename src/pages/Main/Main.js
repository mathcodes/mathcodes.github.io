import React from 'react'
import { Helmet } from 'react-helmet'
import { Navbar, Landing, About, Skills, Testimonials, Contacts, ContactForm, Services, Projects, HorizontalRule } from '../../components'
import { headerData } from '../../data/headerData'
// import {Form} from '../../components'
import {MyForm} from '../../components/'

let initialValues = {
	field1: 3,
	field2: 4,
  field3: 5,
}

function Main() {
	return (
		<div>

			<Helmet>
				<title>{headerData.name} - Portfolio</title>
			</Helmet>
			{/* <Form value={initialValues}/> */}
			<Navbar />
			<Landing />
			<MyForm />									
			<About />			
			<HorizontalRule />
			<Skills />
			<Projects />
			<Services />
			<Testimonials />
			<Contacts />
			<ContactForm />
			{/* <Footer /> */}
			
		
		</div> 
	)
}

export default Main
