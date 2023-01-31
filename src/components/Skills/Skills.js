import React from 'react';
import Marquee from "react-fast-marquee";
import { useTheme } from '@mui/material/styles';

import './Skills.css'
// import { theme } from '../../theme/theme';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {
	const theme = useTheme();

	const skillBoxStyle = {
		color: theme.palette.primary.contrastText,
		backgroundColor: theme.palette.primary.main,
		boxShadow: `0px 0px 30px ${theme.palette.primary.contrastText}`
	}
	
	return (
		
		<div className="skills" id="skills" style={{backgroundColor:theme.palette.background.paper}}>
			<div className="skillsHeader">
				<h2 style={{color:theme.palette.text.main, backgroundColor:theme.palette.background.paper}}>Skills</h2>
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
								<h3 style={{ color: theme.palette.primary.contrastText }}>
									{skill}
								</h3>
							</div>
						))}
					</Marquee>
				</div>
			</div>
		</div>
	)
}

export default Skills


