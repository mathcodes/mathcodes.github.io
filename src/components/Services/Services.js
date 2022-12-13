import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { servicesData } from '../../data/servicesData';
import './Services.css'
import SingleService from './SingleService/SingleService';

function Services() {

	const { theme } = useContext(ThemeContext);
	return (
		<>
			<div style={{ backgroundColor: theme.secondary50, height: '1rem' }}> </div>
			{servicesData.length > 0 && (
				<div className="services" id="services" style={{ backgroundColor: theme.secondary }}>
					<div className="services-header">
						<h1 style={{ color: theme.secondary70 }}>Services</h1>
					</div>
					<div className="services-body">
						<div className="services-bodycontainer">
							{servicesData.map(services => (
								<SingleService
									key={services.id}
									id={services.id}
									title={services.title}
									icon={services.icon} />
							))}
						</div>
						<div className="services-bodycontainer2">
						{/* <ButtonComponent id="formButtonComponent" label="Read More" link="./" width="18rem" height="4rem"/> */}

						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default Services
