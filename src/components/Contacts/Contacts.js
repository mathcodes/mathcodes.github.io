/* eslint-disable no-undef */
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import {
	FaTwitter,
	FaLinkedinIn,
	FaGithub,
	FaYoutube,
	FaStackOverflow,
	FaCodepen,
	FaInstagram,
} from 'react-icons/fa';
import { SiReplit } from 'react-icons/si';
import { FiPhone, FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import { ThemeContext } from '../../contexts/ThemeContext';

import { socialsData } from '../../data/socialsData';
import { contactsData } from '../../data/contactsData';
import './Contacts.css';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://jonchristie.net/">
				jonchristie.net
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

function Contacts() {
	const { theme, theme2 } = useContext(ThemeContext);
	const [open, setOpen] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const [success, setSuccess] = useState(false);
	const [errMsg, setErrMsg] = useState('');


	// const theme2 = createTheme({
	// 	spacing: [0, 4, 8, 16, 32, 64],
	// });


	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};

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
		// message: {
		// 	border: `4px solid ${theme.primary80}`,
		// 	backgroundColor: `${theme.secondary}`,
		// 	color: `${theme.tertiary}`,
		// 	fontFamily: 'var(--primaryFont)',
		// 	fontWeight: 500,
		// 	transition: 'border 0.2s ease-in-out',
		// 	'&:focus': {
		// 		border: `4px solid ${theme.primary600}`,
		// 	},
		// },
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
			border: `2px solid #4faeba`,
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
			color: '#4faeba',
			borderRadius: '50%',
			border: '2px solid #4faeba',
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
				backgroundColor: '#4faeba',
			},
			typoImpo: {
				color: theme.secondary,
			}
		},

	}));

	const classes = useStyles();

	return (
		<div
			className='contacts'
			id='contacts'
			style={{ backgroundColor: theme.secondary }}
		>
			<CssBaseline />
			<Container maxWidth="sm">
				<Box sx={{ bgcolor: 'none', height: 'fitContent' }} />
				<div className='contacts--container'>
					<h1>Contact</h1>

					<div className='contacts-body'>

						<div className='contacts-details'>
							<a
								href={`mailto:${contactsData.email}`}
								className='personal-details'
							>
								<div className={classes.detailsIcon}>
									<FiAtSign />
								</div>
								<p>
									{contactsData.email}
								</p>
							</a>

							<a
								href={`tel:${contactsData.phone}`}
								className='personal-details'
							>
								<div className={classes.detailsIcon}>
									<FiPhone />
								</div>
								<p>
									{contactsData.phone}
								</p>
							</a>

							<a
								href={`https://www.google.com/maps/place/${contactsData.address}`}
								className='personal-details'
							>
								<div className={classes.detailsIcon}>
									<HiOutlineLocationMarker />
								</div>
								<p>
									{contactsData.address}

								</p>
							</a>


						</div>
					</div>
				</div>
			</ Container>
			<Container maxWidth="sm">
				<Box sx={{
					bgcolor: 'none',
					border: '2px solid #4faeba',
					height: 'fitContent',
					borderRadius: '20px',
					m: theme2.spacing()
				}}
				>

					<div className='socialmedia-icons'>
						{socialsData.github && (
							<a
								href={socialsData.github}
								target='_blank'
								rel='noreferrer'
								className={classes.socialIcon}
							>
								<FaGithub aria-label='GitHub' className="localIcon" />
							</a>
						)}
						{socialsData.twitter && (
							<a
								href={socialsData.twitter}
								target='_blank'
								rel='noreferrer'
								className={classes.socialIcon}
							>
								<FaTwitter aria-label='Twitter' className="localIcon" />
							</a>
						)}

						{socialsData.linkedIn && (
							<a
								href={socialsData.linkedIn}
								target='_blank'
								rel='noreferrer'
								className={classes.socialIcon}
							>
								<FaLinkedinIn aria-label='LinkedIn' className="localIcon" />
							</a>
						)}

						{socialsData.youtube && (
							<a
								href={socialsData.youtube}
								target='_blank'
								rel='noreferrer'
								className={classes.socialIcon}
							>
								<FaYoutube aria-label='YouTube' className="localIcon" />
							</a>
						)}
						{socialsData.stackOverflow && (
							<a
								href={socialsData.stackOverflow}
								target='_blank'
								rel='noreferrer'
								className={classes.socialIcon}
							>
								<FaStackOverflow aria-label='Stack Overflow' className="localIcon" />
							</a>
						)}
						{socialsData.codepen && (
							<a
								href={socialsData.codepen}
								target='_blank'
								rel='noreferrer'
								className={classes.socialIcon}
							>
								<FaCodepen aria-label='CodePen' className="localIcon" />
							</a>
						)}
						{socialsData.replit && (
							<a
								href={socialsData.replit}
								target='_blank'
								rel='noreferrer'
								className={classes.socialIcon}
							>
								<SiReplit aria-label='replit' className="localIcon" />
							</a>
						)}
					</div>
				</Box>
			</Container>
			{/*  */}




			{/* NEXT SECTION */}
			{/* */}
			{/* <footer style={{color: theme.primary}} variant="body2" align="center">
					
					<a style={{color: theme.primary}} href="https://jonchristie.net/">
						jonchristie.net
					</a>{' ©'}{new Date().getFullYear()}
					
				</footer> */}
			{/* </div>  */}

		</div>
	);
}

export default Contacts;
