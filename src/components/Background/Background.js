
import React, {useContext} from 'react';
import './Background.css';
import {ThemeContext} from '../../contexts/ThemeContext';
import {
	FaTwitter,
	FaLinkedinIn,
	FaGithub,
	FaYoutube,
	FaCodepen,
	FaInstagram,
	FaBootstrap,
	FaCss3Alt,
	FaReact,
} from 'react-icons/fa'; 
import { DiJavascript1 } from "react-icons/di";
import { makeStyles } from '@material-ui/core/styles';
 
function Background() {
	const { theme } = useContext(ThemeContext);

	const useStyles = makeStyles((t) => ({
		li: {
			border: `4px solid ${theme.primary80}`,
			backgroundColor: `${theme.secondary}`,
			color: `${theme.tertiary}`,
			fontFamily: 'var(--primaryFont)',
			fontWeight: 500,
			fontSize: '1.5rem',
				
			transition: 'border 0.01s ease-in-out',
			'&:focus': {
				color: `#a92ca2`,
			},
		},
		item: {
			border: `4px solid ${theme.primary80}`,
			backgroundColor: `${theme.secondary}`,
			color: `${theme.tertiary}`,
			fontFamily: 'var(--primaryFont)',
			fontWeight: 500,
			transition: 'border 1s ease-in-out',
			'&:focus': {
				color: `#a92ca2`,
			},
		}}))

		const classes = useStyles();
	return (
		<>
			<div className="area" >
				<ul className="circles ul item">
					<li><FaLinkedinIn aria-label='LinkedIn' /></li>
					<li><FaInstagram aria-label='Instagram' /></li>
					<li><FaGithub aria-label='GitHub' /></li>
					<li><FaTwitter aria-label='Twitter' /></li>
					<li><FaCodepen aria-label='CodePen' /></li>
					<li><FaYoutube aria-label='YouTube' /></li> 
					<li><FaBootstrap aria-label='Bootstrap' /></li> 
					<li><FaCss3Alt aria-label='CSS' /></li>
					<li><FaReact aria-label='React' /></li>
					<li><DiJavascript1 aria-label='React' /></li>

				</ul>

			</div >
			<div className="area" >
				<ul className="circles2 ul item">
					<li><FaLinkedinIn aria-label='LinkedIn' /></li>
					<li><FaInstagram aria-label='Instagram' /></li>
					<li><FaGithub aria-label='GitHub' /></li>
					<li><FaTwitter aria-label='Twitter' /></li>
					<li><FaCodepen aria-label='CodePen' /></li>
					<li><FaYoutube aria-label='YouTube' /></li> 
					<li><FaBootstrap aria-label='Bootstrap' /></li> 
					<li><FaCss3Alt aria-label='CSS' /></li>
					<li><FaReact aria-label='React' /></li>
					<li><DiJavascript1 aria-label='React' /></li>
				</ul>
			</div >
		</>

	)
}

export default Background

