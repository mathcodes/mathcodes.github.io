/* eslint-disable no-undef */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	FaTwitter,
	FaLinkedinIn,
	FaGithub,
	FaYoutube,
	FaStackOverflow,
	FaCodepen,
} from 'react-icons/fa';
import { SiReplit } from 'react-icons/si';
import { ThemeContext } from '../../contexts/ThemeContext';
import { socialsData } from '../../data/socialsData';
import './SocialMediaIcons.css';


function SocialMediaIcons() {
  const { theme } = useContext(ThemeContext);

	const useStyles = makeStyles((t) => ({
		input: {
			border: `4px solid ${theme.primary80}`,
			backgroundColor: `${theme.secondary}`,
			color: `purple`,
			fontFamily: 'var(--primaryFont)',
			fontWeight: 500,
			transition: 'border 0.2s ease-in-out',
			'&:focus': {
				border: `4px solid ${theme.primary600}`,
				color: 'black',
			},
		},

		label: {
			backgroundColor: `${theme.secondary}`,
			color: `${theme.primary}`,
			fontFamily: 'var(--primaryFont)',
			fontWeight: 600,
			// fontSize: '0.9rem',
			padding: '0 5px',
			transform: 'translate(25px,50%)',
			display: 'inline-flex',
			'&:hover': {
				transform: 'scale(1.1)',
				color: '#000',
				backgroundColor: theme.tertiary,
			},
		},
		socialIcon: {
			width: '55px',
			height: '55px',
			borderRadius: '50%',
			border: `2px solid #232526`,
			fontSize: '45px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '5px',
			backgroundColor: 'none',
			color: theme.secondary,
			transition: '250ms ease-in-out',
			'&:hover': {

				color: '#000',
				backgroundColor: theme.tertiary,
			},
		},
		detailsIcon: {
			backgroundColor: '#667',
			color: '#232526',
			borderRadius: '50%',
			border: '2px solid #232526',
			width: '45px',
			height: '45px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: '23px',
			transition: '250ms ease-in-out',
			flexShrink: 0,
			'&:hover': {
				transform: 'scale(1.1)',
				color: '#667',
				backgroundColor: '#232526',
			},
			typoImpo: {
				color: theme.secondary,
			}
		},

	}));

	const classes = useStyles();
  return (
    <div className='socialmedia-icons'>
							{socialsData.github && (
								<a
									href={socialsData.github}
									target='_blank'
									rel="noopener noreferrer"
									className={classes.socialIcon}
								>
									<FaGithub aria-label='GitHub' className="localIcon" />
								</a>
							)}
							{socialsData.twitter && (
								<a
									href={socialsData.twitter}
									target='_blank'
									rel="noopener noreferrer"
									className={classes.socialIcon}
								>
									<FaTwitter aria-label='Twitter' className="localIcon" />
								</a>
							)}
							{socialsData.linkedIn && (
								<a
									href={socialsData.linkedIn}
									target='_blank'
									rel="noopener noreferrer"
									className={classes.socialIcon}
								>
									<FaLinkedinIn aria-label='LinkedIn' className="localIcon" />
								</a>
							)}
							{socialsData.youtube && (
								<a
									href={socialsData.youtube}
									target='_blank'
									rel="noopener noreferrer"
									className={classes.socialIcon}
								>
									<FaYoutube aria-label='YouTube' className="localIcon" />
								</a>
							)}
							{socialsData.stackOverflow && (
								<a
									href={socialsData.stackOverflow}
									target='_blank'
									rel="noopener noreferrer"
									className={classes.socialIcon}
								>
									<FaStackOverflow aria-label='Stack Overflow' className="localIcon" />
								</a>
							)}
							{socialsData.codepen && (
								<a
									href={socialsData.codepen}
									target='_blank'
									rel="noopener noreferrer"
									className={classes.socialIcon}
								>
									<FaCodepen aria-label='CodePen' className="localIcon" />
								</a>
							)}
							{socialsData.replit && (
								<a
									href={socialsData.replit}
									target='_blank'
									rel="noopener noreferrer"
									className={classes.socialIcon}
								>
									<SiReplit aria-label='replit' className="localIcon" />
								</a>
							)}
						</div>
  )
}

export default SocialMediaIcons;