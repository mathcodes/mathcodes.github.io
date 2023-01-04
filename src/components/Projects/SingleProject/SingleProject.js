import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FaCode } from 'react-icons/fa';
import { HiLink } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';
import placeholder from '../../../assets/png/placeholder.png';
import './SingleProject.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box, { BoxProps } from '@mui/material/Box';

function Item(props) {
	const { sx, ...other } = props;
	return (
		<Box
			sx={{
				p: 1,
				m: 1,
				bgcolor: (theme) => (theme.palette.mode === 'light' ? '#101010' : 'grey.100'),
				color: (theme) => (theme.palette.mode === 'light' ? 'grey.300' : 'grey.800'),
				border: '1px solid',
				borderColor: (theme) =>
					theme.palette.mode === 'light' ? 'grey.800' : 'grey.300',
				borderRadius: 2,
				fontSize: '0.875rem',
				fontWeight: '700',
				...sx,
			}}
			{...other}
		/>
	);
}
function SingleProject({ id, name, desc, tags, code, demo, image, theme }) {
	const [value, setValue] = React.useState(0);


	const useStyles = makeStyles((t) => ({
		iconBtn: {
			display: 'flex',
			margin: '0.5rem',
			alignItems: 'center',
			justifyContent: 'center',
			width: 40,
			height: 40,
			borderRadius: 5,
			border: `2px solid ${theme.tertiary}`,
			color: theme.tertiary,
			transition: 'all 0.2s',
			'&:hover': {
				backgroundColor: theme.secondary70,
				color: theme.primary,
				transform: 'scale(1.1)',
				border: `2px solid ${theme.secondary}`,
			},
		},
		iconBtn: {
			display: 'flex',
			// margin: '0.5rem',
			alignItems: 'center',
			justifyContent: 'center',
			width: 40,
			height: 30,
			borderRadius: 5,
			border: `2px solid ${theme.tertiary}`,
			color: theme.tertiary,
			transition: 'all 0.2s',
			'&:hover': {
				backgroundColor: theme.secondary70,
				color: theme.primary,
				transform: 'scale(1.1)',
				border: `2px solid ${theme.secondary}`,
			},
		},
		icon: {
			fontSize: '1.1rem',
			transition: 'all 0.2s',
			'&:hover': {},
		},
	}));

	let classes = makeStyles();
	return (
		<Fade bottom>
			<div
				key={id}
				className='singleProject'
				style={{ backgroundColor: theme.primary400 }}
			>
				<div className='projectContent'>
					<h2
						id={name.replace(' ', '-').toLowerCase()}
						style={{ color: theme.tertiary, height: '3.2px' }}
					>
						{name}
					</h2>
					<img src={image ? image : placeholder} alt={name} />
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
				>
					<div>
						<div className="ProjDesc">{desc}</div>
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								p: .1,
								m: .1,
								bgcolor: '#222',
								border: "#eaeaea 2px solid",
								maxWidth: 300,
								borderRadius: 1,
								height: '100.47px'
							}}
						>
							{tags.map((tag, id) => (
								<Item>
									{tag}
								</Item>
							))}
						</Box>


						{/* {tags.map((tag, id) => ( */}
						{/* // 	<ul>
					// 	<div class="col"><span style={{padding:`.1rem`}} key={id}>{tag}</span></li>
					// </ul> */}

						{/* <div className='project--showcaseBtn'>
						<a
							href={demo}
							target='_blank'
							rel='noreferrer'
							className={classes.iconBtn}
							aria-labelledby={`${name
								.replace(' ', '-')
								.toLowerCase()} ${name
									.replace(' ', '-')
									.toLowerCase()}-demo`}
						>
							<HiLink />
						</a>
						<a
							href={code}
							target='_blank'
							rel='noreferrer'
							className={classes.iconBtn}
							aria-labelledby={`${name
								.replace(' ', '-')
								.toLowerCase()} ${name
									.replace(' ', '-')
									.toLowerCase()}-code`}
						>
							<FaCode />
						</a>
					</div> */}
						<BottomNavigation
							showLabels
							style={{ 
								background: '#519ba5', 
								borderRadius: "10px",
								border: 'rgba(0,0,0,0,)',
								// create hover effect
								
							}}
							value={value}
							onChange={(event, newValue) => {
								setValue(newValue);
							}}
						>
							<a
								href={demo}
								target='_blank'
								rel='noreferrer'

								aria-labelledby={`${name
									.replace(' ', '-')
									.toLowerCase()} ${name
										.replace(' ', '-')
										.toLowerCase()}-demo`}
							>


								<BottomNavigationAction style={{ 
									margin: ".5rem", 
									color: "#fff", 
									background: "#333", 
									fontSize: "2rem",
									'&:hover': {
										background: 'yellow',
									}
								}} icon={<HiLink />} /></a>

							<a
								href={code}
								target='_blank'
								rel='noreferrer'
								className={classes.iconBtn}
								aria-labelledby={`${name
									.replace(' ', '-')
									.toLowerCase()} ${name
										.replace(' ', '-')
										.toLowerCase()}-code`}
							>

								<BottomNavigationAction style={{ margin: ".5rem", color: "#fff", border: "none", background: "#333", fontSize: "2rem" }} icon={<FaCode />} />

							</a>

						</BottomNavigation>

					</div>
				</p>

			</div>
		</Fade>
	);
}

export default SingleProject;
