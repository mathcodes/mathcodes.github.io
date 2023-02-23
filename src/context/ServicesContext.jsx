import { useState, createContext } from 'react';
import { servicesData } from '../data/services';

// Create services context
export const ServicesContext = createContext();

// Create the services context provider
export const ServicesProvider = (props) => {
	const [services, setServices] = useState(servicesData);
	const [searchService, setSearchService] = useState('');
	const [selectService, setSelectService] = useState('');

	// // Search services by project title
	// const searchServicesByTitle = services.filter((item) => {
	// 	const result = item.title
	// 		.toLowerCase()
	// 		.includes(searchService.toLowerCase())
	// 		? item
	// 		: searchService === ''
	// 		? item
	// 		: '';
	// 	return result;
	// });

	// // Select services by project category
	// const selectServicesByCategory = services.filter((item) => {
	// 	let category =
	// 		item.category.charAt(0).toUpperCase() + item.category.slice(1);
	// 	return category.includes(selectService);
	// });

	return (
		<ServicesContext.Provider
			value={{
				services,
				setServices,
				searchService,
				setSearchService,
				// searchServicesByTitle,
				selectService,
				setSelectService,
				// selectServicesByCategory,
			}}
		>
			{props.children}
		</ServicesContext.Provider>
	);
};
