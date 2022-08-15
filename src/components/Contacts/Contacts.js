/* eslint-disable no-undef */
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
	const [open, setOpen] = useState(false);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const [success, setSuccess] = useState(false);
	const [errMsg, setErrMsg] = useState('');

	const { theme } = useContext(ThemeContext);



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
			color: `${theme.tertiary}`,
			fontFamily: 'var(--primaryFont)',
			fontWeight: 500,
			transition: 'border 0.2s ease-in-out',
			'&:focus': {
				border: `4px solid ${theme.primary600}`,
			},
		},
		message: {
			border: `4px solid ${theme.primary80}`,
			backgroundColor: `${theme.secondary}`,
			color: `${theme.tertiary}`,
			fontFamily: 'var(--primaryFont)',
			fontWeight: 500,
			transition: 'border 0.2s ease-in-out',
			'&:focus': {
				border: `4px solid ${theme.primary600}`,
			},
		},
		label: {
			backgroundColor: `${theme.secondary}`,
			color: `${theme.primary}`,
			fontFamily: 'var(--primaryFont)',
			fontWeight: 600,
			fontSize: '0.9rem',
			padding: '0 5px',
			transform: 'translate(25px,50%)',
			display: 'inline-flex',
		},
		socialIcon: {
			width: '45px',
			height: '45px',
			borderRadius: '50%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: '21px',
			backgroundColor: theme.primary,
			color: theme.secondary,
			transition: '250ms ease-in-out',
			'&:hover': {
				transform: 'scale(1.1)',
				color: theme.secondary,
				backgroundColor: theme.tertiary,
			},
		},
		detailsIcon: {
			backgroundColor: theme.primary,
			color: theme.secondary,
			borderRadius: '50%',
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
				color: theme.secondary,
				backgroundColor: theme.tertiary,
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
			<div className='contacts--container'>
				<h1 style={{ color: theme.primary }}>Contacts</h1>
				<div className='contacts-body'>

					<div className='contacts-details'>
						<a
							href={`mailto:${contactsData.email}`}
							className='personal-details'
						>
							<div className={classes.detailsIcon}>
								<FiAtSign />
							</div>
							<p style={{ color: theme.tertiary }}>
								<a href={`tomail:${contactsData.email}`}>{contactsData.email}</a>
							</p>
						</a>
						<a
							href={`tel:${contactsData.phone}`}
							className='personal-details'
						>
							<div className={classes.detailsIcon}>
								<FiPhone />
							</div>
							<p style={{ color: theme.tertiary }}>
								<a href={`tel:${contactsData.phone}`}>{contactsData.phone}</a>
							</p>
						</a>
						<div className='personal-details'>
							<div className={classes.detailsIcon}>
								<HiOutlineLocationMarker />
							</div>
							<p style={{ color: theme.tertiary }}>
								<a href={`https://www.google.com/maps/place/${contactsData.address}`}>Carrboro, NC</a>
							</p>
						</div>

						<div className='socialmedia-icons'>
							{socialsData.github && (
								<a
									href={socialsData.github}
									target='_blank'
									rel='noreferrer'
									className={classes.socialIcon}
								>
									<FaGithub aria-label='GitHub' />
								</a>
							)}
							{socialsData.twitter && (
								<a
									href={socialsData.twitter}
									target='_blank'
									rel='noreferrer'
									className={classes.socialIcon}
								>
									<FaTwitter aria-label='Twitter' />
								</a>
							)}

							{socialsData.linkedIn && (
								<a
									href={socialsData.linkedIn}
									target='_blank'
									rel='noreferrer'
									className={classes.socialIcon}
								>
									<FaLinkedinIn aria-label='LinkedIn' />
								</a>
							)}

							{socialsData.youtube && (
								<a
									href={socialsData.youtube}
									target='_blank'
									rel='noreferrer'
									className={classes.socialIcon}
								>
									<FaYoutube aria-label='YouTube' />
								</a>
							)}
							{socialsData.stackOverflow && (
								<a
									href={socialsData.stackOverflow}
									target='_blank'
									rel='noreferrer'
									className={classes.socialIcon}
								>
									<FaStackOverflow aria-label='Stack Overflow' />
								</a>
							)}
							{socialsData.codepen && (
								<a
									href={socialsData.codepen}
									target='_blank'
									rel='noreferrer'
									className={classes.socialIcon}
								>
									<FaCodepen aria-label='CodePen' />
								</a>
							)}
							{socialsData.replit && (
								<a
									href={socialsData.replit}
									target='_blank'
									rel='noreferrer'
									className={classes.socialIcon}
								>
									<SiReplit aria-label='replit' />
								</a>
							)}
						</div>
					</div>
				</div>
				{/* <div style={{color: theme.primary}} variant="body2" align="center">
					
					<a style={{color: theme.primary}} href="https://jonchristie.net/">
						jonchristie.net
					</a>{' ©'}{new Date().getFullYear()}
					
				</div> */}
			</div>

		</div>
	);
}

export default Contacts;
