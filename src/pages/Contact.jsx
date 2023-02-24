import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
	return (<>
			<section className="py-5 mt-5 sm:py-10 sm:mt-10">
			<div id="projects" className="text-center">
				<p className="mb-1 text-2xl font-general-medium sm:text-4xl text-ternary-dark dark:text-ternary-light">
					Contact
				</p>
			</div>
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container flex flex-col-reverse py-5 mx-auto lg:flex-row lg:py-10 lg:mt-10"
		>

			<ContactForm />
			<ContactDetails />
		</motion.div>
		</section></>
	);
};

export default Contact;
