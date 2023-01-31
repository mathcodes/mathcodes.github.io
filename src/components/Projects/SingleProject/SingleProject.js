import React from 'react';
import { FaCode } from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';
import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';
// import { theme } from '../../../theme/theme';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

function Item(props) {
	const { sx, ...other } = props;
	const theme = useTheme();
	
	return (
		<Box
			sx={{

				pl: .8,
				p: '0.2rem',
				m: '0.2rem',
				ml: '0.9rem',
				height: '1.5rem',
				bgcolor: theme.palette.grey[400],
				color: theme.palette.primary.contrastText,
				border: '1px solid',
				borderRadius: 2,
				fontSize: '0.875rem',
				fontWeight: '400',
				...sx,
			}}
			{...other}
		/>
	);
}

export function SingleProject({ id, name, desc, tags, code, demo, image, theme, alt }) {
	const [value, setValue] = React.useState(0);



	return (
		<Fade bottom>
			<div
				key={id}
				className='singleProject'
				style={{ 
					background: theme.palette.background.paper,
					backgroundHover: theme.palette.background.paper, 
					color: theme.palette.text.main,
					'&:hover': {
						backgroundColor: theme.palette.grey[900],
						color: theme.palette.text.light
					},
				}}
			>
				<div className='projectContent'>
					<h2
						id={name.replace(' ', '-').toLowerCase()}
					>
						{name}
					</h2>
					<img src={image ? image : placeholder} alt={alt} />

				</div>
				<p
					className='project--desc'
					style={{
						background: theme.palette.background.paper,
						color: theme.palette.action.active,
						display: `flex`,
						flexDirection: 'right',
						alignItems: `center`,
						justifyContent: `center`,
						width: '97%',
						 
					}}
				><div>

						<div className="ProjDesc" style={{
						background: theme.palette.background.paper,
						color: theme.palette.text.main,
						display: `flex`,
						flexDirection: 'right',
						alignItems: `center`,
						justifyContent: `center`,
						width: '97%',
						'&:hover': {
							backgroundColor: theme.palette.grey[900],
							color: theme.palette.text.light
						},
					}}>{desc}</div>
						 
							{tags.map((tag, id) => (
								<Item style={{width:"80%"}}>
									{tag}
								</Item>
							))}
					 
						<BottomNavigation
							showLabels
							style={{ background: 'none', borderRadius: "10px", border: 'rgba(0,0,0,0,)' }}
							value={value}
							onChange={(event, newValue) => {
								setValue(newValue);
							}}
						>
							<a
								href={demo}
								target='_blank'
								rel="noopener noreferrer"
								style={{  borderRadius: "30px"}}

								aria-labelledby={`${name
									.replace(' ', '-')
									.toLowerCase()} ${name
										.replace(' ', '-')
										.toLowerCase()}-demo`}
							>
								<BottomNavigationAction style={{ margin: ".5rem", color: theme.palette.grey[400], background: "none", fontSize: "2rem" }} icon={<HiLink />} /></a>
							<a
								href={code}
								target='_blank'
								rel="noopener noreferrer"
								aria-labelledby={`${name
									.replace(' ', '-')
									.toLowerCase()} ${name
										.replace(' ', '-')
										.toLowerCase()}-code`}
							>
								<BottomNavigationAction style={{ margin: ".5rem", color: theme.palette.grey[400], border: "none", background: "none", fontSize: "2rem" }} icon={<FaCode />} />
							</a>

						</BottomNavigation>

					</div>
				</p>

			</div>
		</Fade>
	);
}

export default SingleProject;
