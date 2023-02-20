import React from 'react';
import Marquee from "react-fast-marquee";
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import './Skills.css'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Paper from '@mui/material/Paper';
// import { theme } from '../../theme/theme';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));


function Skills() {
	const theme = useTheme();

	const skillBoxStyle = {
		color: theme.palette.primary.contrastText,
		backgroundColor: theme.palette.primary.main,
		boxShadow: `0px 0px 30px ${theme.palette.primary.contrastText}`
	}

	return (

		<div className="skills" id="skills" style={{ backgroundColor: theme.palette.background.paper }}>
			<div className="skillsHeader">
				<h2 style={{ color: theme.palette.text.main, backgroundColor: theme.palette.background.paper }}>Skills</h2>
			</div>
			<div className="skillsBody">
				<ImageList sx={{ width: '100%'}} cols={10} >
					{skillsData.map((skill, id) => (
						<ImageListItem key={id} sx={{ width: '90%'}}>
							<Item>
							<img
							style={{ height: '30px'}}
								src={`${skillsImage(skill)}`}
								srcSet={`${skillsImage(skill)}?w=164&h=164&fit=scale-down&auto=format`}
								alt={skillsImage(skill)}
								loading="lazy"
							/>
							</Item>
						</ImageListItem>
					))}
				</ImageList>
			</div>
		</div>
	)
}

export default Skills


