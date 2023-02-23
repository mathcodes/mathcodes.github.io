import { ServicesProvider } from '../context/ServicesContext';
import ServiceGallery from '../components/services/ServiceGallery';

const Services = () => {
	return (
		<ServicesProvider>
			<div className="container mx-auto">
				<ServiceGallery />
			</div>
		</ServicesProvider>
	);
};

export default Services;
