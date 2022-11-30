import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';
import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
	FaTwitter,
	FaLinkedin,
	FaGithub,
	FaYoutube,
	FaStackOverflow,
	FaCodepen,
} from 'react-icons/fa';
import { SiReplit } from 'react-icons/si';
function Landing() {
	const { theme, drawerOpen } = useContext(ThemeContext);

	const useStyles = makeStyles((t) => ({
		resumeBtn: {
			color: theme.primary,
			borderRadius: '30px',
			textTransform: 'inherit',
			textDecoration: 'none',
			width: '150px',
			fontSize: '.75rem',
			fontWeight: '500',
			height: '50px',
			fontFamily: 'var(--primaryFont)',
			border: `3px solid ${theme.primary}`,
			transition: '100ms ease-out',
			'&:hover': {
				backgroundColor: theme.primary,
				color: '#121212',
				border: `3px inset #121212`,
			},
			[t.breakpoints.down('sm')]: {
				width: '120px',
				height: '40px',
				fontSize: '0.6rem',
			},
		},

		contactBtn: {
			backgroundColor: theme.primary,
			color: theme.secondary,
			borderRadius: '30px',
			textTransform: 'inherit',
			textDecoration: 'none',
			width: '150px',
			height: '50px',
			fontSize: '.75rem',
			fontWeight: '500',
			fontFamily: 'var(--primaryFont)',
			border: `3px solid ${theme.primary}`,
			transition: '100ms ease-out',
			'&:hover': {
				backgroundColor: theme.secondary,
				color: theme.primary,
				border: `3px solid ${theme.tertiary}`,
			},
			[t.breakpoints.down('sm')]: {
				width: '120px',
				height: '40px',
				fontSize: '0.6rem',
				marginTop: '1rem',
			},
		},
	}));

	const classes = useStyles();

	return (
		<div className='landing'>
			<div className='landing--container'>
				<div
					className='landing--container-left'
					style={{ backgroundColor: theme.primary }}
				>
					<div className='lcl--content'>
						{socialsData.github && (
							<a
								href={socialsData.github}
								target='_blank'
								rel='noreferrer'
							>
								<FaGithub
									className='landing--social'
									style={{ color: theme.secondary }}
									aria-label='GitHub'
								/>
							</a>
						)}{socialsData.twitter && (
							<a
								href={socialsData.twitter}
								target='_blank'
								rel='noreferrer'
							>
								<FaTwitter
									className='landing--social'
									style={{ color: theme.secondary }}
									aria-label='Twitter'
								/>
							</a>
						)}
						{socialsData.linkedIn && (
							<a
								href={socialsData.linkedIn}
								target='_blank'
								rel='noreferrer'
							>
								<FaLinkedin
									className='landing--social'
									style={{ color: theme.secondary }}
									aria-label='LinkedIn'
								/>
							</a>
						)}
						{socialsData.youtube && (
							<a
								href={socialsData.youtube}
								target='_blank'
								rel='noreferrer'
							>
								<FaYoutube
									className='landing--social'
									style={{ color: theme.secondary }}
									aria-label='YouTube'
								/>
							</a>
						)}
						{socialsData.codepen && (
							<a
								href={socialsData.stackOverflow}
								target='_blank'
								rel='noreferrer'
							>
								<FaStackOverflow
									className='landing--social'
									style={{ color: theme.secondary }}
									aria-label='stackOverflow'
								/>
							</a>
						)}
						{socialsData.codepen && (
							<a
								href={socialsData.replit}
								target='_blank'
								rel='noreferrer'
							>
								<FaCodepen
									className='landing--social'
									style={{ color: theme.secondary }}
									aria-label='CodePen'
								/>
							</a>
						)}
						{socialsData.replit && (
							<a
								href={socialsData.replit}
								target='_blank'
								rel='noreferrer'
							>
								<SiReplit
									className='landing--social'
									style={{ color: theme.secondary }}
									aria-label='Replit'
								/>
							</a>
						)}
					</div>
				</div>
				<img
					src={headerData.image}
					alt=''
					className='landing--img'
					style={{
						opacity: `${drawerOpen ? '0' : '1'}`,
						borderColor: theme.secondary,
					}}
				/>
				<div
					className='landing--container-right'
					style={{ backgroundColor: theme.secondary }}
				>
					<div
						className='lcr--content'
						style={{ color: theme.tertiary }}
					>
						<h6>{headerData.title}</h6>
						<br />
						<h1>{headerData.name}</h1>
						<br />
						<p>{headerData.description}</p>

						<div className='lcr-buttonContainer'>
						 
								<a
									href={headerData.resumePdf}
									download='resume'
									target='_blank'
									rel='noreferrer'
								>
								<Button
								style={{
									backgroundColor: theme.primary,
									color: theme.secondary70,
									width: '8rem',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}} variant="contained">
									<a style={{ backgroundColor: 'none' }} href={headerData.resumePdf}>
								<h2>RESUME</h2></a>
							</Button>
								</a>
						 
								<Button
								style={{
									backgroundColor: theme.primary,
									color: theme.secondary70,
									width: '8rem',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}} variant="contained">
									<a style={{ backgroundColor: 'none' }} href="./formpage">
								<h2>CONTACT</h2></a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
