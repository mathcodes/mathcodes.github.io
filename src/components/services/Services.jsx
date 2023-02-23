import { ServicesProvider } from '../../context/ServicesContext';
import ServicesGallery from './ServicesGallery';

const Services = () => {
	return (
		<ServicesProvider>
			<div className="container mx-auto">
				<ServicesGallery />
			</div>
		</ServicesProvider>
	);
};

export default Services;
