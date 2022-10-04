
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
} from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import { GH } from '../../assets/svg/GH.svg';

function Background() {
	const { theme } = useContext(ThemeContext);

	const useStyles = makeStyles((t) => ({
		li: {
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
		item: {
			border: `4px solid ${theme.primary80}`,
			backgroundColor: `${theme.secondary}`,
			color: `${theme.tertiary}`,
			fontFamily: 'var(--primaryFont)',
			fontWeight: 500,
			transition: 'border 0.2s ease-in-out',
			'&:focus': {
				border: `4px solid ${theme.primary600}`,
			},
		}}))

		const classes = useStyles();
	return (
		<>
			<div className="area" >
				<ul className="circles ul">
					<li className={classes.label}><FaLinkedinIn aria-label='LinkedIn' /></li>
					<li><FaInstagram aria-label='Instagram' /></li>
					<li><FaGithub aria-label='GitHub' /></li>
					<li><FaTwitter aria-label='Twitter' /></li>
					<li><FaCodepen aria-label='CodePen' /></li>
					<li><FaYoutube aria-label='YouTube' className={classes.item}/></li>
					<li><img alt="jon portfolio" sr="../../assets/svg/GH.svg" /></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>

			</div >
			<div className="area" >
				<ul className="circles2">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div >
		</>

	)
}

export default Background

