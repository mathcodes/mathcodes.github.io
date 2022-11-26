import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { projectsData } from '../../data/projectsData'
import './Projects.css'
import SingleProject from './SingleProject/SingleProject';

function Projects() {

	const { theme } = useContext(ThemeContext);

	return (
		<>
				<div style={{ backgroundColor: theme.secondary50, height: '1rem' }}> </div>

			{projectsData.length > 0 && (
				<div className="projects" id="projects" style={{ backgroundColor: theme.secondary }}>
					<div className="projects--header">
						<h1 style={{ color: theme.secondary70 }}>Projects</h1>
					</div>
					<div className="projects--body">
						<div className="projects--bodyContainer">
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
						</div>
					</div>
					<div className="break"><hr /><hr /><hr /><hr /><hr /></div>
					<div className="break"><hr /><hr /><hr /><hr /><hr /></div>
					<div className="projects--bodyContainer">
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
					</div>
				</div>
			)}
		</>
	)
};

export default Projects;