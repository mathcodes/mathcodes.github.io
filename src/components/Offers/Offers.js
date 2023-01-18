import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { offersData } from '../../data/offersData'
import { HiArrowRight } from "react-icons/hi";
import './Offers.css'
 
function Offer() {

	const { theme } = useContext(ThemeContext);

	const useStyles = makeStyles(() => ({
		viewAllBtn: {
			color: '#eaeaea',
			fontFamily: "'Poppins', sans-serif",
			backgroundColor: '#232526',
			borderRadius: '10px',
			fontSize: '2rem',
			padding: '1rem',
			transition: 'color 0.2s',
			"&:hover": {
				color: '#232526',
				backgroundColor: '#eaeaea	',
				fontFamily: "'Poppins', sans-serif"
			}
		},
		viewArr: {
			color: theme.tertiary,
			backgroundColor: theme.secondary70,
			width: '40px',
			height: '40px',
			padding: '0.5rem',
			fontSize: '1.05rem',
			borderRadius: '50%',
			cursor: 'pointer',
			transition: 'background-color 0.2s',
			"&:hover": {
				color: theme.tertiary,
				backgroundColor: theme.secondary,
			}
		},
	}));

	const classes = useStyles();

	return (
		<>
				<div style={{ backgroundColor: theme.secondary50, height: '1rem' }}> </div>

			{offersData.length > 0 && (
				<div className="offers" id="offers" style={{ backgroundColor: theme.secondary }}>
					<div className="offers--header">
						<h1 style={{ color: theme.secondary70 }}>Offer</h1>
					</div>
					<div className="offers--body">
						 
					</div>
					<div className="break"><hr /><hr /><hr /><hr /><hr /></div>
					<div className="break"><hr /><hr /><hr /><hr /><hr /></div>

					<div>
						<h1 style={{color:'#333333'}}className="offers--body">Viewing 4 of {offersData.length} offers</h1>
					</div>
					{offersData.length > 3 && (
							<div className="offers--viewAll">
								<Link to="/offers">
									<button className={classes.viewAllBtn}>
										View All 	⇨
									</button>
								</Link>
							</div>
						)}
				</div>
			)}
		</>
	)
};

export default Offer;