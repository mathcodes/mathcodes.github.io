import React, { useContext, useRef } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { ThemeContext } from '../../contexts/ThemeContext';
import { testimonialsData } from '../../data/testimonialsData';
import './Testimonials.css';
import Button from '@mui/material/Button';


function Testimonials() {
	const { theme } = useContext(ThemeContext);
	const sliderRef = useRef();
	const settings = {
		dots: true,
		adaptiveHeight: true,
		infinite: true,
		speed: 800,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		margin: 3,
		loop: true,
		autoplaySpeed: 3000,
		draggable: true,
		swipeToSlide: true,
		swipe: true,
	};

	const gotoNext = () => {
		sliderRef.current.slickNext();
	};

	const gotoPrev = () => {
		sliderRef.current.slickPrev();
	};

	return (
		<>
			<div style={{ backgroundColor: theme.secondary50, height: '1rem' }}> </div>
			{testimonialsData.length > 0 && (
				<div
					className='testimonials'
				>
					<div className='testimonials--header' style={{ color: theme.secondary70 }}>
						<h1 >Testimonials</h1>
					</div>
					<div className='testimonials--body'>

						<div
							className='testimonials--slider'
							style={{ backgroundColor: theme.primary }}
						>
							<Slider {...settings} ref={sliderRef}>
								{testimonialsData.map((test) => (
									<div
										className='single--testimony'
										key={test.id}
									>
										<div className='testimonials--container'>
											{/* <div
                                                className='review--img'
                                                style={{
                                                    backgroundColor:
                                                        theme.secondary,
                                                }}
                                            >
                                                {/* <img
                                                    src={test.image}
                                                    alt={test.name}
                                                /> 
                                            </div> */}
											<div
												className='review--content'
												style={{
													backgroundColor:
														theme.secondary,
													color: theme.tertiary,
												}}
											>
												<p>{test.text}</p>
												<h1>{test.name}</h1>
												<h4>{test.title}</h4>
											</div>
										</div>
									</div>
								))}
							</Slider>
							<button
								className='prevBtn'
								onClick={gotoPrev}
								style={{ backgroundColor: theme.secondary }}
							>
								<FaArrowLeft
									style={{ color: theme.secondary70 }}
									aria-label='Previous testimonial'
								/>
							</button>
							<button
								className='nextBtn'
								onClick={gotoNext}
								style={{ backgroundColor: theme.secondary }}
							>
								<FaArrowRight
									style={{ color: theme.secondary70 }}
									aria-label='Next testimonial'
								/>
							</button>
						</div>
					</div>
					<div className="formBtn">
						<Button
							style={{
								backgroundColor: theme.primary,
								color: theme.secondary70,
								width: '18rem',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}} variant="contained">
							<a style={{ backgroundColor: 'none' }} href="./formpage">
								<h2>CONTACT ME</h2></a>
						</Button>
					</div>

				</div>
			)}
		</>
	);
}

export default Testimonials;
