import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { Grid, Container } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import { HiArrowRight } from "react-icons/hi";
import './Projects.css'
import SingleProject from './SingleProject/SingleProject';

function Projects() {

	const { theme } = useContext(ThemeContext);

	const useStyles = makeStyles(() => ({
		viewAllBtn: {
			color: '#eaeaea',
			fontFamily: "'Poppins', sans-serif",
			backgroundColor: '#232526',
			borderRadius: '10px',
			fontSize: '2rem',
			padding: '1rem',
			transition: 'color 0.2s',
			"&:hover": {
				color: '#232526',
				backgroundColor: '#eaeaea	',
				fontFamily: "'Poppins', sans-serif"
			}
		},
		viewArr: {
			color: theme.tertiary,
			backgroundColor: theme.secondary70,
			width: '40px',
			height: '40px',
			padding: '0.5rem',
			fontSize: '1.05rem',
			borderRadius: '50%',
			cursor: 'pointer',
			transition: 'background-color 0.2s',
			"&:hover": {
				color: theme.tertiary,
				backgroundColor: theme.secondary,
			}
		},
	}));

	const classes = useStyles();

	return (
		<>
				<div style={{ backgroundColor: theme.secondary50, height: '1rem' }}> </div>

			{projectsData.length > 0 && (
				<Container className="projects" id="projects" style={{ backgroundColor: theme.secondary }}>
					<Grid className="projects--header">
						<h1 style={{ color: theme.secondary70 }}>Projects</h1>
					</Grid>
					<Grid item xs={1} sm={1} md={2} lg={4} className="projects--body">
						<Grid className="projects--bodyContainer">
							{projectsData.slice(0, 4).map(project => (
								<SingleProject
									theme={theme}
									key={project.id}
									id={project.id}
									name={project.projectName}
									desc={project.projectDesc}
									tags={project.tags}
									code={project.code}
									demo={project.demo}
									image={project.image}
								/>
							))}
						</Grid>
					</Grid>
					{/* <div className="break"><hr /><hr /><hr /><hr /><hr /></div>
					<div className="break"><hr /><hr /><hr /><hr /><hr /></div> */}
					{/* <div className="projects--bodyContainer">
						{projectsData.slice(4, 8).map(project => (
							<SingleProject
								theme={theme}
								key={project.id}
								id={project.id}
								name={project.projectName}
								desc={project.projectDesc}
								tags={project.tags}
								code={project.code}
								demo={project.demo}
								image={project.image}
							/>
						))}
					</div> */}
					<div>
						<h1 style={{color:'#777777'}}className="projects--body">Viewing 4 of {projectsData.length} projects</h1>
					</div>
					{projectsData.length > 3 && (
							<div className="projects--viewAll">
								<Link to="/projects">
									<button className={classes.viewAllBtn}>
										View All 	⇨
									</button>
								</Link>
							</div>
						)}
				</Container>
			)}
		</>
	)
};

export default Projects;