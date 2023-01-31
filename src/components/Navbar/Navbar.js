import React, { useContext, useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import Fade from 'react-reveal/Fade';
import { IoMenuSharp, IoHomeSharp } from 'react-icons/io5';
import { HiDocumentText } from 'react-icons/hi';
import { BsFillGearFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { AiFillProject } from 'react-icons/ai';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@material-ui/icons/Close';
import './Navbar.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData'
import { useTheme } from '@mui/material/styles';

function Navbar() {
	const { themeState, setHandleDrawer } = useContext(ThemeContext); //useContext accepts ThemeContext and set to  destructured the theme and setHandleDrawer
	const theme = useTheme();
	const [open, setOpen] = useState(false);

	// handler function for drawer that sets the state of the drawer to Open and calls 	the setHandleDrawer function in the ThemeContext
	const handleDrawerOpen = () => {
		setOpen(true);
		setHandleDrawer();
	};

	const handleDrawerClose = () => {
		setOpen(false);
		setHandleDrawer();
	};

	const useStyles = makeStyles((t) => ({
		navMenu: {
			fontSize: '2.5rem',
			color: t.palette.text.main,
			cursor: 'pointer',
			transform: 'translateY(-10px)',
			transition: 'color 0.3s',
			'&:hover': {
				color: t.palette.action.active,
			},
			[t.breakpoints.down('sm')]: {
				fontSize: '2.5rem',
			},
			[t.breakpoints.down('xs')]: {
				fontSize: '2rem',
			},
		},
		MuiDrawer: {
			padding: '0em 1.8em',
			width: '14em',
			fontFamily: ' var(--primaryFont)',
			fontStyle: ' normal',
			fontWeight: ' normal',
			fontSize: ' 24px',
			background: t.palette.action.active,
			color: t.palette.text.main,
			overflow: 'hidden',
			borderTopRightRadius: '40px',
			borderBottomRightRadius: '40px',
			[t.breakpoints.down('sm')]: {
				width: '12em',
			},
		},
		bgStyle: {

			fontSize: '1rem',
			height: '1em',
			paddingTop: '5%',
			[t.breakpoints.down('sm')]: {
				paddingTop: '13%',
			},
			background: `url(${headerData.BG2})`,
			'&:hover': {
				background: `url(${headerData.BG})`,
			},
			
		},

		closebtnIcon: {
			fontSize: '2rem',
			fontWeight: 'bold',
			cursor: 'pointer',
			color: t.palette.text.main,
			position: 'absolute',
			right: 40,
			top: 40,
			transition: 'color 0.2s',
			'&:hover': {
				color: t.palette.action.active,
			},
			[t.breakpoints.down('sm')]: {
				right: 20,
				top: 20, 
			},
		},
		drawerItem: {
			margin: '2rem auto',
			borderRadius: '78.8418px',
			background: t.palette.background.default,
			color: t.palette.text.main,
			width: '85%',
			height: '60px',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-evenly',
			padding: '0 30px',
			boxSizing: 'border-box',
			border: '2px solid',
			borderColor: t.palette.action.active,
			transition: 'background-color 0.2s, color 0.2s',
			'&:hover': {
				background: t.palette.text.main,
				color: t.palette.background.default,
				border: '1px solid #232526',
			},
			[t.breakpoints.down('sm')]: {
				width: '100%',
				padding: '0 25px',
				height: '55px',
			},
		},
		drawerLinks: {
			marginRight: '1.5rem',
			fontFamily: 'var(--primaryFont)',
			width: '50%',
			fontSize: '1.3rem',
			fontWeight: 600,
			[t.breakpoints.down('sm')]: {
				fontSize: '1.125rem',
			},
		},
		drawerIcon: {
			fontSize: '1.6rem',
			[t.breakpoints.down('sm')]: {
				fontSize: '1.385rem',
			},
		},
	}));

	const classes = useStyles();

	const shortname = (name) => {
		if (name.length > 12) {
			return name.split(' ')[0];
		} else {
			return name;
		}
	};

	const imageHandler = theme.palette.mode === 'dark' ? headerData.BG2 : headerData.BG
	

	return (
		<div className='navbar'>
			<div className='navbar--container'>

				<img alt="jon christie web developer resume job portfolio" src={imageHandler} className={classes.bgStyle} />

				<IoMenuSharp
					className={classes.navMenu}
					onClick={handleDrawerOpen}
					aria-label='Menu'
				/>
			</div>
			<Drawer
				variant='temporary'
				onClose={(event, reason) => {
					if (reason !== 'backdropClick') {
						handleDrawerClose();
					} else if (reason !== 'escapeKeyDown') {
						handleDrawerClose();	
					}
				}}
				anchor='left'
				open={open}
				classes={{ paper: classes.MuiDrawer }}
				className='drawer'
				disableScrollLock={true}
			>
				<div className='div-closebtn'>
					<CloseIcon
						onClick={handleDrawerClose}
						onKeyDown={(e) => {
							if (e.key === ' ' || e.key === 'Enter') {
								e.preventDefault();
								handleDrawerClose();
							}
						}}
						className={classes.closebtnIcon}
						role='button'
						tabIndex='0'
						aria-label='Close'
					/>{shortname}
				</div>
				<br />

				<div onClick={handleDrawerClose}>
					<div className='navLink--container'>
						<Fade left>
							<NavLink
								to='/'
								smooth={true}
								spy='true'
								duration={2000}
							>
								<div className={classes.drawerItem}>
									<IoHomeSharp
										className={classes.drawerIcon}
									/>
									<span className={classes.drawerLinks}>
										Home
									</span>
								</div>
							</NavLink>
						</Fade>

						<Fade left>
							<NavLink
								to='/#about'
								smooth={true}
								spy='true'
								duration={2000}
							>
								<div className={classes.drawerItem}> 
									<FaUser className={classes.drawerIcon} />
									<span className={classes.drawerLinks}>
										About
									</span>
								</div>
							</NavLink> 
						</Fade>

						<Fade left> 
							<NavLink
								to='/#skills'
								smooth={true}
								spy='true'
								duration={2000}
							>
								<div className={classes.drawerItem}>
									<HiDocumentText
										className={classes.drawerIcon}
									/>
									<span className={classes.drawerLinks}>
										Skills
									</span>
								</div>
							</NavLink>
						</Fade>

						<Fade left>
							<NavLink
								to='/#services'
								smooth={true}
								spy='true'
								duration={2000}
							>
								<div className={classes.drawerItem}>
									<BsFillGearFill
										className={classes.drawerIcon}
									/>
									<span className={classes.drawerLinks}>
										Services
									</span>
								</div>
							</NavLink>
						</Fade>

						<Fade left>
							<NavLink
								to='/#projects'
								smooth={true}
								spy='true'
								duration={2000}
							>
								<div className={classes.drawerItem}>
									<AiFillProject className={classes.drawerIcon} />
									<span className={classes.drawerLinks}>
										Projects
									</span>
								</div>
							</NavLink>
						</Fade>
					</div>
				</div>
			</Drawer>
		</div>
	);
}

export default Navbar;
