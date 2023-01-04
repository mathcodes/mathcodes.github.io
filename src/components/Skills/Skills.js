import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import { Container } from '@material-ui/core';
import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {

	const { theme } = useContext(ThemeContext);

	const skillBoxStyle = {
		backgroundColor: theme.secondary,
		boxShadow: `0px 0px 30px ${theme.primary30}`
	}

	return (
		<Container>
		<div className="skills" id="skills">
				<div style={{ backgroundColor: theme.secondary70, height: '1rem' }}> </div>

			<div className="skillsHeader">
					<div style={{ backgroundColor: theme.secondary50, height: '1rem' }}> </div>
				<h2 style={{ }}>Skills</h2>
			</div>
			<div className="skillsContainer">
				<div className="skill--scroll">
					<Marquee
						gradient={true}
						speed={30}
						pauseOnHover={true}
						pauseOnClick={true} 
						delay={0}
						play={true}
						direction="left"
					>
						{skillsData.map((skill, id) => (
							<div className="skill--box" key={id} style={skillBoxStyle}>
								<img src={skillsImage(skill)} alt={skill} />
								<h3 style={{ color: theme.tertiary }}>
									{skill}
								</h3>
							</div>
						))}
					</Marquee>
				</div>
			</div>
		</div>
		</Container>
	)
}

export default Skills


