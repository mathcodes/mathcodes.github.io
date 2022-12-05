import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
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
									style={{ color: theme.secondary70 }}
									aria-label='GitHub'
								/>
							</a>
						)}
						{socialsData.twitter && (
							<a
								href={socialsData.twitter}
								target='_blank'
								rel='noreferrer'
							>
								<FaTwitter
									className='landing--social'
									style={{ color: theme.secondary70 }}
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
									style={{ color: theme.secondary70 }}
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
									style={{ color: theme.secondary70 }}
									aria-label='YouTube'
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
									style={{ color: theme.secondary70 }}
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
									style={{ color: theme.secondary70 }}
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
									rel='noreferrer'
								>
									<FaGithub
										className='landing--social2'
										style={{ color: theme.secondary70 }}
										aria-label='GitHub'
									/>
								</a>
							)}
							{socialsData.twitter && (
								<a
									href={socialsData.twitter}
									target='_blank'
									rel='noreferrer'
								>
									<FaTwitter
										className='landing--social2'
										style={{ color: theme.secondary70 }}
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
										className='landing--social2'
										style={{ color: theme.secondary70 }}
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
										className='landing--social2'
										style={{ color: theme.secondary70 }}
										aria-label='YouTube'
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
										className='landing--social2'
										style={{ color: theme.secondary70 }}
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
										className='landing--social2'
										style={{ color: theme.secondary70 }}
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
