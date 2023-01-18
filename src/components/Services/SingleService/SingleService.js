import React from 'react';
import Fade from 'react-reveal/Fade';

import { useTheme } from '@material-ui/core/styles';

import './SingleService.css'



function SingleService({ id, title, icon }) {

	const { theme } = useTheme();
	console.log(useTheme())
	console.log(theme)
	return (
		<>
			<div className="services--header">
						<h2 style={{ color: theme.secondary70 }}>Services</h2>
					</div>
					
		<Fade bottom>
			<div key={id} className="single-service" style={{ backgroundColor: theme.primary400 }}>
				<div className="service-content" style={{ color: theme.tertiary }}>
					<i className="service-icon">{icon}</i>
					<h4 style={{ color: theme.tertiary }}>{title}</h4>
				</div>
			</div>
		</Fade></>
	)
}

export default SingleService
