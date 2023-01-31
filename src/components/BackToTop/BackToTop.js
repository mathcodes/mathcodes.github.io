import React, { useState } from 'react';
import { IoIosArrowDropupCircle } from 'react-icons/io';
// import { useTheme } from '@mui/material/styles';
import './BackToTop.css';

function BackToTop({theme}) {
	const [visible, setVisible] = useState(false);

	// const { theme } = useTheme();

	console.log(theme)
	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', toggleVisible);



	return (
		<div
			style={{
				display: visible ? 'inline' : 'none', 
				fontSize: '6rem',
				color: theme.palette.text.main,
			}}
			className='backToTop font-3xl'

		>
			<button onClick={scrollToTop} aria-label='Back to top' className='backToTop font-3xl'>
				<IoIosArrowDropupCircle />
			</button>
		</div>
	);
}

export default BackToTop;
