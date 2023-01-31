import React, { useRef } from 'react';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { testimonialsData } from '../../data/testimonialsData';
import './Testimonials.css';
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import { useTheme } from '@mui/material/styles';

function Testimonials() {
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

	const theme = useTheme();

	return (
		<>
			{testimonialsData.length > 0 && (
				<div
					className='testimonials'
					style={{ background: theme.palette.background.default }}
				>
					<div className='testimonials--header' style={{ color: theme.palette.text.main, backgroundColor: theme.palette.background.default }}>
						<h1 >Testimonials</h1>
					</div>
					<div className='testimonials--body'>

						<div
							className='testimonials--slider'
							style={{ backgroundColor: theme.palette.background.default }}
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
													theme.palette.background.paper,
													color: theme.palette.action.active,
												}}
											>
												<h3>"{test.text}"</h3>
												<h4>-{test.name}</h4>
												<h5>{test.title}</h5>
											</div>
										</div>
									</div>
								))}
							</Slider>
							<button
								className='prevBtn'
								onClick={gotoPrev}
								style={{ backgroundColor: theme.palette.background.paper }}
							>
								<FaArrowLeft
									style={{ color: theme.palette.secondary.main }}
									aria-label='Previous testimonial'
								/>
							</button>
							<button
								className='nextBtn'
								onClick={gotoNext}
								style={{ backgroundColor: theme.palette.background.paper }}
							>
								<FaArrowRight
									style={{ color: theme.palette.secondary.main }}
									aria-label='Next testimonial'
								/>
							</button>
						</div>
					</div>
				<ButtonComponent  label="CONTACT" link="./FormPage" />
				</div>
			)}
		</>
	);
}

export default Testimonials;
