import React from 'react';
import { FaCode } from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';
import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';

function Item(props) {
	const { sx, ...other } = props;
	return (
		<Box
			sx={{

				pl: .8,
				p: '0.2rem',
				m: '0.2rem',
				ml: '0.9rem',
				height: '1.5rem',
				bgcolor: '#109910',
				color: 'grey.800',
				border: '1px solid',
				borderColor: (theme) =>
					theme.palette.mode === '#101010',
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
				style={{ backgroundColor: "#fe6600" }}
			>
				<div className='projectContent'>
					<h2
						id={name.replace(' ', '-').toLowerCase()}
						style={{ color: theme.tertiary, height: '40.2px' }}
					>
						{name}
					</h2>
					<img src={image ? image : placeholder} alt={alt} />

				</div>
				<p
					className='project--desc'
					style={{
						background: '#222',
						color: theme.tertiary,
						display: `flex`,
						flexDirection: 'right',
						alignItems: `center`,
						justifyContent: `center`,
						width: '97%',

					}}
				><div>

						<div className="ProjDesc">{desc}</div>
						 
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
								<BottomNavigationAction style={{ margin: ".5rem", color: "purple", background: "none", fontSize: "2rem" }} icon={<HiLink />} /></a>
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
								<BottomNavigationAction style={{ margin: ".5rem", color: "#fe6600", border: "none", background: "none", fontSize: "2rem" }} icon={<FaCode />} />
							</a>

						</BottomNavigation>

					</div>
				</p>

			</div>
		</Fade>
	);
}

export default SingleProject;
