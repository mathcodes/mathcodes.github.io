import React, { useContext, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AiOutlineHome } from "react-icons/ai";
import './ProjectPage.css'
import { SingleProject } from '../../components';
// import { ThemeContext } from '../../contexts/ThemeContext';
import { useTheme } from '@mui/material/styles';
import { projectsData } from '../../data/projectsData'
import { headerData } from '../../data/headerData'

function ProjectPage() {
	const [search, setSearch] = useState('')
	const theme = useTheme();
	// const { theme } = useContext(ThemeContext);
	const filteredArticles = projectsData.filter((project) => {
		const content = project.projectName + project.projectDesc + project.tags
		return content.toLowerCase().includes(search.toLowerCase())
	})
	const useStyles = makeStyles((t) => ({
		search: {
			color: theme.palette.text.main,
			width: '40%',
			height: '2.75rem',
			outline: 'none',
			border: 'none',
			borderRadius: '20px',
			padding: '0.95rem 1rem',
			fontFamily: "'Noto Sans TC', sans-serif",
			fontWeight: 500,
			fontSize: '0.9rem',
			backgroundColor: theme.palette.background.default,
			boxShadow: theme.type === 'dark' ? 'inset 3px 3px 6px #eaeaea, inset -3px -3px 6px #00000060' : 'inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030',
			"&::placeholder": {
				color: theme.tertiary80,
			},
			[t.breakpoints.down('sm')]: {
				width: '350px',
			},
		},
		home: {
			color: theme.secondary70,
			position: 'absolute',
			top: 25,
			left: 25,
			padding: '7px',
			borderRadius: '50%',
			boxSizing: 'content-box',
			fontSize: '2rem',
			cursor: 'pointer',
			boxShadow: theme.type === 'dark' ? '3px 3px 6px #ffffff40, -3px -3px 6px #00000050' : '3px 3px 6px #ffffff40, -3px -3px 6px #00000050',
			transition: 'all 0.3s ease-in-out',
			"&:hover":
			{
				color: theme.palette.text.light,
				backgroundColor: theme.palette.action.active,
				transform: 'scale(0.9)',
			},
			[t.breakpoints.down('sm')]: {
				fontSize: '1.8rem',
			},
		},
	}));
	const classes = useStyles();

	return (
		<div className="projectPage" style={{ color: theme.palette.text.main, backgroundColor: theme.palette.background.paper }}>
			<Helmet>
				<title>{headerData.name} | Projects</title>
			</Helmet>
			<div className="projectPage-header" style={{ backgroundColor: theme.primary }}>
				<Link to="/">
					<AiOutlineHome className={classes.home} />
				</Link>
				<h1 style={{ color: theme.secondary70 }}>Projects</h1>
			</div>
			<div className="projectPage-container">
				<div className="projectPage-search">
					<input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search project..." className={classes.search} />
				</div>
				<div className="project-container">
					<Grid className="project-grid" container direction="row" alignItems="center" justifyContent="center">
						{filteredArticles.map(project => (
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
				</div>
			</div>
		</div>
	)
}

export default ProjectPage