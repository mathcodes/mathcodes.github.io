import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import './Landing.css';
import { useTheme } from '@material-ui/core/styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
	FaTwitter,
	FaLinkedin,
	FaGithub,
	FaYoutube,
	FaCodepen,
} from 'react-icons/fa';
import { SiReplit } from 'react-icons/si';
function Landing() {
	const theme = useTheme();
	const { drawerOpen } = useContext(ThemeContext);

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
								rel="noopener noreferrer"
							>
								<FaGithub
									className='landing--social'
									aria-label='GitHub'
								/>
							</a>
						)}
						{socialsData.twitter && (
							<a
								href={socialsData.twitter}
								target='_blank'
								rel="noopener noreferrer"
							>
								<FaTwitter
									className='landing--social'
									aria-label='Twitter'
								/>
							</a>
						)}
						{socialsData.linkedIn && (
							<a
								href={socialsData.linkedIn}
								target='_blank'
								rel="noopener noreferrer"
							>
								<FaLinkedin
									className='landing--social'
									aria-label='LinkedIn'
								/>
							</a>
						)}
						{socialsData.youtube && (
							<a
								href={socialsData.youtube}
								target='_blank'
								rel="noopener noreferrer"
							>
								<FaYoutube
									className='landing--social'
									aria-label='YouTube'
								/>
							</a>
						)}
						{socialsData.codepen && (
							<a
								href={socialsData.replit}
								target='_blank'
								rel="noopener noreferrer"
							>
								<FaCodepen
									className='landing--social'
									aria-label='CodePen'
								/>
							</a>
						)}
						{socialsData.replit && (
							<a
								href={socialsData.replit}
								target='_blank'
								rel="noopener noreferrer"
							>
								<SiReplit
									className='landing--social'
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
						<br />
						<h1>{headerData.name}</h1>
						<div className='lcl--content2'>
							{socialsData.github && (
								<a
									href={socialsData.github}
									target='_blank'
									rel="noopener noreferrer"
								>
									<FaGithub
										className='landing--social2'
										aria-label='GitHub'
									/>
								</a>
							)}
							{socialsData.twitter && (
								<a
									href={socialsData.twitter}
									target='_blank'
									rel="noopener noreferrer"
								>
									<FaTwitter
										className='landing--social2'
										aria-label='Twitter'
									/>
								</a>
							)}
							{socialsData.linkedIn && (
								<a
									href={socialsData.linkedIn}
									target='_blank'
									rel="noopener noreferrer"
								>
									<FaLinkedin
										className='landing--social2'
										aria-label='LinkedIn'
									/>
								</a>
							)}
							{socialsData.youtube && (
								<a
									href={socialsData.youtube}
									target='_blank'
									rel="noopener noreferrer"
								>
									<FaYoutube
										className='landing--social2'
										aria-label='YouTube'
									/>
								</a>
							)}
							{socialsData.codepen && (
								<a
									href={socialsData.replit}
									target='_blank'
									rel="noopener noreferrer"
								>
									<FaCodepen
										className='landing--social2'
										aria-label='CodePen'
									/>
								</a>
							)}
							{socialsData.replit && (
								<a
									href={socialsData.replit}
									target='_blank'
									rel="noopener noreferrer"
								>
									<SiReplit
										className='landing--social2'
										aria-label='Replit'
									/>
								</a>
							)}
						</div>
						<br />
						<p>{headerData.description}</p>
						<div className='lcr-buttonContainer'>
							<a
								href={headerData.resumePdf}
								download='resume'
								target='_blank'
								rel="noopener noreferrer"
							>
								<Button
									className='landing--button'
									style={{
										backgroundColor: 'darkolivegreen',
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
									backgroundColor: 'darkolivegreen',
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
